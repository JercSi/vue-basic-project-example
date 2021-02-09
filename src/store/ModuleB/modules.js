import { MODULE_B_ACTION } from "./actions";

import ModuleBService from "./service";

const state = {
  testStateBModule: null
};

const getters = {
  getTestStateBModule: state => state.testStateBModule
};

const actions = {
  [MODULE_B_ACTION]: ({ commit }) => {
    ModuleBService.helloWorld();
    commit(MODULE_B_ACTION, {});
  }
};

const mutations = {
  [MODULE_B_ACTION]: (state, data) => {
    state.testStateBModule = data;
    return state;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
