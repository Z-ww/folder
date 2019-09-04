<template>
	<div class="userinfo">
    <hello-world left="<" leftto="mine" name="重置密码"></hello-world>
    <div style="height: 60px;"></div>
    <div class="watch clearf">
      <input type="file" name="" id="">
      <p>头像</p>
      <div>
        <img src="" alt="">
        <span>></span>
      </div>
    </div>
    <div class="item clearf">
      <p>用户名</p>
      <p>17694995488<span>></span></p>
    </div>
    <div class="item clearf">
      <p>收货地址</p>
      <p><span>></span></p>
    </div>
    <div class="set">
      <div class="top">账号绑定</div>
      <div class="item clearf">
        <p>手机</p>
        <p><span>></span></p>
      </div>
    </div>
    <div class="set">
      <div class="top">安全设置</div>
      <router-link to="/resetPass">
        <div class="item clearf">
          <p>登录密码</p>
          <p>修改密码<span>></span></p>
        </div>
      </router-link>
    </div>
    <div class="btn">
      <button>退出登录</button>
    </div>
  </div>
</template>
<style scoped>
  .userinfo{
    width: 100%;
  }
  .watch{
    padding: 15px 10px;
    margin-top: 10px;
    background: #fff;
    border-bottom: solid 2px #eaeaea;
  }
  .watch input{
    display: block;
    position: absolute;
    opacity: 0;
    top: 63px;
    left: 0;
    width: 100%;
    height: 73px;
  }
  .watch p{
    font-size: 16px;
    color: #333;
    float:left;
    line-height: 48px;
  }
  .watch>div{
    width: 70px;
    float: right
  }
  .watch>div img{
    display: inline-block;
    width: 48px;
    height: 48px;
    border: solid 1px #000;
    float: left;
  }
  .watch>div span{
    float: left;
    line-height: 48px;
  }
  .item{
    background-color: #fff;
    padding: 15px 10px;
    border-bottom: solid 2px #eaeaea;
  }
  .item p:nth-of-type(1){
    float: left;
    font-size: 16px;
    color: #333;
  }
  .item p:nth-of-type(2){
    float: right;
    font-size: 14px;
    color: #787878;
  }
  .top{
    font-size: 12px;
    padding: 10px;
    border-bottom: solid 2px #eaeaea;
  }
  .btn{
    padding: 30px 24px;
  }
  .btn button{
    width: 100%;
    height: 45px;
    font-size: 18px;
    color: #fff;
    background-color: #d8584a;
    border: none;
    border-radius: 3px;
  }
</style>
<script>
    import HelloWorld from '@/components/HelloWorld.vue'
	export default{
		name:'userinfo',
    components: {
        HelloWorld
    }

	}
</script>
