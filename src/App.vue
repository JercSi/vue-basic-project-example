<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="auto">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </v-col>
          <v-col md="auto">
            <router-link :to="{ name: 'HomeLazy' }">Home (Lazy)</router-link>
          </v-col>
          <v-col md="auto">
            <router-link to="/about">About</router-link> 
          </v-col>
          <v-col md="auto">
            <router-link to="/localization">Localization</router-link>
          </v-col>
          <v-col md="auto">
            <router-link to="/static-content.html">Static content (prerender)</router-link>
          </v-col>
        </v-row>
      </v-container>

      <router-view></router-view>

      <v-container>
        <v-row align="center" justify="center">
          <v-col
            md="auto"
          >
          <v-select
            :items="langs"
            label="Language"
            v-model="locale"
          ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { loadLanguageAsync } from '@/plugins/i18n'

export default {
  name: "App",
  created() {
    
  },
  data () {
    return { 
      langs: ['en', 'fr', 'es'],
      locale: this.$root.$i18n.locale
    }
  },
  watch: {
    locale (val) {
      // Update locale
      loadLanguageAsync(val);
    }
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
