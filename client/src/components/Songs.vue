<template>
<v-card
    max-width="600"
    class="mx-auto"
  >
	<v-container>
      <v-row dense>
        <v-col cols="12" px-5>
          <v-card
					color="cyan"
					class="animate__animated animate__backInDown white--text d-flex justify-space-between align-center px-5"
          style="{width:-webkit-fill-available}"
          >
            <v-card-title>Top {{chartAmount}} Songs from {{chartCountry}} Charts</v-card-title>
            <v-btn
             color="blue darken-2"
             class="animate__animated animate__bounceInDown animate__delay-2s"
             dark small fab
            >
              <v-icon>fab fa-searchengin </v-icon>
            </v-btn>
          </v-card>
        </v-col>
        <Lyrics :lyrics="lyrics" :info="info" />
				<v-col
          v-for="(item, i) in chartSongs"
          :key="i"
          cols="12"
        >
         <v-hover>
            <template>
              <v-card
                shaped
                max-height="150"
                :class="`cyan lighten-4 elevation-12 animate__animated animate__backInUp animate__delay-${i/chartSongs.length}s`"
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div class="titleSong indigo--text">
                    <div class="d-inline-flex main">
                      <v-tooltip left>
                        <template v-slot:activator="{ on }">
                          <v-icon
                           color="indigo lighten-1"
                           class="animate__animated animate__bounce animate__delay-3s"
                           x-large
                           v-on="on"
                           @click="getLyrics(item)"
                          >
                          fas fa-hashtag</v-icon>
                        </template>
                        <span>Get Lyrics</span>
                      </v-tooltip>
                      <div>
                        <h2 class="font-italic font-weight-medium">{{item.track.track_name}}</h2>
                        <h4 class="font-weight-light grey--text text--darken-2">{{item.track.artist_name}}</h4>
                      </div>
                    </div>
                    <v-container class="d-inline-flex">
                      <v-row no-gutters class="d-flex justify-center">
                        <div class="d-inline-flex album">
                          <v-icon
                           color="grey darken-2"
                           class="animate__animated animate__bounceInDown animate__delay-2s"
                          >
                          fas fa-compact-disc</v-icon>
                          <v-card-text>{{item.track.album_name}}</v-card-text>
                        </div>
                      </v-row>
                      <v-row no-gutters class="d-flex justify-center" v-if="item.track.primary_genres.music_genre_list.length !== 0">
                        <div class="d-inline-flex genres">
                          <v-icon
                           color="grey darken-2"
                           class="animate__animated animate__bounceInDown animate__delay-2s"
                          >
                          fab fa-napster</v-icon>
                          <v-card-text>{{item.track.primary_genres.music_genre_list.length === 0 ? '' : item.track.primary_genres.music_genre_list[0].music_genre.music_genre_name}}</v-card-text>
                        </div>
                      </v-row>
                      <v-row no-gutters class="d-flex justify-center">
                        <div class="d-inline-flex likes">
                          <v-icon
                          :likes="likes"
                          v-if="likes"
                          color="grey darken-2"
                          class="animate__animated animate__bounceInDown animate__delay-2s"
                          >
                          far fa-heart</v-icon>
                          <v-icon
                          v-else
                          color="blue darken-2"
                          class="animate__animated animate__bounceInDown animate__delay-2s"
                          >
                          fas fa-heart</v-icon>
                        </div>
                      </v-row>
                    </v-container>
                  </div>
                </div>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
</v-card>
</template>

<script>
import axios from 'axios'
import config from '../utilits/config'
import Lyrics from '@/components/Lyrics'

export default {
	components: {
		Lyrics
	},
	props: ['chartSongs', 'chartAmount', 'chartCountry'],
	data () {
		return {
			likes: true,
			lyrics: null,
			info: {
				track: '',
				artist: ''
			}
		}
	},
	methods: {
		getLyrics (item) {
			axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + item.track.track_id + '&apikey=' + config.MUSIC_MATCH_API_KEY)
				.then(res => {
					this.lyrics = res.data.message.body.lyrics.lyrics_body
					this.info.track = item.track.track_name
					this.info.artist = item.track.artist_name
				})
				.then(() => {
					this.$store.dispatch('showLyrics')
				})
				.catch(err => console.log(err))
		}
	}
}
</script>

<style scoped>
.description {
	display: inline-flex;
}
.titleSong {
  width: 100%;
}
.hashtag {
  padding-right: 30px;
  cursor: pointer;
}
.main {
  width:100%;
  justify-content: space-evenly;
  align-items: flex-end;
}
.v-card:last-child {
  margin-bottom: 30px;
}
</style>
