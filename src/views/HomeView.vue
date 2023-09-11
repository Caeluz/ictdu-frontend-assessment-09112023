<template>
  <v-container class="">
    <v-card max-width="500" flat>
      <v-form @submit.prevent="searchPokemons">
        <v-text-field outlined v-model="searchQuery"> </v-text-field>
        <v-card-actions>
          <v-btn block type="submit">Search</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-row>
      <v-col
        v-for="(pokemonChar, id) in displayedPokemons"
        :key="id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <!-- <router-link :to="'/pokemon/' + id"> -->
        <v-card @click="pokemonDetailGo(id)">
          <v-card-text>{{ pokemonChar.name }}</v-card-text>
        </v-card>
        <!-- </router-link> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",

  data() {
    return {
      searchQuery: "", // Add a data property for the search query
    };
  },

  methods: {
    ...mapActions(["fetchPokemons"]),
    searchPokemons() {
      // Implement the search functionality here
      // You can use this.searchQuery to filter the pokemons and commit the mutation to update the filteredPokemons state
      // Example:
      const filteredPokemons = this.allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.$store.commit("setFilteredPokemons", filteredPokemons);
    },
    pokemonDetailGo(id) {
      (id += 1), 

        this.$router.push(
          `/pokemon/${parseInt(id)}` // This will navigate us to `/pokemon/1
        );
    },
  },

  computed: {
    ...mapGetters(["allPokemons", "filteredPokemons"]), // Add filteredPokemons getter
    displayedPokemons() {
      // Use the filteredPokemons state to determine which Pokémon cards to display
      // If no search query is provided, display allPokemons; otherwise, display filteredPokemons
      return this.searchQuery ? this.filteredPokemons : this.allPokemons;
    },
    tests() {
      console.log(this);
    },
  },

  mounted() {
    this.fetchPokemons();
  },
};
</script>
