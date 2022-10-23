<template>
<!--  <div>Histórico</div>-->
  <div>
    <div v-for="hist in $store.getters.history" :key="hist" :class="{'text-bg-danger': hist.tipo === 'dispensa', 'text-bg-success': hist.tipo ==='recebe'}">
      <div>{{hist.tipo}}</div>
      <div>{{hist.dataHora}}</div>
      <div>MOVIMENTO</div>
      <span v-for="(mov, mykey) in hist.mov" :key="mov">
        {{ mykey }}: {{ mov === "" ? "0" : mov }}
      </span>
      <div>TOTAL</div>
      <span v-for="(total, mykey) in hist.total" :key="total">
        {{mykey}}: {{ total === ""?"0": total }}
      </span>
    </div>
  </div>

</template>

<script>
export default {
  name: "historyPanel"
}
</script>

<style scoped>

</style>