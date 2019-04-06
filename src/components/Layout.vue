<template>
  <div class="layout">
    <Loader v-if="loading" />  
    <div v-else class="content">
      <div class="header">
        <h1 class="md-display-1">{{ info.customer.name }}</h1>
        <span class="md-caption">ID do cliente: {{ info.customer.id }}</span>
      </div>
      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-large-size-66 md-medium-size-66 md-small-size-100 md-xsmall-size-100">
          Content
        </div>
        <div class="md-layout-item md-large-size-33 md-medium-size-33 md-small-size-100 md-xsmall-size-100">
          <Map />
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
  import Loader from './Loader.vue'
  import Map from './Map.vue'

  export default {
    name: 'Layout',
    components: {
      Loader,
      Map,
    },
    props: {
      info: Object,
      loading: Boolean,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .loading {
    margin: 80px auto;
    width: 100%;
    text-align: center;
  }

  .layout {
    text-align: left;
    margin: 0 auto;
    max-width: 1024px;
    padding: 24px 16px;
  }

  .header {
    margin-bottom: 24px;
  }

  h1 {
    margin: 0;
  }

  .md-caption {
    font-size: 16px !important;
  }
</style>
