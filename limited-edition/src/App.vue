<template>
<div id="main-app">
  <router-link v-bind:to="/cart/">
    <img src="./assets/cart.png" alt="cart" height="40" width="40" class="cart" />
  </router-link>
  <h1>{{title}}</h1>
  <h2>{{price}}</h2>
  <div v-for="product in products"
        v-bind:key="product.id"
        class="item">
    <img v-bind:src="product.imageUrl" class="image" />
    <h3>{{product.color}}</h3>
  </div>
  <Size /><br />
  <Color />
  <router-view/>
</div>
</template>

<script>
import Size from './components/Size.vue'
import Color from './components/Color.vue'
import {products} from './fakedata';

export default {
  name: 'MainApp',
  data: function() {
    return {
      title: "Limited Edition",
      price: "$149.99",
      products
    }
  },
  components: {
    Size,
    Color
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

.image {
  height: 300px;
  width: 500px;
}

</style>