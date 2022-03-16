<template>
<div class="page-wrap">
  <router-link :to="{name: 'Cart'}">
    <img src="../assets/cart.png" alt="cart" height="30" width="30" class="cart" />
  </router-link>

  <h1 class="title">{{title}}</h1>
  <h2 class="description">{{description}}</h2>
  <h2>{{price}}</h2>

  <Image />
  <form>
   <div class="size">
    <label>Size:</label>
    <select class="size-input" v-model="sizeInput" label="Size" required>
      <option value="6.0">6.0</option>
      <option value="7.0">7.0</option>
      <option value="7.5">7.5</option>
      <option value="8.0">8.0</option>
      <option value="8.5">8.5</option>
      <option value="9.0">9.0</option>
      <option value="10">10</option>
    </select>
  </div>
   <button class="button" @click="submit">Add to cart</button>
  </form>
</div>
</template>

<script>
import Image from '../components/Image.vue'

export default {
  name: 'ProductsPage',
   data: function() {
    return {
      title: "Hako Soar (H)",
      description: "LIMITED EDITION",
      price: "$199.99",
      sizeInput: ""
    }
  },
  components: {
    Image,
  },
  methods: {
    submit() {
      this.$store.commit('ADD_SIZES', sizeInput)
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

.size {
    position: relative;
    right: 5%;
  }

  .size-input {
    padding: 4px 2px;
    margin: 0 10px;
  }

  .size-input:hover {
    cursor: pointer;
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