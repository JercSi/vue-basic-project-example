import Vue from "vue";
import App from "./App.vue";
import i18n from './plugins/i18n'; // Localization
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// Import css
import './assets/sass/main.scss'

Vue.config.productionTip = false;
 
new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted () {
    this.$nextTick(() => {
      document.dispatchEvent(new Event('my-document-event'))
    });
  }
}).$mount("#app");
