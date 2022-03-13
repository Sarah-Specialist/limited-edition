<template>
<div id="page-wrap">
<h1>Shopping cart</h1>
<div v-for="product in cartItems"
    :key="product.id"
    class="product-container"
>
<table>
<tbody>
<tr>
<td><img :src="product.imageUrl" /></td>
<td>{{product.color}}</td>
<td>{{quantity}}</td>
<td>${{product.price}}</td>
</tr>
</tbody>
</table>
</div>
<h3>Total: ${{totalPrice}}</h3>
<button id="checkout">Proceed to checkout</button>
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

</style>
