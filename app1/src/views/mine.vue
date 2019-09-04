<template>
	<div class="mine">
		<!--            头部登录注册-->
		<router-link to="/login">
			<div class="mylogin clearf">
				<div class="left">
					<img src="../assets/default.jpg" alt="">
				</div>
				<div class="right clearf">
					<div v-if="this.$store.state.user.userName" class="l">
						<router-link to="/userinfo">
							<h2 style="color: white;">{{this.$store.state.user.userName}}</h2>
							<p>暂无绑定手机号</p>
						</router-link>
					</div>
					<div class="l" v-else>
						<h2>登录/注册</h2>
						<p>暂无绑定手机号</p>
					</div>
					<div class="r">></div>
				</div>
			</div>
		</router-link>
		<!--    余额积分-->
		<div class="money clearf">
			<div class="balance">
				<router-link to='/balance'>
				<div>
					<span style="color: orange;font-weight: bold;font-size: 24px;">0.00 </span>元
				</div>
					<p style="color: black;">我的余额</p>
				</router-link>
			</div>
			<div class="balance">
				<router-link to='/'>
					<div>
					<span style="color: red;font-weight: bold;font-size: 24px;">0 </span>个
				</div>
				<p style="color: black;">我的优惠</p>
				</router-link>
			</div>
			<div class="balance">
				<router-link to='/integral'>
					<div>
					<span style="color: green;font-weight: bold;font-size: 24px;">0.00 </span>分
				</div>

				<p style="color: black;">我的积分</p>
				</router-link>
			</div>

		</div>
		<div id="list">
			<li>
				<i class="icon iconfont icon-dingdan"></i>
				<i class="iconfont icon-icon-order"></i>我的订单<span>&gt;</span></li>
			<router-link to='/jife'>
				<li>
					<i class="icon iconfont icon-gouwu" style="color: red;font-size: 22px;"></i> 积分商城
					<span>&gt;</span>
				</li>
			</router-link>

			<li>
				<i class="icon iconfont icon-wangguan" style="color: yellow;font-size: 22px;"></i> 饿了么会员卡
				<span>&gt;</span></li>
			<router-link to='/fuwu'>	
				<li>
					<p style="width: 20px;height: 20px; background: deepskyblue;float: left;margin: 5px;margin-top:14px;"></p>
					服务中心<span>&gt;</span></li>
			</router-link>
			<router-link to='/load'>
				<li>
					<i class="icon iconfont icon-changyonglogo40" style="font-size: 22px; color: deepskyblue;"></i> 下载饿了么App
					<span>&gt;</span></li>
			</router-link>
		</div>
	</div>

</template>

<script>
	export default {
		name: "mine",
		created() {
			console.log(this.$store)
		}
	}
</script>
<style scoped>
	.mine {
		width: 375px;
	}
	
	.mylogin {
		padding: 16px 13px;
		background-color: #3190e8;
		color: #fff;
	}
	
	.mylogin .left {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		overflow: hidden;
		float: left;
		background-color: #ccc;
		margin-right: 10px;
	}
	
	.mylogin .left img {
		width: 100%;
		height: 100%;
	}
	
	.mylogin .right {
		width: 277px;
		float: left;
	}
	
	.l {
		float: left;
	}
	
	.l h2 {
		font-size: 20px;
		margin-top: 12px;
	}
	
	.right .r {
		font-size: 20px;
		line-height: 60px;
		float: right;
	}
	
	.money {
		width: 100%;
		background-color: #fff !important;
		margin-bottom: 10px;
	}
	
	.balance {
		width: 33%;
		padding-top: 22px;
		float: left;
		border-right: solid 1.5px #f8f8f8;
		text-align: center;
	}
	
	.balance>div span {
		font-size: 23px;
		color: #ff9900;
	}
	
	.balance p {
		font-size: 15px;
		line-height: 44px;
	}
	
	.balance:last-child {
		border-right: none;
	}
	
	#list {
		margin-top: 10px;
		float: left;
		width: 375px;
		height: auto;
	}
	
	#list li {
		list-style: none;
		font-size: 16px;
		height: 50px;
		color: #000;
		padding-left: 30px;
		position: relative;
		line-height: 50px;
		background: white;
		border-bottom: 1px solid #CCCCCC;
	}
	
	#list li span {
		position: absolute;
		left: 350px;
	}
</style>