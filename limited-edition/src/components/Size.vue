<template>
<div class="size">
  <label>Size:</label>
    <select class="size-input" :value="size" @change="updateSize($event, index)">
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
import store from '../store';
import _ from 'lodash';

export default {
  store,
  created() {
    this.$store.commit('SET_SIZES', _.cloneDeep(this.sizes));
  },
  name: 'SizeInput',
  data: function(){
    return {
      size: ''
    }
  },
  methods: {
    updateSize($event, index) {
      this.$store.commit('UPDATE_SIZES',{
        index,
        value: $event.target.value
      })
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