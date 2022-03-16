<template>
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
</template>

<script>

export default {
  name: 'SizeInput',
  data: function(){
    return {
      sizeInput: ""
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

  .size-input:hover {
    cursor: pointer;
  }
</style>