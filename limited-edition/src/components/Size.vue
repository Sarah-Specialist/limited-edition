<template>
<div class="size">
  <label>Size:</label>
    <select class="size-input">
    <option v-for="(item, i) in sizes" v-bind:key="i">{{item.size.toFixed(1)}}</option>
    </select>
</div>
</template>

<script>
export default {
  name: 'SizeInput',
  data: function(){
    return {
      sizes: [
        {
        size: 6.0
        },
        {
        size: 7.0
        },
        {
        size: 7.5
        },
        {
        size: 8.0
        },
        {
        size: 8.5
        },
        {
        size: 9.0
        },
        {
        size: 10.0
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .size {
    position: relative;
    right: 5%;
  }

  .size-input {
    padding: 4px 2px;
    margin: 0 10px;
  }
</style>