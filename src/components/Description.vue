<template>
  <div class="description">
    <div class="md-layout md-gutter md-alignment-top-center">
        <div class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-100 md-xsmall-size-100">
          <md-list class="md-double-line">
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.id }}</span>
                <p class="list-item-caption">ID do frete CargoX </p>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.customer_tracking_number }}</span>
                <p class="list-item-caption">N° do pedido do cliente</p>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.trucker.name | nameFormatter }}</span>
                <p class="list-item-caption">Motorista</p>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{ info.trucker.phone | phoneFormatter }}</span>
                <p class="list-item-caption">Telefone</p>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <ul>
                  <li>Acesso {{ info.trucker.last_app_open_at | false | dateFormatter }}</li>
                  <li>GPS atualizado</li>
                  <li>Primeiro acesso em</li>
                  <li>Versão</li>
                </ul>
                <p class="list-item-caption">Aplicativo</p>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{  }}</span>
                <p class="list-item-caption">Veículo</p>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{  }}</span>
                <p class="list-item-caption">Origem</p>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{  }}</span>
                <p class="list-item-caption">Destino</p>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{  }}</span>
                <p class="list-item-caption">Operação</p>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>info</md-icon>
              <div class="md-list-item-text">
                <span>{{  }}</span>
                <p class="list-item-caption">Venda</p>
              </div>
            </md-list-item>
          </md-list>
        </div>
        <div class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-100 md-xsmall-size-100">
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
  }

  .md-icon {
    margin-right: 16px !important;
  }

  .md-list-item-text {
    flex-direction: column-reverse !important;
  }

  ul {
    padding-left: 0;
  }

  li {
    color: black !important;
  }

  .list-item-caption {
    margin-bottom: 8px !important;
  }
</style>
