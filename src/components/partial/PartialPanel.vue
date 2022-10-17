<template>
  <div class="row row-cols-4 row-cols-sm-6 row-cols-md-8 row-cols-lg-12 justify-content-center align-items-center g-2">
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS200" placeholder="0" :value="$store.state.TRS200"/>
        <label for="TRS200">R$ 200</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS100" placeholder="0" :value="$store.state.TRS100"/>
        <label for="TRS100">R$ 100</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS50" placeholder="0" :value="$store.state.TRS50"/>
        <label for="TRS50">R$ 50</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS20" placeholder="0" :value="$store.state.TRS20"/>
        <label for="TRS20">R$ 20</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS10" placeholder="0" :value="$store.state.TRS10"/>
        <label for="TRS10">R$ 10</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS5" placeholder="0" :value="$store.state.TRS5"/>
        <label for="TRS5">R$ 5</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS2" placeholder="0" :value="$store.state.TRS2"/>
        <label for="TRS2">R$ 2</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS1" placeholder="0" :value="$store.state.TRS1"/>
        <label for="TRS1">R$ 1</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS050" placeholder="0" :value="$store.state.TRS050"/>
        <label for="TRS050">¢ 50</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS025" placeholder="0" :value="$store.state.TRS025"/>
        <label for="TRS025">¢ 25</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS010" placeholder="0" :value="$store.state.TRS010"/>
        <label for="TRS010">¢ 10</label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating">
        <input type="text" readonly class="form-control-plaintext" id="TRS005" placeholder="0" :value="$store.state.TRS005"/>
        <label for="TRS005">¢ 5</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "operationPanel"
}
</script>

<style scoped>

</style>