import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/layout/home/home.vue'
import Login from '@/layout/auth/Login.vue'
import PostList from '@/layout/article/List.vue'
import Video from '@/layout/video/Detail.vue'
import VideoList from '@/layout/video/Index.vue'
import SoftwareList from '@/layout/software/Index.vue'

import ArticleDetail from '@/layout/article/Detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    index:1,
    isHidden:false,
    name:'home',
    menu:'首页',
    component: Home,
  },
  {
    path: '/article/:title/:id',
    index:2,
    isHidden:true,
    name:'article-info',
    menu:'文章详情',
    component: ArticleDetail,
  },
  {
    path: '/login',
    index:3,
    isHidden:true,
    name:'login',
    menu:'登录',
    component: Login,
  },
  {
    path: '/post',
    index:4,
    isHidden:false,
    name:'article-list',
    menu:'文章',
    component: PostList,
  },
  {
    path: '/user-center/:id',
    index:5,
    isHidden:true,
    name:'user-center',
    menu:'用户中心',
    component: Login,
  },
  {
    path: '/video/:title/:id',
    index:6,
    isHidden:true,
    name:'video-info',
    menu:'视频详情',
    component: Video,
  },
  {
    path: '/video',
    index:7,
    isHidden:false,
    name:'video',
    menu:'视频',
    component: VideoList,
  },
  {
    path: '/software',
    index:8,
    isHidden:false,
    name:'software',
    menu:'软件工具',
    component: SoftwareList,
  },
  {
    path: '/software/:title/:id',
    index:9,
    isHidden:true,
    name:'software-info',
    menu:'软件详情',
    component: ArticleDetail,
  },
]

// export default new VueRouter({
//   // mode: 'history', // 需要服务器支持
//   mode: 'hash',
//   routes,
// }).beforeEach((to,from,next) => {
//
//   next();
// });


const route =  new VueRouter({
  // mode: 'history', // 需要服务器支持
  mode: 'hash',
  routes,
});
route.beforeEach((to,from,next) => {
  // if(to.path.indexOf('detail') > 0) {
  //   next({path:'/'});
  // }
  next();
});
export default route;

