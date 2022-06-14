import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WelcomePage from '@/components/WelcomePage'
import MainPage from '@/components/MainPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/CloudFunc/',
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
