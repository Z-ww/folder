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
<<<<<<< HEAD

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
=======
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
>>>>>>> 83ff969f2f8bc4fd3069cb5bfb66e9b7f849a045
</style>
