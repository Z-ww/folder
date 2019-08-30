<template>
<div class="shop">
  <header></header>
  <nav class="clearf">
    <div><p>商品</p></div>
    <div><p>评价</p></div>
  </nav>
  <div class="shopping">
    <div class="left">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "shop",
        created() {
            this.$http.get('https://elm.cangdu.org/shopping/v2/menu',{
                params: {
                    restaurant_id: 1
                }
            }).then((data)=>{
                console.log(data)
            })

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
  border-bottom: solid 3px #0169be;
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

  }
</style>
