<template>
<div id="main-app">
  <ProductsPage />
  <router-view/>
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
</style>