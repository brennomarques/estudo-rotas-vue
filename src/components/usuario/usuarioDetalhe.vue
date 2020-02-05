<template>
  <div class="usuario-detalhe">
      <h3>Usúario detalhe</h3>
      <hr>
      <p><strong>Código:</strong>{{ id }}</p>
      <router-link tag="button" primario to="usuario/1/editar">
        Editar
      </router-link>
  </div>
</template>

<script>
export default {
      props:['id'],
}
</script>

<style>

</style>