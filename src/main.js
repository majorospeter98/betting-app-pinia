import { createApp } from "vue";
import App from "./App.vue";
import  './assets/tailwind.css'//
import HU from "./locales/hu.json"
import EN from "./locales/en.json"
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n"; 
import router from './router'
const pinia = createPinia();
const messages ={
    hu:HU,
    en:EN
}
const i18n = createI18n({
    locale: "hu",
    fallbackLocale: "en",
    globalInjection:true,
    messages
})


const app = createApp(App);
app.use(router);
app.use(i18n)
app.use(pinia);
app.mount("#app");
