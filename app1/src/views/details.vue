<template>
    <div class="details">
        <headers left="<" :name="list.name" leftto="mine"></headers>
        <div style="height: 50px;"></div>
      <div class="o_img">
        <img :src="img_url+list.image_path" alt="">
      </div>
      <p class="one">{{list.description}}</p>
      <div class="grade">
        <h3>{{list.name}}</h3>
        <p>评分 <span>{{list.rating}}</span></p>
        <p><span>月售 {{list.month_sales}}份</span> <span>售价：￥{{list.specfoods[0].price}}起</span></p>
        <p><span>评论数： {{list.rating_count}}</span><span>好评率： {{list.satisfy_rate}}%</span></p>
      </div>
    </div>
</template>
<script>
    import headers from "../components/HelloWorld";
    export default {
        name: "details",
        components: {
            headers
        },
        data(){
          return{
              list: '',
              img_url: '//elm.cangdu.org/img/'
          }
        },
        created() {
            this.list=this.$route.params.list
            console.log(this.$route)
        }
    }
</script>

<style scoped>
.details{
  width: 100%;
}
  .o_img{
    width: 100%;
    height: 375px;
  }
.o_img img{
  width: 100%;
  height: 100%;
}
  .one{
    padding: 0 10px;
    margin-top: 10px;
    color: #8d8d8d;
  }
  .grade{
    padding: 10px;
    line-height: 25px;
  }
  .grade h3{
    font-size: 18px;
    font-weight: 500;
  }
</style>
