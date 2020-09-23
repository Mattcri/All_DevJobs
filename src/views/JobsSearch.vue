<template>
  <v-container>
  <v-row class="mb-5">
    <v-col cols="12" md="4">
      <cp-search  />
    </v-col>
    <v-col v-for="job in jobs" :key="job.id" cols="12" md="8">
      <v-card class="mx-auto" max-width="95%">
        <v-card-title>{{job.title}}</v-card-title>
        <v-img
          class="white--text align-end"
          height="200px"
          :src="job.company_logo"
        >
        </v-img>
        <v-card-subtitle class="pb-0">{{job.location}}</v-card-subtitle>
        <v-card-subtitle class="pb-0">{{job.company}}</v-card-subtitle>
        <v-card-actions>
          <v-btn color="orange" text>Share</v-btn>
          <v-btn color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CpSearch from '@/components/CpSearch'

export default {
  components: {
    CpSearch
  },
  computed: {
    ...mapState(['jobs'])
  },
  methods: {
    ...mapActions(['getJobs']),
    log() {
      console.log(getJobs);
    }
  },
  created() {
    this.getJobs()
  },
 

}
</script>

<style>
</style>