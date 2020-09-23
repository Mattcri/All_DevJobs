<template>
  <v-container>
    <v-row class="">
      <v-col md="4" sm="12">
        <v-form v-model="valid" class="">
            <!-- <div class="wrap-inputs"> -->
              <v-text-field class="my-4" label="Locación" placeholder="new york" v-model="location" :rules="rulesLocation" hide-details="auto" required outlined></v-text-field>
              <v-text-field class="my-4" label="Lenguaje" v-model="languaje" placeholder="c++ o javascript" :rules="rulesLanguaje" hide-details="auto" @keyup.enter="search" required outlined></v-text-field>
            <!-- </div> -->
            <!-- <div class="wrap-btn"> -->
              <v-btn class="" @click="search" color="success" :disabled="!valid">
                <v-icon>mdi-magnify</v-icon>Buscar
              </v-btn>
            <!-- </div> -->
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: "Home",
  data: () => ({
    valid: true,
    rulesLocation: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 caracteres',
      ],
    rulesLanguaje: [
        value => !!value || 'Required.',
        value => (value && value.length >= 1) || 'Min 1 caracter',
      ],
  }),
  methods: {
    search () {
      this.$router.push('/jobs')
    },
  },
  computed: {
    // ...mapState(['searchLocation']),
    location: {
      get() {
        return this.$store.state.searchLocation
      },
      set(value) {
        return this.$store.commit('UPDATE_LOCATION', value)
      }
    },
    languaje: {
      get() {
        return this.$store.state.searchLanguaje
      },
      set(value) {
        return this.$store.commit('UPDATE_LANGUAJE', value)
      }
    }
    
  },
};
</script>

<style scoped>
  /* .wrap-inputs {
    width: 90%;
  } */
</style>
