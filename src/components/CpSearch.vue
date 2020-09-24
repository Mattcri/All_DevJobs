<template>
  <v-form v-model="valid">
    <v-text-field
      class="my-4"
      label="Locación"
      placeholder="new york"
      v-model="location"
      :rules="rulesLocation"
      hide-details="auto"
      required
      outlined
    ></v-text-field>
    <v-text-field
      class="my-4"
      label="Lenguaje"
      v-model="languaje"
      placeholder="c++ o javascript"
      :rules="rulesLanguaje"
      hide-details="auto"
      required
      outlined
    ></v-text-field>
    <v-btn class @click="search" color="success" :disabled="!valid">
      <v-icon>mdi-magnify</v-icon>Buscar
    </v-btn>
  </v-form>
</template>

<script>

export default {
  name: "CpSearch",
  data: () => ({
    valid: true,
    rulesLocation: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],
    rulesLanguaje: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 1) || "Min 1 caracter",
    ],
  }),
  methods: {
    search() {
      this.$emit('searchJobs')
    },
  },
  computed: {
    location: {
      get() {
        return this.$store.state.searchLocation;
      },
      set(value) {
        return this.$store.commit("UPDATE_LOCATION", value);
      },
    },
    languaje: {
      get() {
        return this.$store.state.searchLanguaje;
      },
      set(value) {
        return this.$store.commit("UPDATE_LANGUAJE", value);
      },
    },
  },
};
</script>

<style>
</style>