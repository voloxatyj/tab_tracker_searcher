import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Finder from '@/components/Finder'
import Root from '@/components/Root'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/root',
			name: 'root',
			component: Root
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/finder',
			name: 'finder',
			component: Finder
		}
	]
})
