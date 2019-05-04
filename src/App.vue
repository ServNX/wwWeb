<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>w</span>
        <span class="font-weight-light blue--text">Wunders</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="ml-3">
        <v-btn
          flat
          v-for="(to, key) in links"
          :key="key"
          @click="$router.push(to)"
        >
          {{ key.toUpperCase() }}
        </v-btn>
      </v-toolbar-items>

      <!--<v-btn
        flat
        href=""
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>-->
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'App',
    data () {
      return {
        //
      };
    },
    computed: {
      ...mapState([
        'links'
      ]),
    }
  };
</script>
