import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Topic from '../views/Topic'
import Login from '../views/Login'
import Messages from '../views/Messages'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home', 
    component: Home
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component: Topic
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages,
  }
]

const router = new VueRouter({
  routes
})

export default router
