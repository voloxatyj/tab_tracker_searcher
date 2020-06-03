<template>
	<v-layout class="pt-5">
		<v-flex xs6 offset-xs3>
			<v-card class="mx-auto" max-width="1000" raised>
				<v-toolbar color="cyan" dark class="ma-2">
					<v-card-title>Songs</v-card-title>
					<v-spacer></v-spacer>
					<div class="items">
						<v-menu bottom origin="center center" transition="scale-transition">
							<template v-slot:activator="{ on }">
								<v-btn color="blue darken-2" class="animate__animated animate__flipInX animate__delay-4s" dark small v-on="on" fab>
									<v-icon>fas fa-globe</v-icon>
								</v-btn>
							</template>
							<v-list light class="list">
								<v-list-item
									class="item"
									v-for="(item, i) in countries"
									:key="i"
									@click="getCountry(item.title)"
								>
									<v-list-item-title class="primary--text">{{
										item.title
									}}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
						<v-menu bottom origin="center center" transition="scale-transition">
							<template v-slot:activator="{ on }">
								<v-btn color="blue darken-2" class="animate__animated animate__flipInY animate__delay-4s" dark small v-on="on" fab>
									<v-icon>fas fa-sort-amount-down</v-icon>
								</v-btn>
							</template>
							<v-list light class="list">
								<v-list-item
									class="item"
									v-for="(item, i) in amounts"
									:key="i"
									@click="getAmount(item.title)"
								>
									<v-list-item-title class="primary--text">{{
										item.title
									}}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</div>
				</v-toolbar>
				<div class="d-grid pa-5">
					<v-btn color="grey lighten-2" class="animate__animated animate__zoomInUp animate__delay-5s" dark x-large fab @click="getAllSongs">
						<v-icon x-large color="blue darken-2">fab fa-searchengin </v-icon>
					</v-btn>
					<!-- Info card - Wrong credentials -->
						<v-dialog
							v-model="dialog"
							v-if="dialog"
							:dialog="dialog"
							width="500"
						>
							<v-card>
								<v-card-title
									class="headline grey lighten-2 grey--text"
									primary-title
								>
									<h3>Information Card</h3>
								</v-card-title>

								<v-card-text>
									<h3>
										Please select country and number of songs you want to see):
									</h3>
								</v-card-text>

								<v-divider></v-divider>

								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="primary" text @click="dialog = false">
										I accept
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					<!-- Loading card -->
						<v-dialog
							hide-overlay
							persistent
							:dialog="$store.state.loading"
							:loading="dialog"
							v-model="$store.state.loading"
							width="300"
						>
							<v-card
								color="indigo lighten-1"
								dark
							>
								<v-card-text>
									Please stand by
									<v-progress-linear
										indeterminate
										color="white"
										class="mb-0"
									></v-progress-linear>
								</v-card-text>
							</v-card>
						</v-dialog>
					</div>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>

export default {
	data: function () {
		return {			songs: null,
			countries: [
				{ title: 'USA' },
				{ title: 'GBR' },
				{ title: 'UKR' },
				{ title: 'FRA' },
				{ title: 'JPN' }
			],
			amounts: [
				{ title: '5' },
				{ title: '10' },
				{ title: '15' },
				{ title: '20' }
			],
			country: null,
			amount: null,
			sheet: false,
			dialog: false,
			direction: 'bottom',
			transition: 'scale-transition'
		}
	},
	methods: {
		getAmount (amount) {
			this.amount = amount
		},
		getCountry (country) {
			switch (country) {
			case 'USA':
				this.country = 'US'
				break
			case 'GBR':
				this.country = 'GB'
				break
			case 'UKR':
				this.country = 'UA'
				break
			case 'FRA':
				this.country = 'FR'
				break
			case 'JPN':
				this.country = 'JP'
				break
			default:
				return {}
			}
		},
		getAllSongs () {
			if (this.country !== null || this.amount !== null) {
				this.dialog = false
				this.$store.dispatch('initLoading')
				// return this.dialog
				// axios.get
				// `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=${this.amount}&country=${this.country}&f_has_lyrics=1&apikey=${config.MUSIC_MATCH_API_KEY}`
				// .then(res => {
				// 	this.songs = res.data
				// })
				// .then(() => {
				// 	this.loading = false
				// })
				// .catch(err => console.log(err))
			} else {
				this.dialog = true
			}
		}
	}
}
</script>

<style scoped>
.list {
	border: 1px solid cyan;
}
.items {
	display: inline-flex;
	width: 30%;
	justify-content: space-evenly;
}
.item:hover {
	cursor: pointer;
	background-color: lightcyan;
	opacity: 0.3;
	transition: ease-in-out;
}
</style>
