import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss' // 全局样式
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

// 高亮语法
Vue.config.productionTip = false // 设置为 false 以阻止 Vue 在启动时生成生产提示
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
Vue.use(VueDOMPurifyHTML)
Vue.use(ElementUI)
Vue.use(mavonEditor)
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this // 启用全局事件总线功能
  },
  el: '#app',
  router,
  components:{App},
  template:'<App/>',
  store,
  render: h => h(App),
})
