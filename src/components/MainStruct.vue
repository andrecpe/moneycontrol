<template>
  <div>
    <main-top/>
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <router-link to="/controle" class="nav-link" active-class="active">Controle</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/parcial" class="nav-link" active-class="active">Parcial</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/historico" class="nav-link" active-class="active">Histórico</router-link>
          </li>
        </ul>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainTop from "@/components/MainTop";
export default {
  name: "mainStruct",
  components: {MainTop},
}
</script>

<style scoped>

</style>