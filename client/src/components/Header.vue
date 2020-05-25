<template>
  <v-toolbar
    color="indigo lighten-1"
    height="70px"
    flat
    fixed
    dark
    rounded
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
          <v-btn
            outlined
            small
            v-on="on"
            @click="navigateTo({name: 'register'})"
            class="mr-2"
            v-if="!$store.state.isLoggedIn"
          >
            <v-icon class="white--text">fas fa-user-plus</v-icon>
          </v-btn>
        </template>
        <span>SignUp</span>
      </v-tooltip>
      <v-tooltip bottom transition color="cyan" v-if="!$store.state.isLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn
           outlined
           small
           v-on="on"
           @click="navigateTo({name: 'login'})"
          >
            <v-icon class="white--text" >fas fa-user-check</v-icon>
          </v-btn>
        </template>
        <span>LogIn</span>
      </v-tooltip>
      <v-tooltip bottom transition color="cyan" v-else>
        <template v-slot:activator="{ on }">
          <v-btn
           outlined
           small
           v-on="on"
           @click="navigateTo({name: 'login'})"
          >
            <v-icon class="white--text" >fas fa-user-alt-slash</v-icon>
          </v-btn>
        </template>
        <span>LogOut</span>
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
  border-color: whitesmoke;
  padding: 7px!important;
}
.v-btn:hover {
  color:cyan;
}
</style>
