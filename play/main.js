import { createApp } from "vue";
import App from "./App.vue";
import ImgCache from "ImgCache/index.js"

const app = createApp(App)
app.use(ImgCache)
app.mount("#app")