import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = r => require.ensure([], () => r(require('@/layout/auth/Login.vue')), 'Login');
const Home = r => require.ensure([], () => r(require('@/layout/home/home.vue')), 'Home');
const PostList = r => require.ensure([], () => r(require('@/layout/article/List.vue')), 'PostList');
const Video = r => require.ensure([], () => r(require('@/layout/video/Detail.vue')), 'Video');
const VideoList = r => require.ensure([], () => r(require('@/layout/video/Index.vue')), 'VideoList');
const SoftwareList = r => require.ensure([], () => r(require('@/layout/software/Index.vue')), 'SoftwareList');
const ArticleDetail = r => require.ensure([], () => r(require('@/layout/article/Detail.vue')), 'ArticleDetail');



const routes = [
  {
    path: '/',
    index:1,
    isHidden:false,
    name:'home',
    menu:'首页',
    component: ()=>import('@/layout/home/home.vue'),
  },
  {
    path: '/article/:title/:id',
    index:2,
    isHidden:true,
    name:'article-info',
    menu:'文章详情',
    component:()=>import('@/layout/article/Detail.vue'),
  },
  {
    path: '/login',
    index:3,
    isHidden:true,
    name:'login',
    menu:'登录',
    component: ()=>import('@/layout/auth/Login.vue'),
  },
  {
    path: '/post',
    index:4,
    isHidden:false,
    name:'article-list',
    menu:'文章',
    component: ()=>import('@/layout/article/List.vue'),
  },
  {
    path: '/user-center/:id',
    index:5,
    isHidden:true,
    name:'user-center',
    menu:'用户中心',
    component: ()=>import('@/layout/home/home.vue'),
  },
  {
    path: '/video/:title/:id',
    index:6,
    isHidden:true,
    name:'video-info',
    menu:'视频详情',
    component: ()=>import('@/layout/video/Detail.vue'),
  },
  {
    path: '/video',
    index:7,
    isHidden:false,
    name:'video',
    menu:'视频',
    component: ()=>import('@/layout/video/Index.vue'),
  },
  {
    path: '/software',
    index:8,
    isHidden:false,
    name:'software',
    menu:'软件工具',
    component: ()=>import('@/layout/software/Index.vue'),
  },
  {
    path: '/software/:title/:id',
    index:9,
    isHidden:true,
    name:'software-info',
    menu:'软件详情',
    component: ()=>import('@/layout/article/Detail.vue'),
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

