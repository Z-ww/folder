<template>
<div class="shop">
  <header></header>
  <nav class="clearf">

    <div @click="type=true"><p :class="[type ? 'pin' : '']">商品</p></div>
    <div @click="type=false"><p :class="[!type ? 'pin' : '']">评价</p></div>
  </nav>
  <div class="shopping clearf">
    <div class="left">
      <ul class="list">
        <li v-for="(i,index) in listFood" @click="num=index" :class="[num==index ? 'blue' : '']">{{i.name}}</li>
      </ul>
    </div>
    <div class="right">
      <div class="food" v-for="(i,index) in listFood" v-if="num==index">
        <div class="title clearf">
          <h3>{{i.name}}</h3>
          <span>{{i.description}}</span>
        </div>
        <ul class="clearf">
          <li v-for="a in i.foods" class="list_food clearf">
            <router-link :to="{name: 'details',params: {list: a}}">
              <div class="food_left">
                <div class="food_img">
                  <img :src="img_url+a.image_path" alt="">
                </div>

              </div>
               </router-link>
              <div class="food_right">
                <h3>{{a.name}}</h3>
                <p>{{a.description}}</p>
                <span>{{a.tips}}</span>
              </div>

            <div class="gou">
              {{a.specfoods[0].price}}起
              <shop-ping></shop-ping>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="comped">
    <div class="com_left">
      <div class="shop_img">
        <img src="../assets/shop.png" alt="">
      </div>
      <div class="font">
        <h3>￥0.00元</h3>
        <p>配送费￥5元</p>
      </div>
    </div>
    <div class="com_right">
      还差￥20元起送
    </div>
  </div>
</div>
</template>

<script>

  import shopPing from '../components/shop.vue'
    export default {
        name: "shop",
        components: {
            shopPing,
        },
        data(){
            return{
                type: true,
                num: 2,
                listFood: '',//食品信息
                img_url: '//elm.cangdu.org/img/'
            }
        },
        created() {
            this.food()
        },
        methods:{
            food(){
                this.$http.get('https://elm.cangdu.org/shopping/v2/menu',{
                    params: {
                        restaurant_id: 1
                    }
                }).then((data)=>{
                    console.log(data.data)
                    this.listFood=data.data
                })
            },
        }
    }
</script>

<style scoped>
.shop{
  width: 100%;
}
  header{
    width: 100%;
    height: 90px;
    background-color: red;
  }

  .title{
    width: 50%;
    float: left;
    background-color: #fff;
  }
  nav{
    width: 100%;
    background-color: #fff;
    padding: 8px 0;
  }
  nav>div{
    width: 50%;
    float: left;
    text-align: center;

  }
nav>div p{
  padding: 7px 4px;
  display: inline;
}
.shopping{
  width: 100%;
}
  .left{
    width: 24%;
    float: left;
  }
  .left ul{
    width: 100%;
    font-weight: 400;
    color: #333;
    box-sizing: border-box;
    font-family: Microsoft Yahei;
    list-style: none;
  }
  .list li{

    width: 100%;
    height: 60px;
    font-size: 14px;
    line-height: 60px;
    text-align: center;

    box-sizing: border-box;
    border-bottom: solid 1px #ccc;
  }
  .blue{
    background-color: #fff !important;
    border-left: solid 3px #2a8cef !important;
  }
  .right{
    width: 76%;
    float: left;
  }
  .right .frist{
    position: relative;
    left: 0;
    top: 0;
  }
  .title{
    width: 100%;
    padding: 13px 9px;
    box-sizing: border-box;
    background-color: #f6f6f6;
  }
  .title h3{
    float: left;
    font-size: 16px;
    color: #3e3e3e;
  }
  .title span{
    font-size: 12px;
    color: #a4a4a4;
    margin-top: 3px;
    float: left;
    margin-left: 5px;
  }
  .food ul{
    background-color: #fff;
  }
  .list_food{
    width: 100%;
    padding: 15px 10px;
    box-sizing: border-box;
    border-bottom: solid 1px #ccc;
    overflow: hidden;
  }
  .food_left{
    margin-right: 10px;
    float: left;
  }
  .food_img{
    width: 48px;
    height: 48px;
  }
.food_img img{
  width: 100%;
  height: 100%;
}
  .food_right{
    width: 70%;
    float: left;
  }
  .food_right h3{
    font-size: 14px;
    color: #333;
    font-weight: 600;
  }
  .food_right p{
    font-size: 10px;
    color: #999;
    line-height: 28px;

  }
.food_right span{
  color: #333;
  font-size: 12px;
  margin-right: 5px;
}
  .gou{
    width: 100%;
    text-align: right;
    display: inline-block;
  }
  .comped{
    width: 100%;
    height: 46px;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .com_left{
    width: 70%;
    height: 46px;
    background-color: #3d3c44;
    float: left;
  }
  .com_right{
    width: 30%;
    height: 46px;
    float: left;
    background-color: #535258;
    text-align: center;
    color: #fff;
    line-height: 46px;
    font-weight: 600;
  }
  .shop_img{
    width: 46px;
    height: 46px;
    background-color: blue;
    border: solid 4px #424244;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    top: -15px;
    text-align: center;
  }
.shop_img img{
  wdith: 30px;
  height: 30px;
  margin-top: 8px;
}
  .font{
    margin-left: 80px;
    color: #fff;
    padding-top: 5px;
  }
</style>
