<template>
  <div class="not-found">
    <md-empty-state
      md-rounded
      md-icon="access_time"
      md-label="Ooops!"
      md-description="Não foi possivel carregar as informações no momento. Tente mais tarde.">
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: 'not-found',
}
</script>

<style>
  .not-found {
    margin: 64px auto;
    max-width: 1024px;
  }
</style>
