<template>
  <div class="login">
    <hello-world left="<" leftto="mine" name="重置密码"></hello-world>
    <div class="kong"></div>
    <div class="from">
      <div class="ipt clearf">
        <input type="text" placeholder="账号" v-model="user">
      </div>
      <div class="ipt clearf">
        <input type="text" placeholder="旧密码" v-model="oldpass">
      </div>
      <div class="ipt clearf">
        <input type="text" placeholder="请输入新密码" v-model="newpass">
      </div>
      <div class="ipt clearf">
        <input type="text" placeholder="请确认密码" v-model="pass">
      </div>
      <div class="ipt clearf">
        <input type="text" placeholder="验证码" v-model="code">
        <div class="auth">
          <img :src="img" alt="">
          <div @click="code_img">
            <span>看不清<br/><span style="color: blue;">换一张</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="loginbtn">
      <button @click="reset()">确认修改</button>
    </div>
  </div>
</template>

<script>

    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: "login",
        components: {
            HelloWorld
        },
        data() {
            return {
                img: '',//验证码图片
                user: '',//账号
                oldpass: '',//旧密码
                newpass: '',//新密码
                pass: '',//新密码
                code: '',//验证码
                list_user: '',//登录成功后个人的信息
            }
        },
        methods: {
            reset() {
                this.axios.post('https://elm.cangdu.org/v2/changepassword', {
                    username : this.user,// 用户名
                    oldpassWord : this.oldpass,//旧密码
                    newpassword: this.newpass,//新密码
                    confirmpassword: this.pass,//确认密码
                    captcha_code: this.code,//验证码
                }, {
                    emulateJSON: true
                }).then((response)=>{
                    this.list_user=response.data
                    if(response.data.status==0){
                        alert(response.data.success)
                        this.code_img()
                    }else{
                        alert(response.data.message)
                        this.$router.push('/userinfo')
                    }
                }).catch((response)=>{
                    console.log(response)
                })
            },
            code_img() {
                this.axios.post('https://elm.cangdu.org/v1/captchas', {
                    emulateJSON: true
                }).then((response)=>{
                    this.img=response.data.code
                }).catch((response)=>{
                })
            },

        },
        created() {
            this.code_img()
        }
    }
</script>

<style scoped>
  .login {
    width: 100%;
  }

  .kong {
    height: 50px;
  }

  .from {
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
  }

  .ipt {
    padding: 15px 24px;
    border-bottom: solid 1px #f6f6f6;
  }

  .ipt input {
    width: 200px;
    height: 18px;
    outline: none;
    border: none;
    float: left;
  }

  .loginbtn {
    padding: 30px 24px;
  }

  .loginbtn button {
    width: 100%;
    height: 45px;
    font-size: 18px;
    color: #fff;
    background-color: #4cd964;
    border: none;
    border-radius: 3px;
  }

  .auth {
    position: absolute;
    right: 40px;
    top: 270px;
  }

  .auth > div {
    position: absolute;
    right: -1rem;
    top: -0.1rem;
    font-size: 12px;
  }
</style>
