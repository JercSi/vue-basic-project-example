<template>
  <div class="home">
    <h1>This is module B - home page - Lazy load</h1>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorldLazy msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>

// Lazy loading component
export default {
  name: "HomeLazy",
  components: {
    HelloWorldLazy: () => import('@/components/HelloWorldLazy.vue')
  }
};
</script>
