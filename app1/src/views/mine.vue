<template>
  <div class="mine">
    <!--            头部登录注册-->
    <router-link to="/login">
      <div class="mylogin clearf">
        <div class="left">
          <img :src="userImg" alt="">
        </div>
        <div class="right clearf">
          <div class="lv" v-if="userName">
            {{userName}}
          </div>
          <div class="l" v-else>
            <h2>登录/注册</h2>
            <p>暂无绑定手机号</p>
          </div>

          <div class="r">></div>
        </div>
      </div>
    </router-link>
          <!--    余额积分-->
    <div class="money clearf">
      <div class="balance">
        <div>
          <span>0.00</span>元
        </div>
        <p>我的余额</p>
      </div>
      <div class="balance">
        <div>
          <span>0</span>个
        </div>
        <p>我的优惠</p>
      </div>
      <div class="balance">
        <div>
          <span>0.00</span>分
        </div>
        <p>我的积分</p>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        name: "mine",
        data(){
            return{
                userImg: '',
                userName: '',
            }
        },
        created(){
            this.userImg=this.$store.state.user.userImg
            this.userName=this.$store.state.user.userName
            console.log(this.$store.state.user.userName)
        }
    }

</script>

<style scoped>

  .mine {
    width: 375px;
  }

  .mylogin {
    padding: 16px 13px;
    background-color: #3190e8;
    color: #fff;
  }

  .mylogin .left {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    background-color: #ccc;
    margin-right: 10px;
  }

  .mylogin .left img {
    width: 100%;
    height: 100%;
  }

  .mylogin .right {
    width: 277px;
    float: left;
  }

  .l {
    float: left;
  }
  .lv{
    font-size: 20px;
    line-height: 60px;
    float: left;
  }
  .l h2 {
    font-size: 20px;
    margin-top: 12px;
  }

  .right .r {
    font-size: 20px;
    line-height: 60px;
    float: right;
  }

  .money {
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
  }

  .balance {
    width: 33%;
    padding-top: 22px;
    float: left;
    border-right: solid 1.5px #f8f8f8;
    text-align: center;
  }

  .balance > div span {
    font-size: 23px;
    color: #ff9900;
  }

  .balance p {
    font-size: 15px;
    line-height: 44px;
  }

  .balance:last-child {
    border-right: none;
  }
</style>
