import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/layout/home/home.vue'
import Login from '@/layout/auth/Login.vue'
import PostList from '@/layout/article/List.vue'
import Video from '@/layout/video/Detail.vue'
import VideoList from '@/layout/video/Index.vue'
import VideoList2 from '@/layout/video/index2.vue'

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
    menu:'首页',
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
    index:6,
    isHidden:false,
    name:'video',
    menu:'视频',
    component: VideoList,
  },
  {
    path: '/video2',
    index:6,
    isHidden:false,
    name:'video',
    menu:'视频',
    component: VideoList2,
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

