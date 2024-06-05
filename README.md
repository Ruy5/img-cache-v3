# ImgCacheV3

## 安装
```bash
npm i img-cache-v3
```

## main.js中引入

```js
import ImgCache from 'img-cache-v3'

const app = createApp(App)
app.use(ImgCache)
app.mount('#app')
```

## Vue组件中使用
```html
<script setup>

</script>

<template>
  <ImgCache src="/vite.svg"/>
</template>

<style scoped>

</style>
```

## 参数列表

| 属性名 | 说明 | 类型 |
|:---------: | :---------:| :---------: |
| src | 图片源地址，同原生属性一致 | String |
| fit | 确定图片如何适应容器框，同原生 object-fit |String|
| alt | 原生属性 alt |String|
| style | 样式 |Object|