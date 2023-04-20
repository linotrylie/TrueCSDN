import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/layout/home/home.vue'
import Login from '@/layout/auth/Login.vue'
import PostList from '@/layout/article/List.vue'
import Video from '@/layout/video/index.vue'
import ArticleDetail from '@/layout/article/Detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    index:1,
    isHidden:false,
    name:'home',
    component: Home,
  },
  {
    path: '/article/:title/:id',
    index:2,
    isHidden:true,
    name:'article-info',
    component: ArticleDetail,
  },
  {
    path: '/login',
    index:3,
    isHidden:true,
    name:'login',
    component: Login,
  },
  {
    path: '/post',
    index:4,
    isHidden:false,
    name:'article-list',
    component: PostList,
  },
  {
    path: '/user-center/:id',
    index:5,
    isHidden:true,
    name:'user-center',
    component: Login,
  },
  {
    path: '/video/:title/:id',
    index:6,
    isHidden:true,
    name:'video-info',
    component: Video,
  },
  {
    path: '/video',
    index:6,
    isHidden:false,
    name:'video-info',
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

