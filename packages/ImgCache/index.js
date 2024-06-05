import ImgCache from "./lib/ImgCache.vue";

export default  {
    install: (app) => {
        app.component(ImgCache.name, ImgCache);
    }
}