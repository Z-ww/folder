<template>
	<div class="link">
		 <hello-world left="<" leftto='getTakelist' name="新增地点"></hello-world>
		 <div style="height: 50px;"></div>
		<input class="input" @change="b4()" type="text" placeholder="收货人姓名" v-model="nam1" style="margin-top: 20px;"/><br />
		
		<div>
			<router-link to="addTake1">
				<input class="input" type="text" placeholder="地址详情" v-model="detail" /><br />
			</router-link>
			
		</div>
		<input class="input" @change="b1()" type="text" placeholder="电话号码" v-model="phone"/><br />
		<input class="input" @change="b2()" type="text" placeholder="性别" v-model="sex"/><br />
		<input class="input" @change="b3()" type="text" placeholder="备注电话" v-model="phone_bk"/><p v-if="tru">有错误剁你小弟弟</p><br />
		<router-link to="getTakelist" @click="tijiao()" style="width:100%;display:block;margin:0 auto;color: #fff;background:greenyellow;width: 80%;height: 35px;border-style:none; line-height: 35px;">新增地址</router-link>
	</div>
</template>

<script>
	import HelloWorld from "../components/HelloWorld";
	export default{
		name:'addTake',
		components: {
            HelloWorld
        },
		data(){
			return{
				detail:'',
				nam1:'',
				phone:'',
				sex:'',
				phone_bk:'',
				tag_type:'',
				tru:false,
				tr:true
			}
		},
		created(){
			this.detail=this.$route.params.dizhi
		},
		methods:{
			tijiao(){
				if (this.sex=='男') {
				this.sex=1
			} else{
				this.sex=2
			}
				this.axios.post('https://elm.cangdu.org/v1/users/38828/addresses',{
				user_id:38828,
				address:'北京',
				address_detail:this.detail,//1
				geohash:'116.407173',
				name:this.nam1,//1
				phone:this.phone,//1
				tag:'沙雕',
				sex:this.sex,//1
				poi_type:0,
				phone_bk:this.phone_bk,//1
				tag_type:3 //1
			},{
                   emulateJSON: true
                }).then((data)=>{
				console.log(data)
			})
			},
			b4(){
				if(!/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(this.nam1)) {
				 　　this.tru=true;
				 　　} else{
				 　　this.tru=false; 
				　　}
			},
			b1(){
				console.log(this.phone)
				 　　if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)) {
				 　　this.tru=true;
				 　　} else{
				 　　this.tru=false; 
				　　}
			},
			b2(){
			},
			b3(){
				if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone_bk)) {
				 　　this.tru=true;
				 　　} else{
				 　　this.tru=false; 
				　　}
			},
			
		}
		}
	
	
</script>

<style scoped>
	.input{
		    width: 80%;
    		height: 35px;
    		display: inline-block;
    		margin: 0 auto;
    		border: 1px solid #E7E1CD;
    		background-color:#CCCCCC;
    		color:#FF0000;
    		text-indent: 10px;
	}
	.link{
		line-height:40px;
		text-align: center;
	}
</style>