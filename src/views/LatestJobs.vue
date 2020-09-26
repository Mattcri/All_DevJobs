<template>
  <jobs-search/>
</template>

<script>
import { mapActions } from 'vuex'
import JobsSearch from '@/views/JobsSearch'


export default {
  components: {
    JobsSearch
  },
  methods: {
    ...mapActions(["getJobs"])
  },
  created() {
    this.getJobs()
  }

}
</script>

<style>

</style>