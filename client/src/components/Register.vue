<template>
  <v-layout class="pt-5">
    <v-flex xs6 offset-xs3>
      <v-card
        class="mx-auto"
        max-width="344"
        raised
      >
        <v-toolbar
        color="cyan"
        dark
        class="ma-2"
        >
          <v-card-title>Register</v-card-title>
        </v-toolbar>
          <div class="d-grid pa-5">
            <v-text-field
              label="email"
              v-model="email"
              placeholder="email"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-text-field
              label="password"
              v-model="password"
              placeholder="password"
            ></v-text-field>
            <v-spacer></v-spacer>
              <div class="error" v-html="error" />
            <v-spacer></v-spacer>
            <v-card-actions class="justify-center">
              <v-btn class="cyan" @click="register">Register</v-btn>
            </v-card-actions>
          </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color:brown
}
.invisibleSpacer {
  margin: 1%
}
</style>
