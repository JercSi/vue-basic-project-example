<template>
  <div id="app">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'HomeB' }">Home (moduleB)</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/about-b">About (moduleB)</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
