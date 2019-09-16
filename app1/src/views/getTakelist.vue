<template>
	<div style="position: relative;">
		<hello-world left="<" name="新增地址" leftto='userinfo'></hello-world>
		 <div style="height: 60px;"></div>
		 
		 <div v-for="i,index in dizhi" style="width:100%;position: relative;padding:10px;box-sizing:border-box;font-size: 14px;color:#333;border-bottom: 1px solid #d9d9d9;background-color: #fff;">
		 	{{i.address}}<br>
		 	{{i.phone}}
		 	<span @click="shanchu(index)" style="position:absolute;right: 10px;" v-if="cha">X</span>
		 </div>
		 <router-link to='userinfo' style='margin-top:20px;width: 100%;display:block;padding:10px;box-sizing:border-box;line-height: 40px;font-size: 16px;background:#fff;color:#000000;'>新增地址     ></router-link>
		 <div @click="cha=!cha" style="color: #fff;position: absolute;right: 10px;top:0px;font-size: 16px;line-height:50px;">{{cha?'完成':'编辑'}}</div>
	</div>
</template>

<script>
	import HelloWorld from "../components/HelloWorld";
	export default{
		name:'getTakelist',
		components: {
            HelloWorld
        },
		data(){
			return{
				detail:'',
				dizhi:'',
				cha:false
			}
		},
		created(){
			this.axios.get('https://elm.cangdu.org/v1/users/38828/addresses').then((data)=>{
				console.log(data)
				this.dizhi=data.data
				})
		},methods:{
			shanchu(index){
				this.axios.delete('https://elm.cangdu.org/v1/users/38828/addresses/'+this.dizhi[index].id).then((data)=>{
				console.log(data)
				})
				this.dizhi.splice(index,1)
				
			}
		}
		}
</script>

<style>
</style>