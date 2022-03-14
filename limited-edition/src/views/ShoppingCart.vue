<template>
<div id="page-wrap">
<h1>Shopping cart</h1>
<p>(limited to one item per purchase)</p>
<div v-for="product in cartItems"
    :key="product.id"
    class="product-container"
>
<table class="table">
<tbody>
<tr>
<td><img src="../assets/black.jpg" alt="black" class="image" /></td>
<td>${{product.price}}</td>
</tr>
</tbody>
</table>
</div>
<h3>Total: ${{totalPrice}}</h3>
<button class="button">Proceed to checkout</button>
</div>
</template>

<script>
import {cartItems} from '../fakedata';

export default {
  name: 'ShoppingCart',
  data() {
    return {
      cartItems,
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0
      );
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
