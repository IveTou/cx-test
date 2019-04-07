<template>
  <div class="marker-container" v-bind:class="isFinal && 'final'">
    <div 
      class="marker-icon idle" 
      v-bind:class="current && 'current' || status && 'accomplished'"
    >
      &#10004;
    </div>
    <div class="marker-line" v-bind:class="(!status || current) && 'togo'"></div>
  </div>
</template>

<script> 
  export default {
    name: 'stepper-marker',
    props: {
      status: Number,
      isFinal: Boolean,
      current: Boolean,
    },
  }
</script>

<style scoped>
  .marker-line {
    height: 24px;
    border-left: solid 3px blue;
    margin-left: 33px;
    margin-top: 8px;
  }

  .final .marker-line {
    height: 0;
    display: none;
  }

  .togo {
    border-left: solid 3px grey;
  }

  .marker-icon {
    width: 24px !important;
    height: 24px !important;
    display: inline-block;
    padding: 2px 5px;
    font-size: 14px !important;
    border-radius: 24px;
    margin: 0 24px !important;
  }

  .idle {
    background-color: white;
    color: white;
    border: solid 2px grey;
  }

  .current {
    background-color: white;
    color: white;
    border: solid 2px blue;
  }

  .accomplished {
    background-color: #e67d22;
    color: white;
    border: solid 2px #e67d22;
  }
</style>
