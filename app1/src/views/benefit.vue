<template>
	<div class="box">
		<headers left="<" leftto="mine" name="会员中心"></headers>
		<div class="no1">
			<p>
			  为账户 <span>{{username}}</span> 购买会员
			</p>
		</div>
		<div class="no2">
			<p>
			   <span>会员特权</span>
			   <span>
			   	<router-link to='vipDescription'> 
			   		会员说明&nbsp;&nbsp;&gt;
			   	</router-link>
			   </span>
			</p>
			<div>
				<img  src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpcVGm/1Kn/1Kn/1Gm/1Gm/6f//1Gm/1ao/1Wq/1Gm/1Gm/1Gm/1Kn/1qx/1Gm/1Gm/2C2/1Gm/1Gm/2O2/1Om/1Sq/1Wq/1Sp/1Gm/1Ko/1er/1Gn/1Gm/1Gn/1Kn/1Kn/1Kn/1Kn/1Kn/1Gn/1Gm/1Gm/1Sp/1Gm/1Gm/1Kn/1Gm/1Gm/0Kn+j4AAAAsdFJOUwCKSJH+1gH4JSD1+6C3Du2ZBKflCSsaKC7BNhSwb8pmeEJWT7zGgzzR2l7fYL3NXQAAA75JREFUeNrFlmtzgjoQQMNDwaC8Kw9B8Vltz///fbfFXOoItUFn7j0fjCNwzO6GZMV/QroPiyQ4zj/85x3+rpIovMVm9Yxj9bFwuGKroaiX4xzLzcGjZd2UflrWhXc1rZuZrmNWFzYA9rHuHlptFkp8brK/HW6zVsk4bO5C8D8qFebklD9y5KczLY5KaD/psaTl0ying47SuNAiq0flTffzgJbE2kZ3F9+tT1qCeJeKP4jMUJmC0LyZk7lWv873qdAi2lqJytPuX1EDQBKqOWoyLY1rBOHVUwOB9T4V4ylPCWC1K0JC7IsnSS2wv8tvQBGJ54mh+hoK2IrxuN2ih+RrCOCJkEppqWQqATjjLVkAhvo+gZmGxq/3vR0ggWQ2TtOAeyeeQPAmdDVmuyWEYH4N+0PeTeaM8y50NQ3O8keT4HQV9Yu90NWUHs5Kaa6DLEWHria9QHMTVFqohIzTWHCMbjTCP6vyjNHsbaQrbjWRBVxWozRbBzbiVpOfAThEIzRbCbG40USNA4QSLH3Nzrn5Wwsy9wjIjdjZsNPVmB4c/W6xGVboAMV3ek8g3zQ1MRzSn+2+sgFZT9s8F7DW1JRrI+1OyyMAhXvzVqZ6GkVUNuooX5uiIz802pWKsp2xCGhx4t7uqKPZh4dPjw4ZWz8Ym1RTM+Mh66meJrcBj1950wwqM9/dFILyrUe+hq2ORjGFiRhgDub/osEbwP5V4+ENa4bpay6txsEe1MjFAMmwZimEhOlLufmEVXsEpy9pElipzwFNYAwwGdBIiFSiX0mx3ZZ6DfkrGh+Cr6ECc0jz6Q4wcHMG5+uOvXklxVtYXPsOQ/TwCHK3Rzbwam4g/Br2UPU1Cb+R9Q/pumsB7zG0ty3Vgk4DcPvJ2RnzAcLav288HOyVOpU24mlMWKsccex1vNrM4XQ90Rx463W8mviyeziGuNfxanL6CaUEO+91vFos5U2HEcM56nW8OlS3K8CVYPU6Xg1qsG9u3wB11/Fqs/fu8hiD/SFGsnVUs9oRHcBuxll2Dkz8u/ofgTDVl0xPNlyWvaa8As7aK3h1ANYr0SOyVIenwy4A4nT4mgSOmcaiqwCvFr/gFoBn+I8lUSOBSfkgb7UEko9Hke0vgHeKxCNmFcD51zX4fgQocvEX5gWgGHwl8op2tkKDqA4ADr3gs9gG5MkXevgnCbAo+xIvXAl9lpbTirrQ8lZix64YxzL0AIrtd9XK6irJxHhmoQOQVNWFVtIvj35oCk/N5EmRkQAEliteY5qZZh6JP/gH4pi+7mLJkZ4AAAAASUVORK5CYII=" />
				<h4>减免配送费</h4>
				<span style="color: #999;">每月减免30单，每日可减免3单，每单最高减4元</span>
				<span style="color: #999;">蜂鸟专送专享</span>
			</div>
			<div>
				<img src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcVKn/1qw/1Or/1Gm/1Gm/1Gm/1Gm/1Or/1Gm/1Ws/3DU/1Gm/161/1Gn/1Gm/1Op/1Kn/1Gn/1Oo/1Gn/1Kn/1Gn/1Sq/1Gn/1Kn/1Gm/1Gn/1Gn/1Sp/1Gm/1Gm/1Gm/1Gm/1Kn/1Kn/1Gm/1Gn/1Gm/1Gn/1Kn/1Gm/xLw9zUAAAApdFJOUwBEDxz9w/T5ItYWA+0IbeUtTZo2tJPMJ9N+pHZVPa7bvOFcY4SNialmEIpfyAAAA5pJREFUeNq9l+mSojAYRdlRZEdRVFBc+7z/C45DUhZtFCJTNfdPbJXjt+UmbfwXRfvcTUI3P1nTGdap8ZDyjz/BFEZwXvoIOXJxY/s7hh0f5bPlrrCiInYdQSp3M13G7PGQ8vPBz9GX4Go9zljvSrUYz1JJ0vySDjHSaiMZy3Pwtuj7uyx6eyveM4rbgU5eM9TeKNuGdEpW9eLlw/raSsZ2HxkjWpi5JIW52SOZJfLdTDJGSfUqkXXaG1KViFGQ9VXIDHLxZwyEVyVPLdIlAVbdRHhwtyZvuis4f9t/A3dhTNcW7o/FBXPC0+vn0EPyWEKYkFLhrWQKEgD+hFhCuMnXc5hNw9gtJPa/Yqw5hKnxrxh7g18bo5is5aOS7G84bmaMYhYhAwpFh8YxAYMKNDE2JMYHJWBrYmZw+IQ5wEwTk8LmE2YDqSamgPKxVFXVr/uqih9LCYUmpgb3sfgQ/ap7KDZyrYkx4Sique6FKAp2BFMTk8FSlKE3ZCcR4hIyTcwemseSw9V4KhdbuoG9JuYEWxGU/2zu2hfZbOGkiTkLt18cwLXlKJWwkUGdNTGxNHvTAW9XB0G988DpOrSCWBOzg6t44fCUI56+wk4TU8FFFjvp+UOnC1SjGOWr0blpPa9tzpHyE4MYNXA1YQ2MWka1/HoYtanqMKgYR8EoI6aOpmpBPo7RkzLw6kZRMbZheGD0pG4/ddv+VtvZcyhtRUoxA9VEVHu2JKwv1ZpUS+vLg4UsdE+qUaoG25fsUQnpgG2P2r0FoehLNnCIjB4+awFewXngSBs9Ck3Ru51wx55CBhUav/QD+dtJmDOo+dsdOIP2JcyWAbWmMh6mzGFtTFbk43RX0DvE0zEmcpDOL4P5XWhbpB1aPqyVG6+mLA/SJ3Cr3Hg1deGZSgFOqtx4tWR7PW+6QxkpN14dLfs7debBVbnxaigGp+4PtGi6uPFqK/Nf6ngH5/T1yPiv/4pFR3B231H2Psytl/67QB7pQxaVAwelp9ESKLUnODgCZfAGvwK8WDOhELhH7z/zAFcjILsB/Pij0bqAf7NGrGHnAZtioG6xByTnxdCwHAD/MtyNWQOw+TiDtQvgpuNDdQBw326JtAFITloTEYcARyX59d0BvMrS9aKLB7AsfkG2DuDngaEve+UDHOtnOl0kzvZb87dzATI7Y2s6yH3KCTIToLZpDnQQpT3fpUYvnYmgWwsQriRkutZmlo6eOH8AyHKn4WUusgUAAAAASUVORK5CYII=" />
				<h4>减免配送费</h4>
				<span  style="color: #999;">每月减免30单，每日可减免3单，每单最高减4元</span>
				<span  style="color: #999;">蜂鸟专送专享</span>
			</div>
		</div>
		<div class="no3">
			<p>开通会员</p>
			<p style="font-size: 18px;">1个月<span class="active">￥20</span><span class="shop">购买</span></p>
			
		</div>
		<div class="no4">
			<router-link to='/userCart'>
				<p>兑换会员<span>使用卡号卡密&nbsp;&nbsp;></span></p>
			</router-link>
			
		</div>
		<div class="no4">
			<router-link to='/invoiceRecord'>
				<p style="color: black;">购买记录<span>开发票&nbsp;&nbsp;></span></p>
			</router-link>
		</div>
		
	</div>
</template>
<script>
	import headers from "../components/HelloWorld";
	export default{
		name:'benefit',
		components: {
            headers
        },
	}
</script>
<style scoped>
	html,body{
		background: #f5f5f5;
	}
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
	.no1{
		height: 40px;
	}
	.no1 p{
		line-height: 40px;
		padding-left: 30px;
		font-size: 16px;
	}
	.no1 p span{
		font-weight: bold;
	}
	.no2{
		width: 375px;
		height: 240px;
		background: #fff;
	}
	.no2 p{
		width: 360px;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		position: relative;
		top: 10px;
		border-bottom: 1px solid #DEDEDE;
	}
	.no2 p span:nth-of-type(1){
		position: absolute;
		font-size: 16px;
		left: 20px;
	}
	.no2 p span:nth-of-type(2){
		position: absolute;
		right: 20px;
		color: #999;
		cursor: pointer;
	}
	.no2 div{
		position: relative;
		width: 360px;
		height: 100px;
		margin: 0 auto;
		border-bottom: 1px solid #DEDEDE;
	}
	.no2 div img{
		position: absolute;
		width: 40px;
		height: 40px;
		left: 18px;
		top: 30px;
	}
	.no2 h4{
		position: absolute;
		left: 62px;
		top: 28px;
		margin-bottom: 10px;
	}
	.no2 div span:nth-of-type(1){
		position: absolute;
		left: 60px;
		top: 45px;
	}
	.no2 div span:nth-of-type(2){
		position: absolute;
		left: 60px;
		top: 65px;
	}
	.no3{
		width: 375px;
		height: 120px;
		background: #FFFFFF;
		margin-top: 16px;
	}
	.no3 p{
		padding-left: 15px;
		font-size: 16px;
		line-height: 60px;
		height: 60px;
		margin: 0 auto;
		width: 350px;
		border-bottom: 1px solid #DEDEDE;
	}
	.active{
		padding-left: 4px;
		color: #f60;
		font-weight: bold;
	}
	.shop{
	   	margin-left: 200px;
	    height: 80px;
	    width: 80px;
	    text-align: center;
	  	border: 1px solid #f60;
	    color: #f60;
	    font-size: 16px;
	    padding: 6px;
	    border-radius: 6px;
	}
	.no4{
		width: 375px;
		height: 40px;
		margin-top: 10px;
		margin-bottom: 20px;
	}
	.no4 p{
		height:50px;
		background: #fff;
		line-height: 50px;
		padding-left: 15px;
		position: relative;
		font-size: 20px;
	}
	.no4 p span{
		position: absolute;
		right: 20px;
		color: #999;
	}
</style>
