<template>
    <div class="row row-cols-2 justify-content-center align-items-center g-2">
      <div class="col">
        <div class="d-grid g-2">
          <input type="button" value="RECEBE" class="btn btn-success" @click="$store.dispatch('recebe')"/>
        </div>
      </div>
      <div class="col">
        <div class="d-grid g-2">
          <input type="button" value="DISPENSA" class="btn btn-danger" @click="$store.dispatch('dispensa')"/>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ControlFooter",
  methods: {},
}
</script>

<style scoped>

</style>