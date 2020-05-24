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
            <form
              name="tab-tracker-form"
              autocomplete="off"
            >
              <v-text-field
                label="email"
                v-model="email"
                placeholder="email"
                :rules="[rules.requiredEmail]"
                outlined
                solo
                clearable
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-text-field
                label="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                counter="8"
                ref="password"
                :rules="[rules.password]"
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
            <v-card-actions class="justify-center p-2">
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
      error: null,
      show: false,
      rules: {
        requiredEmail: value => new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value) ||
        'Provide a valid email address',
        password: value => new RegExp('^[a-zA-Z0-9]{8,32}$').test(value) || 'It must contain: lower case, upper case, numerics characters.'
      }
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
