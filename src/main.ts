import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { VueQueryPlugin } from 'vue-query';

import '@/assets/styles/main.css';

import App from './App.vue';
import router from './router';


const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueQueryPlugin);

app.mount('#app');
