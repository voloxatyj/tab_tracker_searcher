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
		},
		setToken (state, token) {
			state.token = token
			if (token) {
				state.isLoggedIn = true
			} else state.isLoggedIn = false
		},
		setUser (state, user) {
			state.user = user
		},
		getChartOfSongs (state) {
			state.loading = false
		}
	},
	actions: {
		setToken ({commit}, token) {
			commit('setToken', token)
		},
		initLoading ({commit}) {
			commit('initLoading')
		},
		getChartOfSongs ({commit}) {
			commit('getChartOfSongs')
		},
		setUser ({commit}, user) {
			commit('setUser', user)
		}
	}
})
