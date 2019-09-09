<template>
	<div class="box">
		<div style="height: 50px;">
			 <headers name="兑换会员" left="<" leftto="home"></headers>
		</div>
		<div class="con">
			<p>成功兑换后将关联到当前帐号：777777 </p>
			<input type="text" placeholder="请输入10位卡号" />
			<input type="text" placeholder="请输入6位卡密" />
			<button>兑换</button>
		</div>
		<div class="list">
			<p>——温馨提示——</p>
			<p>新兑换的会员服务，权益以「会员说明」为准。</p>
			<p>月卡：减免配送费。</p>
			<p>季卡：减免配送费。</p>
			<p>年卡：减免配送费</p>
			<p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
		</div>
	</div>
</template>
<style scoped>
	.box{
		width: 375px;
	}
	.header{
		height: 40px;
		background: #3190e8;
	}
	.header span:nth-of-type(1){
		font-size: 16px;
		line-height: 40px;
		padding-left: 20px;
		color: #FFF;
		font-weight: bold;
	}
	.header span:nth-of-type(2){
		font-size: 18px;
		line-height: 40px;
		font-weight: bold;
		padding-left: 120px;
		color: #fff;
	}
	.con p{
		padding: 10px;
	}
	.con input{
		height: 50px;
		outline: none;
		width: 100%;
		background: #fff;
		border: none;
		border-bottom: 1px solid #DEDEDE;
	}
	button{
		background: #ccc;
		width: 330px;
		margin:20px;
		height: 40px;
		border: none;
		outline: none;
		color: #fff;
		font-weight: bold;
	}
	.list p:nth-of-type(1){
		padding-left: 120px;
	}
	.list p{
		padding-left: 40px;
		color: #999;
	}
</style>
<script>
	  import headers from "../components/HelloWorld";
	export default{
		name:'userCart', 
		components: {
            headers
        },
	}
</script>