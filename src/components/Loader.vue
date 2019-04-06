<template>
  <div class="loader">
    <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
    <p class="md-headline">Carregando...</p>
  </div>
</template>

<script>
export default {
  name: 'loader',
}
</script>

<style>
  .loader {
    margin: 80px auto;
    width: 100%;
    text-align: center;
  }
</style>
