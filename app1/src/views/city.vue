<template>
    <div class="city">
      <hello-world left="<" name="北京" right="切换城市"></hello-world>
      <div style="height: 50px;"></div>
      <div class="search">
        <input type="text" placeholder="输入学校、商务楼、地址">
        <button>提交</button>
      </div>
      <ul class="list">
        <li>
          <h4>小吃一条街</h4>
          <p>北京市丰台区开阳路</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import HelloWorld from "../components/HelloWorld";
    export default {
        name: "city",
        components: {
            HelloWorld
        },

    }
</script>

<style scoped>
.search{
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  margin-top: 10px;
}
  .search>input{
    width: 90%;
    height: 30px;
    outline: none;
    border: solid 1px #
    deded;
    border-radius: 3px;
    padding-left: 10px;
    box-sizing: border-box;
    margin: 0 auto;
    display: block;
  }
  .search>button{
    width: 90%;
    height: 30px;
    border: none;
    background-color: #3190e8;
    color: #fff;
    font-size: 18px;
    margin: 10px auto 0;
    display: block;
    border-radius: 3px;
  }
  .list{
    background-color: #fff;
    margin-top: 5px;
  }
  .list li{
    padding-top: 18px;
    border-bottom: solid 1px  #e4e4e4;
  }
  li h4{
    width: 90%;
    margin: 0 auto 12px;
    font-size: 16px;
    font-weight: 500;
  }
  li p{
    font-size: 12px;
    color: #cccccc;
    width: 90%;
    margin: 0 auto 12px;
  }
</style>
