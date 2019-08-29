<template>
  <div class="hello">
      <span>{{left}}</span>
      <div>{{name}}</div>
      <p>{{right}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
      left:{
          type:String
      },
      name:{
          type:String
      },
      right:{
          type: String
      }
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	width:100%;
	height:50px;
	background-color:#0000FF;
  overflow: hidden;
  position: fixed;
  top: 0;
}
.hello>span{
  float: left;
  padding-left: 10px;
  font-size: 20px;
  color: #eee;
  line-height: 50px;
}
.hello>div{
  float: left;
  padding-left: 160px;
  font-size: 24px;
  color: #eee;
  line-height: 50px;
}
.hello>p{
  float: right;
  font-size: 12px;
  padding-right: 30px;
  color: #eee;
  line-height: 50px;
}
</style>
