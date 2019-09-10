<template>
    <div class="city">
      <hello-world left="<" leftto="home" :name="list_city.name" right="切换城市" rightto="home"></hello-world>
      <div style="height: 50px;"></div>
      <div class="search">
        <input type="text" placeholder="输入学校、商务楼、地址" v-model="site">
        <button @click="btn()">提交</button>
      </div>
      <ul class="list">
        <router-link :to="{name:'foodList',query:{geohash:i.geohash}}"  :key='index' v-for="(i,index) in list_site">

          <li @click="btn2(index)">
            <h4>{{i.name}}</h4>
            <p>{{i.address}}</p>
          </li>
        </router-link>
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
        data(){
            return{
                list_city: '',//根据id获取到城市信息
                site: '',//搜索地址
                list_site: [],//搜索到的信息
            }
        },
        methods: {
            city(){
                this.$http.get('https://elm.cangdu.org/v1/cities/'+this.$route.query.id,{
                    params: {

                    }
                }).then((data)=>{
                    this.list_city=data.data
                })
            },
            btn(){
                this.$http.get('https://elm.cangdu.org/v1/pois',{
                    params: {
                        city_id: this.$route.query.id,
                        keyword: this.site,
                    }
                }).then((data)=>{
                    this.list_site=data.data
                    console.log(data)
                })
            },
            btn2(a){
                this.$store.commit('setlatitude',this.list_site[a].latitude)
                this.$store.commit('setlongitude',this.list_site[a].longitude)
            }
        },
        created() {
            this.city()
        }
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
    border: solid 1px #ededed;
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
