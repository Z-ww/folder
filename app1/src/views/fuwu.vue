<template>
	<div class="fuwu_box">
		<div style="height: 60px; overflow: hidden;">、
			<headers left="<" leftto="mine" name="服务中心" style='z-index: 2;'></headers>
		</div>
		<div style="z-index: 1;position: relative;">
			<div class="z_box">
			<div>
				<i class="icon iconfont icon-kefu" style="font-size: 22px;color: palevioletred;"></i>
				在线客服
			</div>
			<div>
				<i class="icon iconfont icon-dianhua" style="font-size: 22px;color: green;"></i>
				在线客服
			</div>
		</div>
		<div>
			<ul>
				<router-link to='/problem'><li>{{dat.activityCaption}}<span>></span></li></router-link>
				<router-link to='/problem2'><li>{{dat.balanceCaption}}<span>></span></li></router-link>
				<router-link to='/cooperation'><li>{{dat.businessCaption}}<span>></span></li></router-link>
				<router-link to='/voucher'><li>{{dat.couponCaption}}<span>></span></li></router-link>
				<router-link to='/responsible'><li>{{dat.disclaimerCaption}}<span>></span></li></router-link>
				<router-link to='/discounts'><li>{{dat.discountCaption}}<span>></span></li></router-link>
				<router-link to='/retroactive'><li>{{dat.forgotCaption}}<span>></span></li></router-link>
				<router-link to='/rules'><li>{{dat.freshmanCaption}}<span>></span></li></router-link>
				<router-link to='/hongbao'><li>{{dat.hongbaoCaption}}<span>></span></li></router-link>
				<router-link to='/vip'><li>{{dat.memberCaption}}<span>></span></li></router-link>
				<router-link to='/vipshuoming'><li>{{dat.memberFullCutCaption}}<span>></span></li></router-link>
				<router-link to='/qita'><li>{{dat.otherCaption}}<span>></span></li></router-link>
				<router-link to='/zhifu'><li>{{dat.paymentCaption}}<span>></span></li></router-link>
				<router-link to='/xg'><li>{{dat.phototutorialCaption}}<span>></span></li></router-link>
				<router-link to='/point'><li>{{dat.pointtextCaption}}<span>></span></li></router-link>
				<router-link to='/user'><li>{{dat.rankCaption}}<span>></span></li></router-link>
				<router-link to='/svip'><li>{{dat.supervipCaption}}<span>></span></li></router-link>
				
			</ul>
		</div>	
		</div>
	</div>
	
</template>
<script>
	import headers from "../components/HelloWorld";
 
	export default{
		components: {
            headers
        },
		name:'fuwu',
		data(){
			return{
				dat:[]
			}
		},
		created(){
			this.btn()
			console.log(this.dat)
		},
		methods:{
			btn(){
				this.$http.get('https://elm.cangdu.org/v3/profile/explain',{
					param:{
						
					}
				}).then((data)=>{
					this.dat=data.data
					console.log(data)
					
				})
			}
			
		}
	}
	
</script>
<style scoped>
	.fuwu_box{
		width: 375px;
		background: white;
	}
	.z_box{
		width: 375px;
		min-height: 80px;
		position: relative;
		font-size: 22px;
	}
	.z_box div{
		width: 50%;
		float: left;
		text-align: center;
		line-height: 80px;
		box-sizing: border-box;
		border-bottom: 1px solid #CCCCCC;
	}
	.z_box div:first-of-type{
		border-right: 1px solid #CCCCCC;
	}
	ul{
		margin-top: 20px;
	}
	ul li{
		padding-left: 10px;
		height: 50px;
		font-size: 16px;
		list-style: none;
		position: relative;
		line-height: 50px;
		color: #2C3E50;
		border-bottom: 1px solid #DEDEDE;
	}
	
	ul li span{
		position: absolute;
		right: 10px;
	}
</style>