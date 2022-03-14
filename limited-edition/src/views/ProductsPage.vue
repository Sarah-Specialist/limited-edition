<template>
<div id="products-page">
  <Product />
  <router-view/>
</div>
</template>

<script>
import Product from '../components/Product.vue'

export default {
  name: 'ProductsPage',
  components: {
    Product
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

.cart {
  position: absolute;
  top: 2%;
  right: 2%;
}

</style>