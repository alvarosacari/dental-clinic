<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      absolute
      overflow
      app
    >
      <v-list class="pa-1">
        <v-list-tile
          v-if="primaryDrawer.mini"
          @click.stop="primaryDrawer.mini = !primaryDrawer.mini"
        >
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile
          avatar
          tag="div"
        >
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="primaryDrawer.mini = !primaryDrawer.mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list
        class="pt-0"
        dense
      >
        <v-divider light />

        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="primaryDrawer.clipped"
      app
      color="primary"
      dark
    >
      <v-toolbar-side-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>Dental Clinic</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer
      :inset="footer.inset"
      app
    >
      <span class="px-3">
        &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
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
