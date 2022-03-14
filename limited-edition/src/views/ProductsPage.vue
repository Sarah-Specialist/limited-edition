<template>
<div class="product-page">
  <router-link v-bind:to="/cart/">
    <img src="../assets/cart.png" alt="cart" height="30" width="30" class="cart" />
  </router-link>
  <h1>{{title}}</h1>
  <h2>{{description}}</h2>
  <h2>{{price}}</h2>
  <Image />
  <span>
   <Size /><Button />
  </span>
</div>
</template>

<script>
import Image from '../components/Image.vue'
import Size from '../components/Size.vue'
import Button from '../components/Button.vue'

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
    Image,
    Size,
    Button
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