<template>
    
      <div class="app">
        <p @click="jia" class="btn_ja">+</p>
        <transition>
          <p v-show="num" class="num">{{num}}</p>
        </transition>
        
        <transition>
          <p v-show="num" @click="jian" class="btn_jn" :style="{'transform':num?'':'translateX(60px)'}">-</p>
        </transition>
      </div>
    
</template>

<script>
export default {
  name: 'merchant',
  data () {
    return {
      num: 0
    }
  },
  watch: {
    num(a,b){
      this.$emit('num',a)
    }
  },
  methods:{
    jia(){
      this.num++
    },
    jian(){
      this.num--
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .app{
      height: 20px;
      width: 80px;
      overflow: hidden;
    }
    .btn_ja,.btn_jn{
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      border: none;
      font-size: 20px;
      box-sizing: border-box;
      float: right;
    }
    .btn_ja{
      background-color: #3190e8;
      color: #fff;
    }
    .btn_jn{
        color: #3190e8;
        border: 1px solid #3190e8;
        line-height: 16px;
    }
    .num{
      width: 20px;
      height: 20px;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      float: right;
      transition: .75s;
    }
    .v-enter{
      transform: translate(60px)
    }
    .v-enter-active{
      transition:  .35s;
    }
    .v-leave{
      transform: translate(20px)
    }
    .v-leave-active{
      transition:  .35s;
    }
</style>
