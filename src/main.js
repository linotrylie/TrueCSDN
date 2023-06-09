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
import VueClipboards from 'vue-clipboard2'
import cookies from 'vue-cookies'
import request from '@/utils/request.js'
import api from './api' // 导入api接口

import 'virtual:svg-icons-register'

import SvgIcon from '@/assets/icons/svg-icon.vue'
import global from '@/utils/global.js'

Vue.component('svg-icon', SvgIcon)
Vue.prototype.$cookies = cookies
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.prototype.$global = global; // 将api挂载到vue的原型上
// 高亮语法
Vue.config.productionTip = false // 设置为 false 以阻止 Vue 在启动时生成生产提示
Vue.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.use(VueClipboards) //复制插件
Vue.use(VueDOMPurifyHTML)//markdown文本过滤
Vue.use(ElementUI)//elementUI
Vue.use(mavonEditor)//编辑器
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this // 启用全局事件总线功能
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App),
})
