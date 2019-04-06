<template>
  <div class="app">
    <Layout v-bind:info="info"/>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Layout
  },
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
  background: lightgrey;
}
</style>
