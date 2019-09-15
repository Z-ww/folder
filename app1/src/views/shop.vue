<template>
<div class="shop" >
  <!-- 跳出购物车 -->
  {{btn_type}}
<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="shop_bottom" v-show="shopType">
    <div class="shop_header">
      <div class="Shop_cart">购物车<span @click="clears">清空</span></div>
    </div>
    <div class="shop_name">
      <ul>
        <li v-for="(value,key) in shop_storage" :key="key">
          <p>
           <span style="display:inline-block;width:200px;">{{value.name}}</span>
            <span style="color: #f60;">￥{{value.price}}</span>
            <span style="float:right;margin-left:10px;" @click="shop_clear(value)">删除</span>
            <span style="float:right">
              {{value.num}}个数
            </span>
            
          </p>
              </li>
      </ul>
    </div>
  </div>
    </div>
  </div>
</div>
  <transition name="fade">
					<loading v-if="isLoading"></loading>
	</transition>
  <!--<header></header>-->
  <nav class="clearf">
    <div @click="type=true"><p :class="[type ? 'pin' : '']">商品</p></div>
    <div @click="type=false"><p :class="[!type ? 'pin' : '']">评价</p></div>
  </nav>
  <div class="shopping clearf">
    <div class="left">
      <ul class="list">
        <li v-for="(i,index) in listFood" @click="num=index" :class="[num==index ? 'blue' : '']" :key="i+index">{{i.name}}</li>
      </ul>
    </div>
    <div class="right">
      <div class="food" v-for="(i,index) in listFood" v-if="num==index" :key="i+index">
        <div class="title clearf">
          <h3>{{i.name}}</h3>
          <span>{{i.description}}</span>
        </div>
        <ul class="clearf">
          <li v-for="(a,index) in i.foods" class="list_food clearf" :key="a+index">
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
              <span style="font-size: 22px;color: dodgerblue;">{{a.specfoods[0].price}}</span> ¥ 起
           <div @click='joins(a)' style="float:left;margin-top:6px"><shop-ping @num='join'></shop-ping></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="comped">
    <div class="com_left">
      <!-- <button style="width:100px;height:100px;"> -->
      <div class="shop_img btn btn-primary" @click="shopType=true" type="button" data-toggle="modal" data-target=".bs-example-modal-sm">
           <img src="../assets/shop.png" alt="">
        <span>{{shop_nums}}</span>
      </div>
      <!-- </button> -->
      <div class="font">
        <h3>￥{{Totalprice}}元</h3>
        <p>配送费￥5元</p>
      </div>
    </div>
    <div class="com_right">
      <div v-show="!btn_type">
        差20元起送
      </div>
     <div v-show="btn_type">
       去结算
     </div>
    </div>
  </div>
  
  
</div>
</template>

<script>
	import Loading from '@/components/loading'
//this.$store.commit('settotalPrice',参数)
  import shopPing from '../components/shop.vue'
    export default {
        name: "shop",
        components: {
            shopPing,
            Loading,
            price:''
        },
        data(){
            return{
                type: true,
                num: 2,
                listFood: '',//食品信息
                img_url: '//elm.cangdu.org/img/',
                isLoading: true,
                //商品个数
                nums:'',
                //分类id
                bigid:'',
                //商品总价钱
                Totalprice:0,
                //显示隐藏购物车
                shopType:false,
                //存储加入购物车的商品
                shop_storage:[],
                //加入购物车的个数
                shop_nums:0,
                //显示隐藏结算按钮
                btn_type:false
                
            }
        },
        watch:{
            Totalprice(a,b){
              console.log(a,b)
              if(a>=20){
                this.btn_type = true;
              }else{
                this.btn_type = false
              }
            }
        },
        created() {
           this.aaaaa()

        },
        methods:{
          //删除商品
          shop_clear(i){
            //删除某一个购物商品通过循环添加到另一个对象里
            var obj={};
            var local = JSON.parse(localStorage.buyCart);
            for(var key in local){
              if(key!=i.item){
                obj[key] = local[key]
              }
            }
            console.log(obj)
            localStorage.buyCart = JSON.stringify(obj)
           this.aaaaa();
           
          },
          aaaaa(){
            this.food()
            if(localStorage.buyCart){
              this.shop_nums = 0;
              this.Totalprice = 0;
              var str =  localStorage.buyCart;
              var arrs = JSON.parse(str);
              this.shop_storage = arrs
               for(var key in arrs){
                    this.Totalprice += arrs[key].num*arrs[key].price
                    this.shop_nums+=arrs[key].num
                  }
            }
            console.log(this.Totalprice)
          },
          //清空购物车
          clears(){
               localStorage.removeItem('buyCart')
               this.shop_storage = '';
               this.shop_nums='';
              this.Totalprice=0;

          },
            food(){
                this.$http.get('https://elm.cangdu.org/shopping/v2/menu',{
                    params: {
                        restaurant_id: this.$route.query.id
                    }
                }).then((data)=>{
                    this.listFood=data.data
                    this.isLoading = false
                })
            },
            // abc(a,b){
            //   console.log(a,b)
            // },
            //记录商品个数
            join(i){
              this.nums = i
            },
            //将商品信息上传到localStorage里
            //在这里计算总价钱
            joins(a){
               var buyCartss={
                 [a.specfoods[0].item_id]:{
                     id:a.specfoods[0].food_id,
                          name:a.name,
                          num:this.nums,
                          price:a.specfoods[0].price,
                          item:a.specfoods[0].item_id
                 }
                         
                }
                var typs = false;
              if(localStorage.buyCart){
                typs = true;
              }
              if(typs){
                var str =  localStorage.buyCart;
                var arrs = JSON.parse(str);
                var itemid = a.specfoods[0].item_id
                if(arrs[a.specfoods[0].item_id] != itemid){
                  console.log('没重复，往里添加')
                  arrs[itemid] = buyCartss[a.specfoods[0].item_id]
                  localStorage.buyCart = JSON.stringify(arrs)
                }else{
                  console.log('重复了')
                  console.log(buyCartss)
                  localStorage.buyCart = JSON.stringify(buyCartss)
                }
                console.log(1111)
              }else{
                console.log(arrs)
               localStorage.buyCart = JSON.stringify(buyCartss)
                var str =  localStorage.buyCart;
                var arrs = JSON.parse(str);
              }
               var nnn = 0
              
               this.shop_nums = 0;
                  for(var key in arrs){
                    nnn += arrs[key].num*arrs[key].price
                    console.log(arrs[key].num)
                    this.shop_nums+=arrs[key].num
                  }
                  this.Totalprice = nnn
                  this.shop_storage = arrs
                   console.log(this.shop_nums)
                
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
    color: #fff;
    font-weight: bold
  }
  .shop_img{
    width: 46px;
    height: 46px;
    background-color: #3190e8;
    border: solid 4px #424244;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    top: -15px;
    text-align: center;
  }
  .shop_img span{
    position:absolute;
    top:-4px;
    right:-4px;
    display: inline-block;
    width:16px;
    /* height:16px; */
    line-height: .5rem;
    border-radius: 50%;
    background:red
  }
.shop_img img{
  width: 30px;
  height: 30px;
  margin-top: 8px;
  position: absolute;
  top: 0;
  left: 4px;
}
  .font{
    margin-left: 80px;
    color: #fff;
  }
  .shop_bottom{
    min-height: 100px;
    font-weight: 400;
    background: #fff;
  }
  .shop_bottom .shop_header{
    padding:10px 14px;
    background-color: #eceff1;
  }
  .shop_bottom .Shop_cart{
    /* margin:10px 14px; */
    font-size: 18px;
    color: #666;
  
  }
  .shop_bottom .Shop_cart span{
    font-size: 14px;
    float:right
  }
  .shop_name{
    font-size: 16px;
    font-weight: bold;
   
        color: #666;
  }
  .shop_name li{
 padding: 10px 10px;
  }
  .com_right div{
    font-size:18px;
    width:100%;
    height:100%;
    line-height: 250%;
    text-align: center
  }
  .com_right div:last-of-type{
    font-size:18px;
    width:100%;
    height:100%;
    line-height: 250%;
    text-align: center;
    background-color: #4cd964;
  }
</style>
