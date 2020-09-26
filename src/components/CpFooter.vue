<template>
  <v-footer
      class="font-weight-medium indigo lighten-1"
    >
      <v-col
        class="text-center"
        cols="12"
      >
       {{ new Date().getFullYear() }} — <strong class="footer-text">ALL DEVJOBS</strong> ©
      </v-col>
    </v-footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');
  .footer-text {
    font-family: 'Orbitron', sans-serif;
    font-style: italic;
  }

</style>