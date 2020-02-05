<template>
  <div class="usuario">
      <h2>Usúario</h2>
      <hr>
      <router-view/>
      <button sucesso @click="irParaInicio">Inicio</button>
  </div>
</template>

<script>
export default {

    methods: {
        irParaInicio(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>