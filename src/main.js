import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import Register from './components/Register.vue'
import Friendship from './components/Friendship.vue'
import FriendshipRequest from './components/FriendshipRequest.vue'
import User from './components/User.vue'
import UserMe from './components/UserMe.vue'
import UserId from './components/UserId.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Register,
  Login,
  Logout,
  Friendship,
  FriendshipRequest,
  User,
  UserMe,
  UserId,
  render: h => h(App)
}).$mount('#app')
