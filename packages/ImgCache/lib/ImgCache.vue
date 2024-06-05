<template>
  <img 
    :src="imageSrc" 
    :alt="props.alt"  
    :object-fit="props.fit"
    :style="props.style"
    >
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Dexie from 'dexie'

// 定义数据库
const db = new Dexie('ImageCacheDB')
db.version(1).stores({
  images: 'url, data'
})

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  fit: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  },
  style: {
    type: Object,
    default: {}
  }
})
defineOptions({
  name: "ImgCache"
})

const imageSrc = ref('')

// 加载图片函数
const loadImage = async (url) => {
  // 尝试从数据库获取图片
  const cachedImage = await db.images.get(url)
  if (cachedImage) {
    imageSrc.value = cachedImage.data
    return
  }

  // 如果没有缓存图片，则通过fetch获取
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const blob = await response.blob()
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64data = reader.result
      imageSrc.value = base64data

      // 将图片缓存到数据库
      db.images.put({ url, data: base64data })
    }
    reader.readAsDataURL(blob)
  } catch (error) {
    console.error('Failed to load image:', error)
  }
}

onMounted(() => {
  loadImage(props.src)
})

onUnmounted(() => {
  imageSrc.value = ''
})
</script>