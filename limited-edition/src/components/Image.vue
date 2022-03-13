<template>
  <div class="image">
    <h1>{{ msg }}</h1>
    <div v-for="(item, i) in colors" v-bind:key="i">
    <img src={{item.src}} alt={{item.color}} />
    <p>{{item.color}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoeImage',
  data: function(){
    return {
      colors: [
        {
        color: "black",
        src: "../assets/black.jpg"
        },
        {
        color: "blue",
        src: "../assets/blue.jpg"
        },
        {
        color: "green",
        src: "../assets/green.jpg"
        },
        {
        color: "grey",
        src: "../assets/grey.jpg"
        },
        {
        color: "orange",
        src: "../assets/orange.jpg"
        },
        {
        color: "pink",
        src: "../assets/pink.jpg"
        },
        {
        color: "purple",
        src: "../assets/purple.jpg"
        },
        {
        color: "red",
        src: "../assets/red.jpg"
        },
        {
        color: "white",
        src: "../assets/white.jpg"
        },
        {
        color: "yellow",
        src: "../assets/yellow.jpg"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>