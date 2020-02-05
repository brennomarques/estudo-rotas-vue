<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact><a>Início</a></router-link>
            <router-link to="/usuario" tag="li" active-class="active"><a>Usúario</a></router-link>
            <router-link to="/endereco" tag="li" active-class="active"><a>Endereço</a></router-link>
            <router-link to="/complemento" tag="li" active-class="active"><a>Complemento</a></router-link>
        </ul>
    </nav>
  
</template>

<script>
export default {

}
</script>

<style>

</style>