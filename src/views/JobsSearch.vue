<template>
  <v-container>
    <div class="grid">
      <div class="grid__search" >
        <cp-search @searchJobs="newJobs" />
      </div>
      <div class="grid__jobs my-4" v-if="jobs.length === 0" cols="12" md="8">
        <h2 class="mx-auto">Ups!! No se encontraron resultados</h2>
      </div>
      <div class="grid__jobs my-4" v-for="job in jobs" :key="job.id" cols="12" md="8" >
        <v-card class="mx-auto" max-width="95%">
          <v-card-title :class="'shadow'" class="mb-1">{{job.title}}</v-card-title>
          <v-img
            contain
            width="100%"
            height="220px"
            :src="job.company_logo ? job.company_logo : emptyImg"
          >
          </v-img>
          <v-card-text class="pb-0">
            <p><v-icon color="indigo" class="pr-2">mdi-domain</v-icon><b>Empresa</b> {{job.company}}</p>
            <p><v-icon color="indigo" class="pr-2">mdi-map-marker</v-icon><b>Lugar</b> {{job.location}}</p>
            <p><v-icon color="indigo" class="pr-2">mdi-clock</v-icon><b>Jornada</b> {{job.type}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :href="job.url" color="indigo lighten-1" target="_blank" text>Ver Publicación</v-btn>
          </v-card-actions>
        </v-card>
        <v-overlay :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CpSearch from '@/components/CpSearch'

export default {
  data: () => ({
    emptyImg: 'https://img.pngio.com/engineering-industrial-machine-machinery-mechanical-mechanism-mechanism-png-512_512.png',
  }),
  components: {
    CpSearch
  },
  computed: {
    ...mapState(['jobs', 'overlay'])
  },
  methods: {
    ...mapActions(['getJobs', 'getFilterJobs']),
    newJobs() {
      this.getFilterJobs()
    }
  },
  created() {
    this.getFilterJobs()
  },

}
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    &__search {
      grid-column: 1/4;
      position: sticky;
      position: -webkit-sticky;
      position: -moz-sticky;
      top: 80px;
      @media (max-width: 560px) {
        grid-column: 3/11;
        position: inherit;
      }
    }
    &__jobs {
      grid-column: 5/13;
      @media (max-width: 560px) {
        padding-top: 2rem;
        grid-column: 2/12;
      }
    }
  }
  .shadow {
    box-shadow: 0 4px 3px -2px grey;
  }


</style>
