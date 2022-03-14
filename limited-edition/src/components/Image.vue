<template>
<div>
  <img src="../assets/black.jpg" alt="black" class="image" /><br />
</div>
</template>

<script>
import black from '../assets/black.jpg';

export default {
  name: 'ProductImage',
  data: function() {
    return {
      black
    }
  }
}
</script>

<style>
.image {
  height: 300px;
  width: 520px;
  padding: 20px 0;
}
</style>