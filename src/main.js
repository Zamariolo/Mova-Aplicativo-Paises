import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

import Axios from './plugins/axios';
Vue.use(Axios);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
