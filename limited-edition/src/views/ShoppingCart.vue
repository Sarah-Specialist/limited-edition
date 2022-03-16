<template>
<div id="page-wrap">
<h1>Shopping cart</h1>
<p>Invoice number: {{uuid()}}</p>
<div v-for="product in cartItems"
    :key="product.id"
    class="product-container"
>
<table class="table">
<tbody>
<tr>
<td><img src="../assets/black.jpg" alt="black" class="image" /></td>
<td>Size: {{sizes()}}</td>
<td>${{product.price}}</td>
</tr>
</tbody>
</table>
</div><br /><br />
<h3>Total: ${{totalPrice}}</h3>
<router-link :to="{name: 'Order'}">
<button class="button">Proceed to checkout</button>
</router-link>
</div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import {cartItems} from '../fakedata';


export default {
  name: 'ShoppingCart',
  data() {
    return {
      cartItems,
      uuid
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0
      );
    }, 
    sizes() {
      return this.$store.state.sizes
    }
  }
}
</script>

<style scoped>

.product-container {
  margin-top: 100px;
}

.table {
  width: 40vw;
  position: relative;
  left: 25%;
}

td {
  padding: 0 50px;
}

.image {
  width: 150px;
  height: 100px;
}

.button {
    background-color: aquamarine;
    padding: 3px 5px;
    border: 1px solid grey;
    border-radius: 3px;
    margin: 20px 120px 0 0;
}

.button:hover {
    cursor: pointer;
    font-weight: bold;
}
</style>
