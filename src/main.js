import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import i18n from './i18n'
import VuePictureSwipe from 'vue3-picture-swipe';

createApp(App).use(i18n).use(VuePictureSwipe).use(store).use(router).mount('#app')
