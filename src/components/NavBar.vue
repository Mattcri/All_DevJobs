<template>
  <v-app-bar app color="primary" dark>
  <v-container class="nav-items">
      <v-btn to="/">Home</v-btn>
      <v-btn to="/jobs" @click="latestJobs">
        <v-icon>mdi-file-document</v-icon>Últimas publicaciones de empleo
      </v-btn>
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
    ...mapActions(["getJobs"]),
    latestJobs() {
      this.getJobs();
    },
    changeMode() {
      this.$emit('changeMode')
    }
  },
};
</script>

<style lang="scss" scoped>
  .nav-items {
    display: flex;
    justify-content: space-between;
  }
</style>
