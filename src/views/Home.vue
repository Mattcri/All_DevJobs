<template>
  <v-container fluid :style="{padding: '0'}">
    <v-img
    src="../assets/dev.png"
    >
    </v-img>
    <div class="grid">
      <div class="grid__title my-3">
        <h1>Encuentra tus oportunidades en el mundo Tech</h1>
      </div>
        <v-form v-model="valid" class="grid__form mb-5">
            <div class="grid__inputs">
              <v-text-field class="my-4 mx-2" label="País o ciudad" placeholder="new york" v-model="location" :rules="rulesLocation" hide-details="auto" required outlined></v-text-field>
              <v-text-field class="my-4 mx-2" label="Lenguaje" v-model="languaje" placeholder="c++ o javascript" :rules="rulesLanguaje" hide-details="auto" @keyup.enter="search" required outlined></v-text-field>
            </div>
            <div class="grid__btn">
              <v-btn width="180px" large to="/jobs" @click="search" color="indigo lighten-1" :disabled="!valid">
                Buscar<v-icon class="ml-3">mdi-magnify</v-icon>
              </v-btn>
            </div>
        </v-form>
    </div>
    <div class="content">
      <div class="content__text">
        <p><b>All DevJobs</b> es un portal de empleo construido en VueJS especializado en la industria Tech que conecta a los nuevos talentos con las mejores oportunidades laborales disponibles en la API de GitHub. Selecionna tu lenguaje, libreria o framework favorito y explora nuevos horizontes en el país o cuidad de tu preferencia.</p>
        <p>Actualmente puedes encontrar muchas posiciones de trabajo en <strong>remote</strong> para aumentar tus posibilidades.</p>
        <p>Nota: Los filtros de búsqueda solo funcionan con tecnologías de programación validas.</p>
      </div>
      <div class="content__link">
        <h4>Revisa las últimas publicaciones de la semana dando click en el siguiente botón.</h4>
        <v-btn @click="latestJobs" width="180px" large color="indigo lighten-1" class="my-1 btn-align" >
          Nuevas ofertas
        </v-btn>
      </div>

    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: "Home",
  data: () => ({
    valid: true,
    rulesLocation: [
        value => !!value || 'Required.',
        value => (value && value.length >= 4) || 'Min 4 caracteres',
      ],
    rulesLanguaje: [
        value => !!value || 'Required.',
        value => (value && value.length >= 1) || 'Min 1 caracter',
      ],
  }),
  methods: {
    ...mapActions(['getFilterJobs', 'getJobs']),
    latestJobs() {
      this.$router.push('/latestjobs')
      this.getJobs();
    },
    search () {
      this.getFilterJobs()
    },
  },
  computed: {
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

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 0.5fr);
    &__title{
      grid-column: 3/11;
      justify-self: center;
    }
    &__form {
      grid-column: 3/11;
      grid-row: 2/3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 0.6fr);
    }
    &__inputs {
      grid-column: 1/5;
      display: flex;
      @media (max-width: 560px) {
        display: block;
      }
    }
    &__btn {
      grid-column: 1/5;
      grid-row: 2/3;
      justify-self: center;
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    &__text {
      grid-column: 3/11;
      grid-row: 1/2;
    }
    &__link {
      grid-column: 3/11;
      grid-row: 2/3;
      display: grid;
    }
  }
  .btn-align {
    justify-self: center;
  }


</style>
