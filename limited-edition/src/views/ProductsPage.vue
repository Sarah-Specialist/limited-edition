<template>
<div class="page-wrap">
  <router-link :to="{name: 'Cart'}">
    <img src="../assets/cart.png" alt="cart" height="30" width="30" class="cart" />
  </router-link>
  <h1>{{title}}</h1>
  <h2>{{description}}</h2>
  <h2>{{price}}</h2>
  <Image />
  <form v-on:submit="submit">
   <Size /><button class="button">Add to cart</button>
  </form>
</div>
</template>

<script>
import Image from '../components/Image.vue'
import Size from '../components/Size.vue'

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
    Size
  },
  methods: {
    submit(e) {
      e.preventDefault()
      console.log(this.size);
    }
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

.button {
    position: relative;
    left: 5%;
    bottom: 26px;
    background-color: aquamarine;
    padding: 5px 8px;
    border: 1px solid grey;
    border-radius: 3px;
}

.button:hover {
    cursor: pointer;
    font-weight: bold;
}
</style>