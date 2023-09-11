<template>
  <v-container>
    <!-- <v-card src="{{ pokemonPicture }}"> -->
    <!-- <v-img src="{{ pokemonPicture }}"></v-img> -->
    <!-- </v-card> -->

    <!-- <v-img src="{{ pokemonPicture }}"></v-img> -->
    <!-- <v-img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"></v-img> -->
    <v-card width="300">
      <v-card-title>
        {{ pokemonDetails.name }}
      </v-card-title>
      <v-row>
        <v-col><v-img :src="pokemonPictures"></v-img></v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pokemonDetails: null,
      pokemonPicture: null,
    };
  },
  async created() {
    try {
      // Fetch Pokémon details using the ID
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.id}`
      );
      const response2 = await fetch(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
      );
      this.pokemonDetails = await response.json();
      this.pokemonPicture = await response2.url;
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  },

  computed: {
    pokemonPictures() {
      //   return `${this.pokemonPicture}`
      return this.pokemonPicture;
    },
  },
};
</script>
