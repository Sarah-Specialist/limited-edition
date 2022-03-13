<template>
  <router-link v-bind:to="/cart/">
    <img src="../assets/cart.png" alt="cart" height="40" width="40" class="cart" />
  </router-link>
  <div id="page-wrap">
  <h1>{{title}}</h1>
  <h2>{{price}}</h2>
  <div v-for="product in products"
        v-bind:key="product.id"
        class="item">
    <img v-bind:src="product.imageUrl" class="image" />
  </div>
  <Size />
  <Color />
  <router-view/>
</div>
</template>

<script>
import Size from './Size.vue'
import Color from './Color.vue'
import {products} from '../fakedata';

export default {
  name: 'ProductDetails',
  data: function() {
    return {
      title: "Limited Edition",
      price: "$199.99",
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
.cart {
  position: absolute;
  top: 2%;
  right: 2%;
}

.image {
  height: 300px;
  width: 500px;
  padding: 20px 0;
}

</style>