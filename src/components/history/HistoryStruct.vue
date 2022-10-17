<template>
  <div>
    <div class="card-body">
      <history-panel/>
    </div>
    <div class="card-footer">
      <history-footer/>
    </div>
  </div>
</template>

<script>
import HistoryPanel from "@/components/history/HistoryPanel";
import HistoryFooter from "@/components/history/HistoryFooter";
export default {
  name: "HistoryStruct",
  components: {HistoryPanel, HistoryFooter}
}
</script>

<style scoped>

</style>