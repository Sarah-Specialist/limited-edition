<template>
  <label>Color:</label>
    <select class="color-input" :v-on="onChange()">
    <option v-for="(item, i) in colors" 
            v-bind:key="i"
            value="color"
    >
    {{item.color}}
    </option>
    </select>
</template>

<script>
export default {
  name: 'ColorInput',
  props: ['color'],
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
  },
  methods: {
    onChange(color) {
      this.$emit('change-color', color)
    }
  },
  emits: ['change-color']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .color-input {
        padding: 4px 2px;
    }
</style>