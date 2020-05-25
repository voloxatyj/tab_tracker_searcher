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
        class="ma-2 mt-2"
        >
          <v-card-title>Login</v-card-title>
        </v-toolbar>
          <div class="d-grid pa-5">
            <form
              name="tab-tracker-form"
              autocomplete="off"
            >
              <v-text-field
                label="email"
                v-model="email"
                placeholder="email"
                outlined
                solo
                clearable
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-text-field
                label="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                v-model="password"
                placeholder="password"
                autocomplete="new-password"
                outlined
                solo
                clearable
                @click:append="show = !show"
              ></v-text-field>
            </form>
            <v-spacer></v-spacer>
              <div class="error" v-html="error" />
            <v-spacer></v-spacer>
            <v-card-actions class="justify-center">
              <v-btn class="cyan" @click="login">Login</v-btn>
            </v-card-actions>
          </div>
            <small>don’t have an account?
              <router-link to="register">go here</router-link>
            </small>
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
      error: null,
      show: false
    }
  },
  methods: {
    async login () {
      try {
        const res = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', res.data.token)
        this.$store.dispatch('setUser', res.data.user)
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
