<template>
  <div class="chip" v-bind:class="active && 'active'">{{ content }}</div>
</template>

<script> 
  export default {
    name: 'loader',
    props: {
      content: String,
      active: Boolean,
    },
  }
</script>

<style>
  .chip {
    width: auto !important;
    display: inline-block;
    padding: 2px 6px;
    font-size: 16px !important;
    border-radius: 4px;
    color: #a0a0a0;
    border: solid 1px #a0a0a0;
    margin: 2px !important;
  }

  .active {
    color: white !important;
    border: solid 1px #6bcd72;
    background: #6bcd72 !important;
  }
</style>
