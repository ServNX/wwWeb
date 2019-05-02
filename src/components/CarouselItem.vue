<template>
  <v-carousel-item :src="src">
    <v-layout column align-center justify-center fill-height>
      <v-flex xs3>
        <h1 :class="headerClasses">{{header}}</h1>
        <h2 :class="subHeaderClasses">{{subheader}}</h2>
      </v-flex>
      <v-flex xs3>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-carousel-item>
</template>

<style lang="scss" scoped>
  h1, h2, h3, h4, h5, h6[class*="display-"] {
    font-family: 'Spectral SC', serif !important;
  }
</style>

<script>
  export default {
    name: 'carousel-item',
    props: {
      src: { type: String, required: true },
      header: { type: String, required: true },
      subheader: { type: String },

      headerClasses: {
        type: Array,
        default () {
          return ['white--text', 'ml-5'];
        }
      },

      subHeaderClasses: {
        type: Array,
        default () {
          return ['white--text', 'font-weight-normal', 'ml-5'];
        }
      }
    },
  };
</script>
