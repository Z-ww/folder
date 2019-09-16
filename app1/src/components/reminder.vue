<template>
        <div class="wrap" :style="{'transform':type?'0px':'-800px'}"  v-show="type">
            <div>
                <img v-show="judge" src="./img/icon1.jpg">
                <img v-show="!judge" src="./img/icon2.jpg">
            </div>
            <div class="tishi">
                {{judge?'登录成功':'登录失败'}}        
            </div>
            <div class="btn" @click='btn'>确定</div>
        </div>
</template>
<script>
export default {
    props:['type','judge'],
    methods:{
      btn(){
        this.num = 0
      }
    },
    computed: {
      num:{
        get(){
          var is = this.type
          return is
        },
        set(val){
          this.$emit('val',val)
        }
      }
    },
}
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 540px;
    border-radius: 5px;
    background: rgb(246,246,246);
    position: absolute;
    text-align: center;
    top: 0px;
  }
  .wrap>div>img{
    width: 80px;
    height: 80px;
    margin-top: 30%;
  }
  .tishi{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .btn{
    width: 300px;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #fff;
    background-color: rgb(0,255,0);
    margin: 0 auto;
  }
</style>