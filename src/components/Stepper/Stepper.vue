<template>
  <div class="stepper">
    <md-list class="md-double-line">
      <md-subheader>
        <md-icon class="md-primary">linear_scale</md-icon>
        <span>{{ title }}</span>
      </md-subheader>
      <md-list-item v-for="(step, index) in steps" :key="index">
        <StepperMarker 
          v-bind:isFinal="step.final" 
          v-bind:status="step.at" 
          v-bind:current="index === items.length - 1"
        />
        <div class="md-list-item-text">
          <span>{{ step.translation }}</span>
          <span>{{ step.at | dateFormatter(true, 'X')}}</span>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script> 
  import StepperMarker from './StepperMarker.vue'
  import moment from 'moment'

  const template = [
    { translation: 'Procurando veÃ­culo', final: false },
    { translation: 'VeÃ­culo encontrado', final: false },
    { translation: 'Agendado', final: false },
    { translation: 'Indo coletar', final: false },
    { translation: 'Fila coleta', final: false },
    { translation: 'Carregando', final: false },
    { translation: 'Em trânsito', final: false },
    { translation: 'Fila descarga', final: false },
    { translation: 'Descarregando', final: false },
    { translation: 'Entregue', final: true },
  ]
  
  export default {
    name: 'loader',
    components: {
      StepperMarker,
    },
    props: {
      title: String,
      items: Array,
    },
    filters: {
      dateFormatter(date, withTime, pattern) {
        const format = withTime ?
          'DD/MM/YYYY H:mm:ss' :
          'DD/MM/YYYY'

        return date && moment(date, pattern).format(format) || null
      },
    },
    data () {
      return {
        steps: [],
      }
    },
    mounted() {
      for(let i in this.items) {
        template[i] = this.items[i]
      } 
      
      this.steps = template
    },
  }
</script>

<style scoped>
  .md-subheader {
    padding: 8px;
  }

  .md-subheader span {
    flex-grow: 1;
    color: var(--md-theme-default-text-accent-on-background, rgba(0,0,0,0.54));
    font-size: 14px;
    font-weight: 400;
  }

  .md-list-item-text {
    flex-direction: column !important;
  }

  .md-icon {
    margin-right: 8px !important;
    width: auto !important;
    color: #b0bec5 !important;
  }
</style>
