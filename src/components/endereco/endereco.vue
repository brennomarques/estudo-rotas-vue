<template>
  <div>
      <h2>Informação do endereço</h2>
      <hr>
      <button sucesso @click="IrInicio">Inicio</button>
  </div>
</template>

<script>
export default {
  methods: {
    IrInicio(){
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>