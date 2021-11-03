import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import breakpoint from './plugins/breakpoint'


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  breakpoint,
  render: h => h(App)
}).$mount('#app')
