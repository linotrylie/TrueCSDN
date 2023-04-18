import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/layout/home/home.vue'
import Login from '@/layout/auth/Login.vue'
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
    path: '/home',
    index:2,
    isHidden:false,
    name:'首页2',
    component: Home,
  },
  {
    path: '/home',
    index:3,
    isHidden:false,
    name:'首页3',
    component: Home,
  },
  {
    path: '/home',
    index:4,
    isHidden:false,
    name:'首页4',
    component: Home,
    children:[
      {
        path: '/home',
        index:1,
        isHidden:false,
        name:'首页5',
        component: Home,
      },
      {
        path: '/home',
        index:2,
        isHidden:false,
        name:'首页6',
        component: Home,
      },
      {
        path: '/home',
        index:3,
        isHidden:false,
        name:'首页7',
        component: Home,
      },
    ]
  },
  {
    path: '/home',
    index:5,
    isHidden:false,
    name:'首页5',
    component: Home,
  },
  {
    path: '/article/detail/:id',
    index:6,
    isHidden:true,
    name:'文章详情',
    component: ArticleDetail,
  },
  {
    path: '/login',
    index:7,
    isHidden:true,
    name:'登录',
    component: Login,
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

