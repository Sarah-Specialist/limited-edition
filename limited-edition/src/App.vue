<template>
<div id="main-app">
  <ProductsPage />
</div>
</template>

<script>
import ProductsPage from './views/ProductsPage.vue'

export default {
  name: 'MainApp',
  components: {
    ProductsPage
  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-image: url("https://i.pinimg.com/736x/50/69/61/5069613b363dc9f5c0bc4c9824ab26b7--background-hd-wallpaper-wallpaper-pc.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  
}
</style>