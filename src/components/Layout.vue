<template>
  <div class="layout">
    {{info}}
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    info: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .layout {
    margin: 0 auto;
    max-width: 1024px;
  }
</style>
