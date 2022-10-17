<template>
    <div class="row row-cols-3 row-cols-sm-4 row-cols-md-6 row-cols-lg-8 justify-content-center align-items-center g-2">
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS200" id="RS200"/>
          <label for="RS200">R$ 200</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS100" id="RS100"/>
          <label for="RS100">R$ 100</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS50" id="RS50"/>
          <label for="RS50">R$ 50</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS20" id="RS20"/>
          <label for="RS20">R$ 20</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS10" id="RS10"/>
          <label for="RS10">R$ 10</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS5" id="RS5"/>
          <label for="RS5">R$ 5</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS2" id="RS2"/>
          <label for="RS2">R$ 2</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS1" id="RS1"/>
          <label for="RS1">R$ 1</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS050" id="RS050"/>
          <label for="RS050">R$ 0,50</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS025" id="RS025"/>
          <label for="RS025">R$ 0,25</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS010" id="RS010"/>
          <label for="RS010">R$ 0,10</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input type="number" class="form-control" placeholder="0" v-model="$store.state.RS005" id="RS005"/>
          <label for="RS005">R$ 0,05</label>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "controlPanel"
}
</script>

<style scoped>

</style>