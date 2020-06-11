<template>
	<div
  class="text-center"
  >
    <v-dialog
      v-model="this.$store.state.lyricsState"
      width="500"
    >

      <v-card>
        <v-card-title
          class="font-italic font-weight-medium indigo lighten-1 white--text"
          primary-title
        >
         <h1 class="animate__animated animate__lightSpeedInRight animate__delay-2s">Lyrics of</h1>
        </v-card-title>
          <h2 class="font-italic font-weight-medium">{{info.track}}</h2>
          <h4 class="font-weight-light grey--text text--darken-2">{{info.artist}}</h4>

        <v-card-text>
          {{lyrics}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="indigo lighten-1">
          <v-spacer></v-spacer>
          <v-icon
            color="white"
            @click="() => this.$store.dispatch('notShowLyrics')"
            class="animate__animated animate__fadeInLeftBig animate__delay-2s"
            large
            fab
          >
            far fa-window-close
          </v-icon>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
	props: ['lyrics', 'showLyrics', 'info']
}
</script>

<style>

</style>
