<template>
<div id="products-page">
  <Product />
  <router-view/>
</div>
</template>

<script>
import Product from '../components/Product.vue'
import {products} from '../fakedata';

export default {
  name: 'ProductsPage',
  data: function() {
    return {
      title: "Limited Edition",
      price: "$199.99",
      products
    }
  },
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