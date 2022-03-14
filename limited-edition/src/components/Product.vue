<template>
  <div id="page-wrap">
  <div v-for="product in products"
        v-bind:key="product.id"
  >
    <img v-bind:src="product.imageUrl" class="image" />
  </div>
  <Size />
  <Color @change-color="$emit('change-color')" />
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
      products
    }
  },
  components: {
    Size,
    Color
  },
  emits: ['change-color']
}
</script>

<style>
.image {
  height: 300px;
  width: 500px;
  padding: 20px 0;
}

</style>