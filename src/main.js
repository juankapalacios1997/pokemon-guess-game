import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

//import translations
import en from "./locale/en"
import es from "./locale/es"
import fr from "./locale/fr"

//config i18n
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en, es, fr }
})  

import './css/styles.css'
import './css/animations.css'

const app = createApp(App);
app.use(i18n);
app.mount('#app');
