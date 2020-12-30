import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "login",
	meta: {
		name: '主页'
	}
  },
  {
    path: '/login',
    name: 'Login',
	meta: {
		name: '登录'
	},
    component: () => import('../views/Login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
