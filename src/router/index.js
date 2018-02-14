import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PropertiesObserver from '@/components/PropertiesObserver'
import ClassLink from '@/components/ClassLink'
import List from '@/components/List'
import Event from '@/components/Event'
import Transition from '@/components/Transition'
import TodoConnected from '@/components/TodoConnected'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      title: 'Hello',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'P&O',
      title: 'Properties&Observer',
      component: PropertiesObserver
    },
    {
      path: '/object',
      name: 'classLink',
      title: 'classLink',
      component: ClassLink
    },
    {
      path: '/list',
      name: 'List',
      title: 'List',
      component: List
    },
    {
      path: '/event',
      name: 'Event',
      title: 'Event',
      component: Event
    },
    {
      path: '/trans',
      name: 'Transition',
      title: 'Transition',
      component: Transition
    },
    {
      path: '/todo',
      name: 'TodoConnected',
      title: 'TodoConnected',
      component: TodoConnected
    },
    {
      path: '/login',
      name: 'Login',
      title: 'Login',
      component: Login
    }
  ]
})
