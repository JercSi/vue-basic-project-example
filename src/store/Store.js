import Vue from "vue";
import Vuex from "vuex";

// Import modules
import ModuleA from "./ModuleA";
import ModuleB from "./ModuleB";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ModuleA,
    ModuleB
  }
});
