<template>
  <div class="d-grid g-2">
    <input type="button" value="LIMPAR" class="btn btn-warning" @click="$store.dispatch('limpar')"/>
  </div>
</template>

<script>
export default {
  name: "HistoryFooter",

}
</script>

<style scoped>

</style>