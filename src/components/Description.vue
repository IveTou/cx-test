<template>
  <div class="description">
    <div class="md-layout md-gutter md-alignment-top-center">
        <div class="md-layout-item md-xlarge-size-55 md-large-size-55 md-medium-size-55 md-small-size-100 md-xsmall-size-100">
          <md-list class="md-double-line">
            <md-list-item>
              <md-avatar class="md-avatar-icon md-small">ID</md-avatar>
              <div class="md-list-item-text">
                <span>{{ info.id }}</span>
                <span class="list-item-caption">ID do frete CargoX </span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-avatar class="md-avatar-icon md-small">ID</md-avatar>
              <div class="md-list-item-text">
                <span>{{ info.customer_tracking_number }}</span>
                <span class="list-item-caption">N° do pedido do cliente</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>people</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.trucker.name | nameFormatter }}</span>
                <span class="list-item-caption">Motorista</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>phone</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.trucker.phone | phoneFormatter }}</span>
                <span class="list-item-caption">Telefone</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>smartphone</md-icon>
              <div class="md-list-item-text">
                <ul>
                  <li>Acesso {{ info.trucker.last_app_open_at | dateFormatter(false) }}</li>
                  <li>GPS atualizado {{ info.trucker.last_app_position_at | dateFormatter(false) }}</li>
                  <li>Primeiro acesso em {{ info.trucker.first_login_at | dateFormatter(false) }}</li>
                  <li>Versão {{ info.trucker.app_version }}</li>
                </ul>
                <span class="list-item-caption">Aplicativo</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>local_shipping</md-icon>
              <div class="md-list-item-text">
                <span><p v-for="truck in info.trucks" :key="truck.id">{{ truck.type.name }} - {{ truck.plate }}</p></span>
                <span class="list-item-caption">Veículo</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>place</md-icon>
              <div class="md-list-item-text">
                <span>
                  <p>{{ info.origin.address }}, {{ info.origin.number }}</p>
                  <p>{{ info.origin.city }} - {{ info.origin.state }} - CEP: {{ info.origin.zip_code }}</p>
                </span>
                <span class="list-item-caption">Origem</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>my_location</md-icon>
              <div class="md-list-item-text">
                <span>
                  <p>{{ info.destination.address }}, {{ info.destination.number }}</p>
                  <p>{{ info.destination.city }} - {{ info.destination.state }} - CEP: {{ info.destination.zip_code }}</p>
                </span>
                <span class="list-item-caption">Destino</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>supervised_user_circle</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.trucker_seeker.name | nameFormatter }}</span>
                <span class="list-item-caption">Operação</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>record_voice_over</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.salesperson.name | nameFormatter }}</span>
                <span class="list-item-caption">Venda</span>
              </div>
            </md-list-item>
          </md-list>
        </div>
        <div class="md-layout-item md-xlarge-size-45 md-large-size-45 md-medium-size-45 md-small-size-100 md-xsmall-size-100">
          <md-list class="md-double-line">
            <md-list-item>
              <md-icon>event</md-icon>
              <div class="md-list-item-text">
                  <span>{{ info.pickup_date | dateFormatter(true, 'YYYY/DD/MM') }}</span>
                  <span class="list-item-caption">Coleta agendada </span>
                </div>
            </md-list-item>
            <md-list-item style="padding-left: 30px;">
              <div class="md-list-item-text">
                <span>{{ info.delivery_date | dateFormatter(true, 'X') }}</span>
                <span class="list-item-caption">Entrega agendada <md-icon class="small">help</md-icon></span>
              </div>
            </md-list-item>
            <md-list-item style="padding-left: 30px;">
              <div class="md-list-item-text">
                <span>{{ info.estimated_time_of_arrival | dateFormatter(true, 'X') }}</span>
                <span class="list-item-caption">Entrega calculada <md-icon class="small">help</md-icon></span>
              </div>
            </md-list-item>
            <md-list-item style="padding-left: 30px;">
              <div class="md-list-item-text">
                <span>{{ info.manual_input_estimated_time_of_arrival | dateFormatter(true, 'X') }}</span>
                <span class="list-item-caption">Entrega manual <md-icon class="small">help</md-icon></span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>library_books</md-icon>
              <div class="md-list-item-text">
                <span>
                  <Chip 
                    v-for="document in info.documents" 
                    :key="document.id" 
                    v-bind:content="document.name | docpayNameFormatter" 
                    v-bind:emitted="document.status === 'emitted'"
                  />
                </span>
                <span class="list-item-caption">Documentos</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>monetization_on</md-icon>
              <div class="md-list-item-text">
                <span>
                  <Chip 
                    v-for="payment in info.payments" 
                    :key="payment.id" 
                    v-bind:content="payment.name | docpayNameFormatter" 
                    v-bind:emitted="payment.status !== 'not_ok'"
                  />
                </span>
                <span class="list-item-caption">Pagamentos</span>
              </div>
            </md-list-item>
          </md-list>
          <Stepper v-bind:title="'Status'" v-bind:items="info.status_history"/>
        </div>  
    </div>
  </div>
</template>

<script>
  import Chip from './Chip.vue'
  import Stepper from './Stepper/Stepper.vue'
  import moment from 'moment'

  export default {
    name: 'description',
    components: {
      Chip,
      Stepper,
    },
    props: {
      info: Object,
    },
    filters: {
      nameFormatter(name) {
        return name.trim().toUpperCase()
      },
      dateFormatter(date, withTime, pattern) {
        const format = withTime ?
          'DD/MM/YYYY H:mm:ss' :
          'DD/MM/YYYY'

        return date && moment(date, pattern).format(format) || 'Sem data'
      },
      phoneFormatter(phone) {
        return phone.replace(/(\d\d)(\d\d)(\d\d\d\d\d)(\d\d\d\d)/, "+$1 ($2) $3-$4")
      },
      docpayNameFormatter(name) {
        switch(name.toUpperCase()) {
          case 'CTE':
            return 'CTe'
          case 'MDFE':
            return 'MDFe'
          case 'CT':
            return 'Contrato'
          case 'CIOT':
            return 'CIOT'
          case 'ADIA':
            return 'Adiantamento'
          case 'CANH':
            return 'Canhoto'
          case 'SALD':
            return 'Saldo'
          default:
            return name  
        }
      }
    }
  }
</script>

<style>
  .description {
    height: 100%;
    width: 100%;
    background-color: white;
    padding: 24px 16px;
  }

  .md-list-item > div > div {
    align-items: flex-start;
    padding: 8px;
  }

  .md-icon {
    margin-right: 8px !important;
    width: auto !important;
    color: #b0bec5 !important;
  }

  .md-avatar {
    background: #b0bec5 !important;
    min-width: auto !important;
    min-height: auto !important;
    width: 24px !important;
    height: 24px !important;
    margin-right: 8px !important;
    margin-top: 0 !important;
  }

  .md-icon.small {
    font-size: 16px!important;
    margin-bottom: 2px !important;
  }

  .md-list-item-text {
    flex-direction: column-reverse !important;
  }

  ul {
    padding-left: 0;
  }

  li, p {
    color: black !important;
    font-size: 16px !important;
  }

  .md-list-item-text li:before {
    content:"\A";
    width:4px;
    height:4px;
    border-radius:50%;
    margin-bottom: 4px;
    margin-right: 8px;
    background: black;
    display:inline-block;
  }

  .list-item-caption {
    margin-bottom: 4px !important;
    line-height: 24px !important;
  }
</style>
