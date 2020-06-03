<template>
  <v-footer
    dark
    fixed
		padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="indigo lighten-1">
        <strong class="subheading animate__animated animate__lightSpeedInRight animate__delay-1s">Get connected to my on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
					fab
        >
          <v-icon size="24px" color="blue darken-2" class="animate__animated animate__backInUp animate__delay-2s">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
	data: () => {
		return {
			icons: [
				'fab fa-facebook',
				'fab fa-linkedin',
				'fab fa-instagram',
				'fab fa-twitter'
			]
		}
	}
}
</script>

<style>

</style>
