<template>
  <v-app>
    <nav-bar/>
    <v-main class="my-5">
      <router-view></router-view>
    </v-main>
    <cp-footer/>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import CpFooter from '@/components/CpFooter'

export default {
  name: 'App',

  components: {
    NavBar,
    CpFooter
  },

  data: () => ({
    //
  }),
};
</script>
