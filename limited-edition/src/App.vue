<template>
<div id="main-app">
  <h1>{{title}}</h1>
  <Image /><br />
  <Size /><br />
  <Color />
</div>
</template>

<script>
import Image from './components/Image.vue'
import Size from './components/Size.vue'
import Color from './components/Color.vue'

export default {
  name: 'MainApp',
  data: function() {
    return {
      title: "Limited Edition"
    }
  },
  components: {
    Image,
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
  color: white;
  background-color: black;
  margin-top: 60px;
}
</style>