<template>
  <div id="app">
    <div class="appclass">
      <v-app dense>
        <v-app-bar>
          <page-header />
        </v-app-bar>
        <main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </main>
      </v-app>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
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
</style>
