<template>
  <v-app>
    <nav-bar @changeMode="changeColor" :darkMode="darkMode" />
    <v-main>
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
    darkMode: false,
  }),
  methods: {
    changeColor() {
      this.darkMode = !this.darkMode
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
};
</script>

<style lang="scss" >


</style>