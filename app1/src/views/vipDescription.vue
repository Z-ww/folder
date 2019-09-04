<template>
	<div class="box">
		<div style="min-height: 50px;">
			<headers left="<" leftto="mine" name="会员说明"></headers>
		</div>
		<div class="con">
			<p>
				尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
		              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
		              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
			</p>
			<h3>
				Q1: 特权介绍
			</h3>
			<ul>
				<li>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</li>
				<li>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</li>
				<li>更多特权，敬请期待！</li>
			</ul>
			<h3>Q2: 资费介绍</h3>
			<ul>
				<li>饿了么会员卡：20元</li>
			</ul>
			<h3>Q3: 使用说明</h3>
			<ul>
				<li>当用户满足以下任一条件，会员服务自动失效：：20元</li>
				<li style="padding-left: 80px;padding-top: 20px;">自绑定之日起超过31天；</li>
				<li style="padding-left: 80px;">在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
			</ul>
			<h3>Q4: 购卡说明</h3>
			<ul>
				<li>在线购买：饿了么App>我的>饿了么会员卡</li>
			</ul>
			<h3>Q5: 温馨提示</h3>
			<ul>
				<li>用户在当前会员服务失效前，无法购买新卡。饿了么会员卡</li>
				<li>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	
	.box{
		width: 375px;
		background: #fff;
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
		width: 230px;
		margin: 0 auto;
		padding-top: 20px;
		font-size: 14px;
	}
	.con h3{
		padding-left: 15px;
		padding-top: 10px;	
	}
	.con ul li{
		list-style: none;
		padding-left: 15px;
		padding-top: 5px;
	}
</style>
<script>
	import headers from "../components/HelloWorld";
	export default{
		components: {
            headers
        },
	}
</script>