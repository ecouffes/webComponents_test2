<template>
    <button>
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
    button {
        background-color: mediumseagreen;
        color: #fff;
        margin: .5em;
        padding: 1em;
        font-size: 16px;
        border-radius: .5em;
        cursor: pointer;
        border: none;
    }
</style>

<script lang="ts">
    import Vue from "vue";
    export default Vue.extend();
</script>

