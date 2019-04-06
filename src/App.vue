<template>
  <div class="app">
    <NotFound v-if="error" />
    <Layout v-else v-bind:info="info" v-bind:loading="loading"/>
  </div>
</template>

<script>
  import Layout from './components/Layout.vue'
  import NotFound from './components/NotFound.vue'
  import axios from 'axios'

  export default {
    name: 'app',
    components: {
      Layout,
      NotFound,
    },
    data () {
      return {
        info: null,
        error: false,
        loading: true,
      }
    },
    mounted () {
      axios
        .get('http://www.mocky.io/v2/5c7552e43100009c20c23450')
        .then(({ data }) => {
          this.info = data
          this.loading = false
        })
        .catch(() => this.error = true)
    },
  }
</script>

<style>
  .app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
