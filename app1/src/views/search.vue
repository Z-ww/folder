<template>
	<div class="search_box">
		<div style="height: 50px;">
			<headers left="<" leftto="mine" name="搜索"></headers>
		</div>
		<div>
			<input type="text"  placeholder="请输入商家或美食名称"/>
			<button @click="btn()">提交</button>
		</div>
		<bottom></bottom>
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
		border: none;
		border: 1px solid #CCCCCC;
		border-radius:5px ;
		text-indent: 10px;
	}
	div button{
		background: #3190e8;
		width: 50px;
		height: 30px;
		color: #fff;
		border: none;
	}
</style>
<script>
	import headers from "../components/HelloWorld";
 import bottom from "../components/bottom";
	export default{
		components: {
            headers,
            bottom,
        },
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