<template>
  <div id="app">
		<router-link to="/"></router-link>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>

</template>

<script>
	import hello from '@/components/HelloWorld.vue'


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
  *{
    margin:0;
    padding:0;
  }
  html,body{
    width:100%;
    height:100%;
    background-color: #f5f5f5;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
