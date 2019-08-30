<template>
  <div class="login">
    <hello-world left="<" leftto="mine" name="密码登录"></hello-world>
    <div class="kong"></div>
    <div class="from">
      <div class="ipt clearf">
        <input type="text" placeholder="账号" v-model="user">
      </div>
      <div class="ipt clearf">
        <input type="text" placeholder="密码" v-model="pass">
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
      <p>温馨提示： 未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <button @click="login()">登录</button>
    </div>
    {{user}}
    {{pass}}
    {{code}}
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
                pass: '',//密码
                code: '',//验证码
            }
        },
        methods: {
            login() {
                this.axios.post('https://elm.cangdu.org/v2/login', {
                    username: this.user,
                    password: this.pass,
                    captcha_code: this.code,
                }, {
                    emulateJSON: true
                }).then((response)=>{
                    console.log(response.data)
                }).catch((response)=>{
                    console.log(response)
                })
            },
            code_img() {
                this.axios.post('https://elm.cangdu.org/v1/captchas', {
                    emulateJSON: true
                }).then((response)=>{
                    this.img=response.data.code
                    console.log(response.data)
                }).catch((response)=>{
                    console.log(response)
                })
            }
        },
        created() {
           this.code_img()
            this.axios.get('https://elm.cangdu.org/v1/user').then((data) => {
                console.log(data)
            })
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
    padding: 0 24px;
    font-size: 12px;
    line-height: 32px;
    color: #fe1111;
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
    top: 170px;
  }

  .auth > div {
    position: absolute;
    right: -1rem;
    top: -0.1rem;
    font-size: 12px;
  }
</style>
