import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import 'normalize.css'
import '@/assets/reset.less'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
