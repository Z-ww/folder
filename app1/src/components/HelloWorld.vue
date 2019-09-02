
<template>
  <div class="hello">
      <router-link :to="{name:leftto}"><span class="spans">{{left}}</span></router-link>
      <div>{{name}}</div>
      <router-link :to="{name:rightto}"><p class="ps">{{right}}</p></router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props:{
      left:{
          type:String
      },
      name:{
          type:String
      },
      right:{
          type: String
      },
      rightto:{
        type:String
      },
      leftto:{
        type:String
      }
  },
  data () {
    return {

    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	width:100%;
	height:50px;
	background-color: #3190e8;
  overflow: hidden;
  position: fixed;
  top: 0;
}
.spans{
  float: left;
  padding-left: 10px;
  font-size: 20px;
  color: #eee;
  line-height: 50px;
}
.hello>div{
  float: left;
  padding-left: 130px;
  font-size: 24px;
  color: #eee;
  line-height: 50px;
}
.ps{
  float: right;
  font-size: 12px;
  padding-right: 30px;
  color: #eee;
  line-height: 50px;
}
</style>
