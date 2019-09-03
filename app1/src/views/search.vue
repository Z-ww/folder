<template>
	<div class="search_box">
		<div class="header">
			<span><</span>
			<span>搜索</span>
		</div>
		<div>
			<input type="text"  placeholder="请输入商家或美食名称"/>
			<button @click="btn()">提交</button>
		</div>
	</div>
</template>
<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	html.body{
		background: #fff;
	}
	.search_box{
		width: 370px;
	}
	.header{
		height: 40px;
		background: #3190e8;
	}
	.header span:nth-of-type(1){
		font-size: 16px;
		line-height: 40px;
		padding-left: 10px;
		color: #FFF;
	}
	.header span:nth-of-type(2){
		font-size: 16px;
		line-height: 40px;
		padding-left: 140px;
		color: #fff;
	}
	div input{
		width: 280px;
		height: 25px;
		background: #f2f2f2;
		margin: 10px;
		outline: none;
		border-radius:5px ;
	}
	div button{
		background: #3190e8;
		width: 50px;
		height: 30px;
		color: #fff;
	}
</style>
<script>
	export default{
		name:"search",
		data(){
			return{
				dat:[]
			}
		},
		methods:{
			btn(){
				this.$http.get('https://elm.cangdu.org/v4/restaurants')
				.then((data=>{
				var dat=data.data
				console.log(dat)
			}))
		}
	}
}
</script>