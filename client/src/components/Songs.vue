<template>
<v-card
    max-width="600"
    class="mx-auto"
  >
	<v-container>
      <v-row dense>
        <v-col cols="12">
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
				<v-col
          v-for="(item, i) in chartSongs"
          :key="i"
          cols="12"
        >
         <v-hover>
            <template v-slot="{ hover }">
              <v-card
                shaped
                max-height="150"
                :class="`animate__animated ${hover ? 'animate__rubberBand' : 'animate__backInUp'} animate__delay-${i/chartSongs.length}s`"
                class="cyan lighten-4 elevation-12"
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div class="titleSong indigo--text">
                    <div class="d-inline-flex justify-space-evenly py-2 px-5">
                      <v-icon color="grey darken-2" x-large>fas fa-hashtag</v-icon>
                      <div>
                        <h2 class="font-italic font-weight-medium">{{item.track.track_name}}</h2>
                        <h4 class="font-weight-light grey--text text--darken-2">{{item.track.artist_name}}</h4>
                      </div>
                    </div>
                    <v-container class="d-inline-flex">
                      <v-row no-gutters>
                        <div class="d-inline-flex album">
                          <v-icon color="grey darken-2">fas fa-compact-disc</v-icon>
                          <v-card-text>{{item.track.album_name}}</v-card-text>
                        </div>
                      </v-row>
                      <v-row no-gutters v-if="item.track.primary_genres.music_genre_list.length !== 0">
                        <div class="d-inline-flex genres">
                          <v-icon color="grey darken-2">fab fa-napster</v-icon>
                          <v-card-text>{{item.track.primary_genres.music_genre_list.length === 0 ? '' : item.track.primary_genres.music_genre_list[0].music_genre.music_genre_name}}</v-card-text>
                        </div>
                      </v-row>
                      <v-row no-gutters v-if="item.track.primary_genres.music_genre_list.length !== 0">
                        <div class="d-inline-flex likes">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-icon
                               color="grey darken-2"
                               v-bind="attrs"
                               v-on="on"
                              >
                              far fa-heart</v-icon>
                            </template>
                            <span>Likes</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-icon
                               color="blue darken-2"
                               v-bind="attrs"
                               v-on="on"
                              >
                              fas fa-heart</v-icon>
                            </template>
                            <span>not even think</span>
                          </v-tooltip>
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
export default {
	props: ['chartSongs', 'chartAmount', 'chartCountry']
}
</script>

<style scoped>
.description {
	display: inline-flex;
}
.titleSong {
  width: 100%;
}
</style>
