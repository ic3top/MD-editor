import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import store from './store';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/themes/mdc-dark-indigo/theme.css';
import 'primeicons/primeicons.css';

createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(store)
  .use(router)
  .mount('#app');
