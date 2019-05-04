<template>
  <v-flex class="home">
    <v-carousel>
      <v-carousel-item src="/img/header.jpg">
        <v-layout
          column
          align-center
          justify-center
          fill-height
        >
          <v-flex xs3>
            <h1 class="display-4 white--text">Wiley Wunders</h1>
          </v-flex>

          <v-flex xs3>
            <h2 class="white--text font-weight-normal display-3">Hand Crafted Angler & Fishing Products</h2>
          </v-flex>

          <v-flex xs3>
            <v-btn color="blue">
              <v-icon class="mr-2">book</v-icon>
              Browse Our Catalog
            </v-btn>
          </v-flex>
        </v-layout>
      </v-carousel-item>

      <v-carousel-item src="/img/header3.jpg">
        <v-layout
          column
          align-center
          justify-center
          fill-height
        >
          <v-flex xs3>
            <h1 class="display-4 white--text">Take Them Anywhere</h1>
          </v-flex>

          <v-flex xs3>
            <h2 class="white--text font-weight-norma display-3">Our jigs will hold strong in any condition!</h2>
          </v-flex>

        </v-layout>
      </v-carousel-item>

      <v-carousel-item src="/img/header2.jpg">
        <v-layout
          column
          align-center
          justify-center
          fill-height
        >
          <v-flex xs3>
            <h1 class="display-4 white--text">Bleeding Green Jigs</h1>
          </v-flex>

          <v-flex xs3>
            <h2 class="white--text font-weight-normal display-3">Don't miss out on these beauties!</h2>
          </v-flex>

          <v-flex xs3>
            <v-btn color="red">
              Get Yours Today!
            </v-btn>
          </v-flex>
        </v-layout>
      </v-carousel-item>

    </v-carousel>
  </v-flex>
</template>

<style lang="scss" scoped>
  h1, h2, h3, h4, h5, h6[class*="display-"] {
    font-family: 'Spectral SC', serif !important;
  }
</style>

<script>
  export default {
    name: 'home-page',
    components: {},
  };
</script>
