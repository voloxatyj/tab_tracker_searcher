<template>
  <v-toolbar
    color="indigo lighten-1"
    height="70px"
    z-index="5"
    flat
    fixed
    dark
    rounded
  >
      <v-toolbar-title class="white--text mr-5">
        <span
          @click="navigateTo({name: 'root'})"
          class="animate__animated animate__flash animate__delay-1s animate__repeat-1 3"
        >
        #MAD_MAN_APP
        </span>
      </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="d-inline-flex justify-space-around ml-5 pl-5" style="width:20%">
        <!-- Song’s Menu Button -->
          <v-speed-dial
            v-if="$store.state.isLoggedIn"
            class="animate__animated animate__bounce animate__delay-1s"
            v-model="songIcons"
            :top="top"
            :bottom="bottom"
            :right="right"
            :left="left"
            :direction="direction"
            :open-on-hover="hover"
            :transition="transition"
          >
          <template v-slot:activator>
            <v-btn
              v-model="songIcons"
              color="blue darken-2"
              dark
              small
              fab
            >
              <v-icon>fas fa-podcast</v-icon>
            </v-btn>
          </template>
          <v-btn
            fab
            dark
            medium
            color="amber darken-3"
            @click="navigateTo({name: 'songs'})"
          >
            <v-icon>fas fa-chart-bar</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            large
            color="green accent-4"
            @click="navigateTo({name: 'login'})"
          >
            <v-icon>fas fa-fingerprint</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            x-large
            color="deep-orange darken-1"
            @click="navigateTo({name: 'login'})"
          >
            <v-icon>fas fa-list-alt</v-icon>
          </v-btn>
        </v-speed-dial>
        <!-- User Menu Button -->
        <v-speed-dial
          v-model="userIcons"
          class="animate__animated animate__bounce animate__delay-1s"
          :top="top"
          :bottom="bottom"
          :right="right"
          :left="left"
          :direction="direction"
          :open-on-hover="hover"
          :transition="transition"
        >
        <template v-slot:activator>
          <v-btn
            v-model="userIcons"
            color="blue darken-2"
            dark
            small
            fab
          >
            <v-icon v-if="$store.state.isLoggedIn" @click="logout">fas fa-user-alt-slash</v-icon>
            <v-icon v-else>fas fa-users-cog</v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          medium
          color="amber darken-3"
          @click="navigateTo({name: 'register'})"
        >
          <v-icon>fas fa-user-plus</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          large
          color="green accent-4"
          @click="navigateTo({name: 'login'})"
        >
          <v-icon>fas fa-user-check</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          x-large
          color="deep-orange darken-1"
          @click="navigateTo({name: 'root'})"
        >
          <v-icon>fas fa-info-circle</v-icon>
        </v-btn>
      </v-speed-dial>
    </div>
    <!-- <v-toolbar-items>
      <v-tooltip bottom transition color="cyan" v-if="!$store.state.isLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn
            outlined
            small
            v-on="on"
            @click="navigateTo({name: 'register'})"
            class="mr-2"
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
           @click="logout"
          >
            <v-icon class="white--text" >fas fa-user-alt-slash</v-icon>
          </v-btn>
        </template>
        <span>LogOut</span>
      </v-tooltip>
    </v-toolbar-items> -->
  </v-toolbar>
</template>

<script>

export default {
	data () {
		return {
			direction: 'bottom',
			userIcons: false,
			songIcons: false,
			fling: false,
			hover: false,
			tabs: null,
			top: false,
			right: false,
			bottom: false,
			left: false,
			transition: 'slide-y-reverse-transition'
		}
	},

	computed: {
		activeFab () {
			switch (this.tabs) {
			case 'one': return { class: 'purple', icon: 'account_circle' }
			case 'two': return { class: 'red', icon: 'edit' }
			case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
			default: return {}
			}
		}
	},
	methods: {
		navigateTo (route) {
			this.$router.push(route)
		},
		logout () {
			this.$store.dispatch('setToken', null)
			this.$store.dispatch('setUser', null)
			this.$router.push({
				name: 'root'
			})
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
  padding: 5px!important;
}
.v-btn:hover {
  color:cyan;
}
</style>
