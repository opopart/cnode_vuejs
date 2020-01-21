import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import tab from './utils/tab.js'
import moment from "moment";

Vue.config.productionTip = false
Vue.prototype.$tab = tab;
Vue.prototype.$moment = moment;
moment.locale('zh-cn')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
