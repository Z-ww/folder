<template>
  <div id="app">
		<router-link to="/"></router-link>
    <router-view/>
  </div>

</template>

<script>
	import hello from './components/HelloWorld.vue'


export default {
  name: 'App',
  components:{hello}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
