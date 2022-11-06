<template>
  <div>
    <div v-for="(hist, idx) in $store.getters.history" :key="hist" class="card"
         :class="[hist.tipo === 'recebe' ? 'border-success' : 'border-danger', $store.getters.history.length !== idx+1 ? 'mb-3' : '']">
      <div class="card-header" :class="[hist.tipo === 'recebe' ? 'text-success' : 'text-danger']">
        {{ hist.tipo === 'recebe' ? 'Recebeu em ' : 'Dispensou em ' }} {{ new Date(hist.dataHora).toLocaleString("pt-BR",{
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }) }}
      </div>
      <div class="card-body" :class="[hist.tipo === 'recebe' ? 'text-success' : 'text-danger']">
         <div v-for="(mov, mykey) in hist.mov" :key="mov">
           <div class="card mb-3" style="height: 60px; width: 120px" v-if="mov!==''">
             <div class="row g-0">
               <div class="col-md-6">
                 <img :src="cedulas(mykey)" alt="..." class="rounded-start" style="height: 59px">
               </div>
               <div class="col-md-6">
                 <div class="card-body p-auto">
                   <p class="card-text text-center">
                     <small class="text-muted text-center">{{ mov }}</small>
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
        <div>TOTAL</div>
        <span v-for="(total, mykey) in hist.total" :key="total">
        {{ mykey }}: {{ total === "" ? "0" : total }}
      </span>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "historyPanel",
  computed: {},
  methods: {
    cedulas(valor) {
      return require('@/assets/' + valor + '.png')
    }
  },
}
</script>

<style scoped>

</style>