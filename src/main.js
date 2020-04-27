import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Auth from './directives/auth';
import Authorized from './components/Authorized.vue';

Vue.use(Auth);
Vue.component('Authorized',Authorized)

new Vue({
  render: h => h(App),
}).$mount('#app')
