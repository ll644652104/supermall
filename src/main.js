import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  // 需要这边引入才能使用vue-router的功能
  router,
  render: h => h(App),
}).$mount('#app')
