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

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100%;
    height:100%;
  }
  *{
    margin:0;
    padding:0;
  }
  html,body{
    width:100%;
    height:100%;
  }
  ul{list-style:none}
  a{text-decoration: none;}
  img{vertical-align:top;border:none}

  .clearf:after,
  .clearf:before {
    content: "";
    display: block;
    clear: both;
  }
</style>
