import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/layout/home/home.vue'
import Login from '@/layout/auth/Login.vue'
import PostList from '@/layout/post/List.vue'
import Video from '@/layout/video/index.vue'
import ArticleDetail from '@/layout/article/Detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    index:1,
    isHidden:false,
    name:'首页',
    component: Home,
  },
  {
    path: '/article/detail/:id',
    index:2,
    isHidden:true,
    name:'文章详情',
    component: ArticleDetail,
  },
  {
    path: '/login',
    index:3,
    isHidden:true,
    name:'登录',
    component: Login,
  },
  {
    path: '/post/list',
    index:4,
    isHidden:false,
    name:'文章',
    component: PostList,
  },
  {
    path: '/user-center/:id',
    index:5,
    isHidden:true,
    name:'用户中心',
    component: Login,
  },
  {
    path: '/video',
    index:6,
    isHidden:false,
    name:'视频',
    component: Video,
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

