<template>
<div id="products-page">
  <router-link v-bind:to="/cart/">
    <img src="../assets/cart.png" alt="cart" height="40" width="40" class="cart" />
  </router-link>
  <h1>{{title}}</h1>
  <h2>{{description}}</h2>
  <h2>{{price}}</h2>
  <Product @change-color="change-color" />
  <router-view/>
</div>
</template>

<script>
import Product from '../components/Product.vue'

export default {
  name: 'ProductsPage',
   data: function() {
    return {
      title: "Hako Soar (H)",
      description: "Limited Edition! Only 100 pairs worldwide!",
      price: "$199.99",
    }
  },
  components: {
    Product
  }
}
</script>

<style>
* {
  font-family: 'Roboto', 'Open Sans', Helvetica, Arial, sans-serif;
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