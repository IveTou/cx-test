<template>
  <div class="container">
    <div class="maps" />
    <div class="footer">
      <span class="md-caption">Última atualização: {{ last_update | dateFormatter }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

  export default {
    name: 'maps',
    props: {
      origin: Object,
      destination: Object,
      last_update: String,
      error: Object,
    },
    filters: {
      dateFormatter(date) {
        return moment(date).format('DD/MM/YYYY H:mm:ss')
      },
    },
    async mounted() {
      try {
        const googleMaps = window.google.maps
        const directionsService = new googleMaps.DirectionsService()
        const directionsDisplay = new googleMaps.DirectionsRenderer({suppressMarkers: true})
        
        const origin = this.origin && new googleMaps.LatLng(this.origin.latitude, this.origin.longitude)
        const destination = this.destination && new googleMaps.LatLng(this.destination.latitude, this.destination.longitude)

        const mapOptions = {
          zoom:7,
          center: origin || { lat: -12 , lng: 32 },
        }

        var originMarker = origin && new googleMaps.Marker({ 
          position: origin,
          icon: 'https://firebasestorage.googleapis.com/v0/b/react-redux-firebase-2f3ee.appspot.com/o/img%2Fdelivery-truck.png?alt=media&token=7c720e3b-f925-4c5f-a7e8-c1005e2d4a28', 
        });
        
        var destinationMarker = destination && new googleMaps.Marker({ 
          position: destination,
          icon: 'https://firebasestorage.googleapis.com/v0/b/react-redux-firebase-2f3ee.appspot.com/o/img%2Fwarehouse.png?alt=media&token=a6691fff-6298-4094-98c9-d614f4ae595e', 
        });

        const map = new googleMaps.Map(this.$el.childNodes[0], mapOptions)
        directionsDisplay.setMap(map);

        const requestRoute = origin && destination 
        ? {
            origin,
            destination,
            travelMode: 'DRIVING'
          }
        : null
  
        requestRoute && directionsService.route(requestRoute, (response, status) => {
          if (status == 'OK') {
            directionsDisplay.setDirections(response)
            originMarker.setMap(map)
            destinationMarker.setMap(map)
          }
        })
      } catch (error) {
        this.error = error
      }
    }
  }
</script>

<style>
  .container {
    background-color: white;
  }

  .maps {
    height: 360px;
    width: 100%;
  }

  .footer {
    padding: 16px 8px;
  }
</style>
