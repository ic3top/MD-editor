import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import App from './App.vue';
import router from './router';
import store from './store';

import 'primevue/resources/themes/mdc-dark-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

createApp(App)
  .use(PrimeVue)
  .use(ConfirmationService)
  .use(store)
  .use(router)
  .mount('#app');
