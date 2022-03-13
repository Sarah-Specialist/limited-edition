<template>
    <select class="color-input">
    <option v-for="(item, i) in colors" v-bind:key="i">{{item.color}}</option>
    </select>
</template>

<script>
export default {
  name: 'ColorInput',
  data: function(){
    return {
      colors: [
        {
        color: "Black"
        },
        {
        color: "Blue"
        },
        {
        color: "Green"
        },
        {
        color: "Grey"
        },
        {
        color: "Orange"
        },
        {
        color: "Pink"
        },
        {
        color: "Purple"
        },
        {
        color: "Red"
        },
        {
        color: "White"
        },
        {
        color: "Yellow"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .color-input {
        padding: 4px 2px;
    }
</style>