<template>
	<div>
		<hello-world left="<" leftto="addTake" name="搜索地址"></hello-world>
		 <div style="height: 50px;"></div>
		 <div style="padding: 10px;">
		 	<input type="text" v-model="sex" style="width: 80%;height: 30px; border-style: none;"/>
		 <button @click="tijiao()" style="width: 10%;height: 30px;border-style: none;">提交</button>
		 </div>
		 <div style="height: 20px;width: 100%;text-align: center;background-color: #DF5000;color: #fff;">
		 	为了满足商家的送餐要求，建议您从列表中选择地址
		 </div>
		 <div v-if='chu' v-for="i in arr" style="padding-top:10px;height: 60px;line-height: 20px;border-bottom: 1px solid;">
		 	
		 	<router-link :to='{name:"addTake",params:{dizhi:i.name}}'>{{i.name}}<br/>{{i.address}}</router-link>
		 </div>
		 <div v-if="!chu" style="width: 100%;text-align: center;margin:180px auto;font-size: 20px;">
		 	<p>找不到地址？</p>
		 	<p>请尝试输入小区、写字楼或学校名</p>
		 	<p>详细地址（如门牌号）可稍后输入哦。</p>
		 </div>
		 
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
				sex:'',
				arr:'',
				chu:false
			}
		},
		created(){
			
		},methods:{
			tijiao(){
				this.chu=true
				this.axios.get('https://elm.cangdu.org/v1/pois?city_id=3&keyword='+this.sex).then((data)=>{
				console.log(data)
				this.arr=data.data
			})
			}
			
		}
		}
	
	
	
	
</script>

<style>
</style>