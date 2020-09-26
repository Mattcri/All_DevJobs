<template>
  <v-app-bar app color="indigo" >
  <v-container class="nav-items">
      <v-btn color="light-blue lighten-5" class="nav-items__title" to="/" text>All DevJobs</v-btn>
      <v-btn text @click="changeMode">
        <v-icon v-if="darkMode">mdi-set-center-right</v-icon>
        <v-icon v-else >mdi-set-left-center</v-icon>
      </v-btn>
  </v-container>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    
  }),
  props: {
    darkMode: Boolean
  },
  methods: {
    changeMode() {
      this.$emit('changeMode')
    }
  },
};
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');

  .nav-items {
    display: flex;
    justify-content: space-between;
    &__title {
      font-family: 'Orbitron', sans-serif;
      font-style: italic;
    }
  }
</style>
