// store/modules/pokemon.js

import axios from "axios";

const state = {
  pokemons: [],
  pokemon: {},
  filteredPokemons: [],
};

const getters = {
  allPokemons: (state) => state.pokemons,
  pokemon: (state) => state.pokemon,
  filteredPokemons: (state) => state.filteredPokemons,
};

const actions = {
  async fetchPokemons({ commit }) {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
      // console.log(response.data.results); // Log data here
      commit("setPokemons", response.data.results);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  },

  async fetchPokemon({ commit }, url) {
    try {
      const response = await axios.get(url);
      // console.log(response.data.results); // Log data here
      commit("setPokemon", response.data);
    } catch (error) {
      console.error("Error fetching pokemon:", error);
    }
  },

  async searchPokemons({ commit }, text) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);
      // console.log(response.data.results); // Log data here
      commit("setPokemons", response.data.results);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  },

  async fetchPokemonPicture({ commit }, url) {
    try {
      const response = await axios.get(url);
      // console.log(response.data.results); // Log data here
      commit("setPokemon", response.data);
    } catch (error) {
      console.error("Error fetching pokemon:", error);
    }
  },

};

const mutations = {
  setPokemons: (state, pokemons) => (state.pokemons = pokemons),
  setPokemon: (state, pokemon) => (state.pokemon = pokemon),
  setFilteredPokemons: (state, filteredPokemons) => (state.filteredPokemons = filteredPokemons),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
