<template>
    <v-app-bar app color="primary" dark>
     <v-btn to="/">Home</v-btn>
     <v-spacer></v-spacer>
    <v-btn to="/jobs" @click="latestJobs">
        <v-icon>mdi-file-document</v-icon>Sube tu curriculum
    </v-btn>
    </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['getJobs']),
    latestJobs() {
      this.getJobs()
    }
  }

}
</script>

<style>

</style>