import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
import Friendship from '../components/Friendship.vue'
import FriendshipRequest from '../components/FriendshipRequest.vue'
import User from '../components/User.vue'
import UserMe from '../components/UserMe.vue'
import UserId from '../components/UserId.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/friendship',
    name: 'Friendship',
    component: Friendship
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/user/me',
    name: 'UserMe',
    component: UserMe
  },
  {
    path: '/user/:id(\\d+)',
    name: 'UserId',
    component: UserId
  },
  {
    path: '/friendship/request',
    name: 'FriendshipRequest',
    component: FriendshipRequest
  },
  { path: '/user/:id', component: User },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
