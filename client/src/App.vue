<template>
  <div id="app">
    <div class="appclass">
      <v-app dense>
        <v-app-bar height="100px">
          <page-header />
        </v-app-bar>
        <main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </main>
        <v-footer class="footer">
          <Footer />
        </v-footer>
      </v-app>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'app',
	components: {
		PageHeader,
		Footer
	}
}
</script>

<style>
#app {
  font-family: 'Balsamiq Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.v-application--wrap {
  min-height: 10vh !important;
}
i {
  cursor: pointer;
}
.v-footer {
  width: 100%;
}
.container--fluid {
  min-height: 75vh;
}
</style>
