<template>
  <div class="chip" v-bind:class="emitted && 'emitted'">{{ content }}</div>
</template>

<script> 
  export default {
    name: 'loader',
    props: {
      content: String,
      emitted: Boolean,
    },
  }
</script>

<style>
  .chip {
    width: auto !important;
    display: inline-block;
    padding: 2px 6px;
    font-size: 14px !important;
    border-radius: 4px;
    color: #a0a0a0  !important;
    border: solid 1px #a0a0a0;
    margin: 2px !important;
  }

  .emitted {
    color: white !important;
    border: solid 1px #6bcd72;
    background: #6bcd72 !important;
  }
</style>
