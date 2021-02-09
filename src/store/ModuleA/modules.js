import { MODULE_A_ACTION } from "./actions";

import ModuleAService from "./service";

const state = {
  testState: null
};

const getters = {
  getTestState: state => state.testState
};

const actions = {
  [MODULE_A_ACTION]: ({ commit }) => {
    ModuleAService.helloWorld();
    commit(MODULE_A_ACTION, {});
  }
};

const mutations = {
  [MODULE_A_ACTION]: (state, data) => {
    state.testState = data;
    return state;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
