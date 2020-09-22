<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Locación" v-model="location" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Cargo" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn to="/jobs">
          <v-icon>mdi-magnify</v-icon>Buscar
        </v-btn>
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
    // test: ''
  }),
  computed: {
    // ...mapState(['searchLocation']),
    location: {
      get() {
        return this.$store.state.searchLocation
      },
      set(newValue) {
        return this.$store.commit('UPDATE', newValue)
      }
    }
    
  },
};
</script>
