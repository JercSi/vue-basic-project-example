<i18n>
{
  "en": {
    "helloWorld": "Hello world!"
  },
  "fr": {
    "helloWorld": "Bonjour le monde!"
  },
  "es": {
    "helloWorld": "Hola Mundo!"
  }
}
</i18n>

<template>
  <div class="localization">
    <h1>This is an localization test page (i18n)</h1>

    <p>Message from files: {{ $t('hello') }}</p>
    <p>Message from component: {{ $t('helloWorld') }}</p>
  </div>
</template>

<script>
export default {
  name: 'localizationExample'
}
</script>
