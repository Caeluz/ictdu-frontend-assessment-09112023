import Vue from "vue";
import Vuex from "vuex";

// import { createStore } from "vuex";
import pokemon from "./modules/pokemon";


// export default createStore({
//   modules: {
//     pokemon,
//   },
// });

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    pokemon,
  },
});
