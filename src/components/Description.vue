<template>
  <div class="description">
    <div class="md-layout md-gutter md-alignment-top-center">
        <div class="md-layout-item md-large-size-60 md-medium-size-60 md-small-size-100 md-xsmall-size-100">
          <md-list class="md-double-line">
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.id }}</span>
                <span class="list-item-caption">ID do frete CargoX </span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.customer_tracking_number }}</span>
                <span class="list-item-caption">N° do pedido do cliente</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.trucker.name | nameFormatter }}</span>
                <span class="list-item-caption">Motorista</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.trucker.phone | phoneFormatter }}</span>
                <span class="list-item-caption">Telefone</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
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
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span><p v-for="truck in info.trucks" :key="truck.id">{{ truck.type.name }} - {{ truck.plate }}</p></span>
                <span class="list-item-caption">Veículo</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>
                  <p>{{ info.origin.address }},{{ info.origin.number }}</p>
                  <p>{{ info.origin.city }} - {{ info.origin.state }} - CEP: {{ info.origin.zip_code }}</p>
                </span>
                <span class="list-item-caption">Origem</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>
                  <p>{{ info.destination.address }},{{ info.destination.number }}</p>
                  <p>{{ info.destination.city }} - {{ info.destination.state }} - CEP: {{ info.destination.zip_code }}</p>
                </span>
                <span class="list-item-caption">Destino</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.trucker_seeker.name }}</span>
                <span class="list-item-caption">Operação</span>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.salesperson.name }}</span>
                <span class="list-item-caption">Venda</span>
              </div>
            </md-list-item>
          </md-list>
        </div>
        <div class="md-layout-item md-large-size-40 md-medium-size-40 md-small-size-100 md-xsmall-size-100">
        </div>  
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'description',
    props: {
      info: Object,
    },
    filters: {
      nameFormatter(name) {
        return name.trim().toUpperCase()
      },
      dateFormatter(date, withTime) {
        const format = withTime ?
          'DD/MM/YYYY h:mm:ss' :
          'DD/MM/YYYY'

        return moment(date).format(format)
      },
      phoneFormatter(phone) {
        return phone.replace(/(\d\d)(\d\d)(\d\d\d\d\d)(\d\d\d\d)/, "+$1 ($2) $3-$4")
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
    padding: 16px 8px;
  }

  .md-icon {
    margin-right: 8px !important;
    margin-top: -5px !important;
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
    margin-bottom: 8px !important;
  }
</style>
