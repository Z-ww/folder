<template>
    <div class="btm">
        <router-link v-for="o,i in str" :key="i+o" :to = '{name:num[i]}' >
             <div @click="is = i">
                <p :class="['iconfont',arr[i],is!=i?'':'active']"></p>
                <p>{{o}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'bottom',
  props:{
      take:{
          type:String
      },
      search:{
          type:String
      },
      order:{
          type: String
      },
      my:{
        type:String
      }
  },
  data () {
    return {
        is: 0,
        arr:['icon-eleme','icon-zhinanzhen','icon-dingdan','icon-wode'],
        str:['外卖','搜索','订单','我的'],
        num:[this.take,this.search,this.order,this.my]
    }
  },
  created() {
      console.log(this.num)
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btm{
	width:100%;
	height:50px;
    overflow: hidden;
    position: fixed;
    border: 1px solid #eee;
    bottom: 0;
}
.btm div{
    width: 25%;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 4px;
    float:left;
}
.btm div>p:nth-of-type(1){
    font-size: 20px;
    color: #aaa;
}
.btm div>p:nth-of-type(2){
    font-size: 12px;
    font-weight: bold;
    color: #aaa;
}
.btm .active::before{
    color: #3190e8;
}
</style>
