<template>
  <div>
    <div class="card-body">
      <control-panel/>
    </div>
    <div class="card-footer">
      <control-footer/>
    </div>
  </div>
</template>

<script>
import ControlPanel from "@/components/control/ControlPanel";
import ControlFooter from "@/components/control/ControlFooter";
export default {
  name: "controlStruct",
  components: {ControlPanel, ControlFooter},
}
</script>

<style scoped>

</style>