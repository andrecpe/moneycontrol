<template>
  <div id="app">
    <div class="container">
      <main-struct/>
    </div>
  </div>
</template>
<script>
import MainStruct from "@/components/MainStruct";
export default {
  components: {MainStruct},
  mounted() {
    this.$store.dispatch('onstart')
  }
}
</script>