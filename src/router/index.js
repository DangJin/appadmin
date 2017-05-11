import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/login'
import Home from '@/components/home'
import User from '@/Page/User'
import System from '@/Page/System'
import Article from '@/Page/Article'
import Editor from '@/Page/Editor'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: to => {
        return 'Login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/user',
          name: 'User',
          component: User
        },
        {
          path: '/system',
          name: 'System',
          component: System
        },
        {
          path: '/article',
          name: 'Article',
          component: Article
        },
        {
          path: '/editor',
          name: 'Editor',
          component: Editor
        }
      ]
    }
  ]
})
