<template>
  <div class="chip" v-bind:class="active && 'active'">
    {{ content }}
  </div>
</template>

<script>
  export default {
    name: 'loader',
    props: {
      content: String,
      active: Boolean
    },
  }
</script>

<style>
  .chip {
    display: inline-block;
    padding: 4px 6px;
    font-size: 16px;
    border-radius: 4px;
    color: #a0a0a0;
    border: 1px #a0a0a0;
    border-style: solid;
  }

  .active {
    color: white;
    border-style: none;
    background: #6bcd72;
  }
</style>
