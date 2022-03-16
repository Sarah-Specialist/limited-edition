<template>
<div class="page-wrap">
  <router-link :to="{name: 'Cart'}">
    <img src="../assets/cart.png" alt="cart" height="30" width="30" class="cart" />
  </router-link>
  <h1 class="title">{{title}}</h1>
  <h2 class="description">{{description}}</h2>
  <h2>{{price}}</h2>
  <Image />
  <form @submit.prevent="$store.dispatch('ADD_SIZES', size)">
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
      description: "LIMITED EDITION",
      price: "$199.99",
    }
  },
  components: {
    Image,
    Size
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

.title {
  font-family: 'Bookman Old Style', serif;
  font-size: 50px;
  margin-top: 1%;
}

.description {
  margin-top: -40px;
  font-size: 16px;
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