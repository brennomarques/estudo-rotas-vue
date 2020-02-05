<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu/>
		<transition mode="out-in" 
			enter-active-class="animated slideInLeft"
			leave-active-class="animated slideOutRight">
			<router-view />	
		</transition>
			
		
	</div>
</template>

<script>
import Menu from './components/templete/menu'

export default {
	components:{Menu}	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
