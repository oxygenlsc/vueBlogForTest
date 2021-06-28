import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import './mock'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import router from './router'

import showMessage from './utils/showMessage'
Vue.prototype.$showMessage = showMessage;

//注册全局指令


Vue.use(ElementUI);
import vLoading from './directives/loading'
Vue.directive('loading',vLoading)
//markdown使用
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
