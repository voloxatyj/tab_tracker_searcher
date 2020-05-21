<template>
  <v-toolbar
    color="indigo lighten-1"
    dense
    flat
    fixed
    dark
  >
    <v-icon class="white--text mr-5">mdi-album</v-icon>
      <v-toolbar-title class="white--text">
        <span
          @click="navigateTo({name: 'root'})"
          class="home"
        >
        TrackSearcherApp
        </span>
      </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-tooltip bottom transition color="cyan">
        <template v-slot:activator="{ on }">
          <v-btn outlined small v-on="on" @click="navigateTo({name: 'register'})">
            <v-icon class="white--text">mdi mdi-account-plus</v-icon>
          </v-btn>
        </template>
        <span>SignUp</span>
      </v-tooltip>
      <v-tooltip bottom transition color="cyan">
        <template v-slot:activator="{ on }">
          <v-btn outlined small v-on="on" @click="navigateTo({name: 'login'})">
            <v-icon class="white--text">mdi mdi-account-key</v-icon>
          </v-btn>
        </template>
        <span>LogIn</span>
      </v-tooltip>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color:midnightblue;
}
.v-toolbar__items {
  height: auto;
}
.v-btn {
  border-radius: 50%!important;
  border-color: #3949AB;
}
.v-btn:hover {
  color:cyan;
}
</style>
