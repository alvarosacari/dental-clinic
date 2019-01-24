<template>
  <v-footer
    :inset="footer.inset"
    app
  >
    <span class="px-3">
      &copy; {{ new Date().getFullYear() }}
    </span>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      dark: false,
      primaryDrawer: {
        model: null,
        type: 'default',
        clipped: false,
        floating: false,
        mini: false
      },
      footer: {
        inset: true
      },
      items: [
        { title: 'Home', icon: 'home', to: { name: 'home' } },
        { title: 'About', icon: 'question_answer', to: { name: 'about' } },
        { title: 'Help', icon: 'live_help', to: { name: 'help' } }
      ]
    }
  }
}
</script>

<style scoped>

</style>
