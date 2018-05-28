import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import BookDetail from '@/components/BookDetail'
import Reader from '@/components/Reader'
import 'normalize.css'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    // {
    //   // path: '/BookDetail',
    //   // name: 'BookDetail',
    //   // component: BookDetail,
    // }
    {
      path: '/reader',
      name: 'Reader',
      component: Reader,
    }
  ]
});
