
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
	background-color:#3190e8;
  overflow: hidden;
  position: fixed;
  top: 0;
  padding: 0 10px;
  box-sizing: border-box;
}
.spans{
  float: left;
  font-size: 20px;
  color: #eee;
  line-height: 50px;
}
.hello>div{
  width: 50%;
  color: #fff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}
.ps{
  float: right;
  font-size: 12px;
  color: #eee;
  line-height: 50px;
}
</style>
