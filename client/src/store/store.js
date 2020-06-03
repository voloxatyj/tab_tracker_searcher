import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		token: null,
		user: null,
		isLoggedIn: false,
		loading: false
	},
	mutations: {
		initLoading (state) {
			state.loading = true
			console.log(state.loading)
		},
		setToken (state, token) {
			state.token = token
			if (token) {
				state.isLoggedIn = true
			} else state.isLoggedIn = false
		},
		setUser (state, user) {
			state.user = user
		}
	},
	actions: {
		setToken ({commit}, token) {
			commit('setToken', token)
		},
		initLoading ({commit}) {
			commit('initLoading')
		},
		setUser ({commit}, user) {
			commit('setUser', user)
		}
	}
})
