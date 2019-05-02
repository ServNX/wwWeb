<template>
  <v-flex class="home">
    <v-carousel hide-delimiters>
      <CarouselItem
        src="/img/header.jpg"
        header="Wiley Wunders"
        subheader="Hand Crafted Angler & Fishing Products"
        :header-classes="['white--text', 'ml-5', 'display-4']"
      >
        <v-btn color="blue">
          <v-icon class="mr-2">book</v-icon> Browse Our Catalog
        </v-btn>
      </CarouselItem>
    </v-carousel>
  </v-flex>
</template>

<script>
  import CarouselItem from '../components/CarouselItem';
  export default {
    name: 'home-page',
    components: { CarouselItem },
  };
</script>
