<template>
  <div class="card my-3">
    <div class="card-body p-0">
      <div class="row">
        <div class="col">
          <div class="form-floating">
            <input type="text" readonly class="form-control-plaintext" id="atual" placeholder="0"
                   :value="$store.getters.valorAtual"/>
            <label for="atual">Valor Atual</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating">
            <input type="text" readonly class="form-control-plaintext" id="total" placeholder="0"
                   :value="$store.getters.valorTotal"/>
            <label for="total">Valor Total</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTop",
  computed: {},
  methods: {},
}
</script>

<style scoped>

</style>