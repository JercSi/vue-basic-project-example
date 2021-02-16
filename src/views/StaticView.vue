<template>
  <div class="staticView">
    <h1>{{ $t('staticView.title') }}</h1>
    <p>{{ $t('staticView.text') }}</p>
  </div>
</template>

<script>

export default {
  name: "StaticView",
  mounted() {
    this.$nextTick(() => {
      document.dispatchEvent(new Event('my-document-event'))
    })
  }
};
</script>
