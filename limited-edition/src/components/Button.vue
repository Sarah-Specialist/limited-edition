<template>
    <button class="button"
    v:on="onClick()"
    >
    Add to cart
    </button>
</template>

<script>
export default {
    name: 'cart-button',
    methods: {
        onClick() {
            
        }
    }
}
</script>

<style scoped>
.button {
    position: relative;
    left: 5%;
    bottom: 23px;
    background-color: aquamarine;
    padding: 3px 5px;
    border: 1px solid grey;
    border-radius: 3px;
}

.button:hover {
    cursor: pointer;
    font-weight: bold;
}
</style>