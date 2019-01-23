<template>
  <v-container
    fluid
    grid-list-xl
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
      >
        <v-card>
          <v-toolbar
            card
          >
            <v-toolbar-title>
              Title
            </v-toolbar-title>

            <v-spacer />

            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>

          <v-divider />

          <v-card-text style="min-height: 200px;">
            <h1 class="primary--text">
              primary
            </h1>
            <h1 class="secondary--text">
              secondary
            </h1>
            <h1 class="accent--text">
              accent
            </h1>
            <h1 class="error--text">
              error
            </h1>
            <h1 class="info--text">
              info
            </h1>
            <h1 class="success--text">
              success
            </h1>
            <h1 class="warning--text">
              warning
            </h1>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
