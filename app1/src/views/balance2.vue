<template>
	<div class="shuoming">
		<div class="header">
			<router-link to='/balance'><span><</span></router-link>
			<span>余额说明</span>
		</div>
		<div>
			<p>Q1:使用余额的条件</p>
			<ul>
				<li>在线支付的订单将获得订单积分奖励：</li>
				<li>积分将在用户完成评价后获得。</li>
				<li>可获得积分=订单金额×10（即1元=10点积分）。</li>
				<li>订单金额指实际付款金额，不包含活动优惠金额。</li>
				<li>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</li>
			</ul>
			<p>Q2:积分用来做什么?</p>
			<ul>
				<li>可以在积分商城兑换各种礼品。</li>
			</ul>	
			<p>Q3: 礼品兑换很多天了还没有收到，该怎么办？</p>
			<ul>
				<li>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</li>
			</ul>
			<p>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</p>
			<ul>
				<li>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</li>
			</ul>
		</div>
	</div>
	
</template>
<style>
	.header{
		width: 375px;		
		height: 50px;
		background: #3190e8;
	}
	.header span{
		font-size: 18px;
		color: #FFFFFF;
		line-height: 50px;
	}
	.header span:nth-of-type(1){
		padding-left: 10px;
	}
	.header span:nth-of-type(2){
		padding-left: 140px;
	}
	div p{
		font-size: 14px;
		padding-top: 15px;
		padding-left: 20px;
	}
	div ul{
		margin-top: 8px;
	}
	div ul li{
		height: 21px;
		padding-left: 28px;
	}
</style>