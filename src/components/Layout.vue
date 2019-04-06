<template>
  <div class="layout">
    <Loader v-if="loading" />  
    <div v-else class="content">
      <div class="header">
        <h1 class="md-display-1">{{ info.customer.name }}</h1>
        <span class="md-caption">ID do cliente: {{ info.customer.id }}</span>
      </div>
      <div class="md-layout md-gutter md-alignment-top-center">
        <div class="md-layout-item md-large-size-60 md-medium-size-60 md-small-size-100 md-xsmall-size-100">
          <Description v-bind:info="info" />
        </div>
        <div class="md-layout-item md-large-size-40 md-medium-size-40 md-small-size-100 md-xsmall-size-100">
          <Maps 
            v-bind:origin="info.origin" 
            v-bind:destination="info.destination" 
            v-bind:last_update="info.trucker.last_app_position_at"
          />
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
  import Loader from './Loader.vue'
  import Description from './Description.vue'
  import Maps from './Maps.vue'

  export default {
    name: 'Layout',
    components: {
      Loader,
      Maps,
      Description,
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
    max-width: 1288px;
    padding: 24px 16px;
    background: #f0f3f5;
  }

  .md-layout-item {
    margin-bottom: 24px; 
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
