<template>
	<div>
		<headers left="<" leftto="mine" name="在线支付"></headers>
		<div class="tops">
			<p style="margin-top: 30px;margin-bottom: 10px;">支付剩余时间</p>
			<p style="font-weight: bold;font-size: 22px;">{{hours}}:{{min<10?'0'+min:min}}:{{s<10?'0'+s:s}}</p>
		</div>
		<p style="line-height: 40px;text-indent: 10px; font-size:18px; color: #999;">选择支付方式</p>
		<div class="box">
			<i class="icon iconfont icon-zhifubao" style="color: dodgerblue;"></i>
			<span>支付宝</span>
			<i class="icon iconfont icon-xuanzhong r" @click="type=true" :class="type?'bg':''"></i>
		</div>
		<div class="box">
			<i class="icon iconfont icon-weixin" style="color: limegreen;"></i>
			<span>微信</span>
			<i class="icon iconfont icon-xuanzhong r" @click="type=false" :class="type?'':'bg'"></i>
		</div>
		<button class="btn">确认支付</button>
	</div>
</template>

<script>
	import headers from "../components/HelloWorld";
 
	export default{
		components: {
            headers
        },
        created(){
        	this.time()
        },
        data(){
        	return{
        		hours:'00',
				min: 14,
				s: 59,
				type:true,
        	}
        },
        methods:{
        		time() {
					setInterval(()=>{
							if(this.s == 0) {
								this.min--
									this.s = 59
							}else{
								this.s--
							}
						
					}, 2000)
				}
        }
       }
</script>

<style scoped="">
	.tops{
		padding-top: 50px;
		min-height: 120px;
		background: white;
		text-align: center;
	}
	.box{
		height: 100px;
		background: white;
		padding:0 10px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		line-height: 100px;
	}
	.box>span{
		line-height: 100px;
		color: black;
		position: relative;
		top: -8px;
		left: 3px;
		font-size: 18px;
	}
	.box>i{
		font-size: 50px;
	}
	.box>i.r{
		float: right;
		font-size: 26px;
	}
	.box>i.bg{
		color: green;
	}
	.btn{
		width: 90%;
		height:40px;
		display: block;
		margin:20px auto;
		color: white;
		background:green;
		border-radius: 6px;
		border: none;
		font-weight: bold;
	}
</style>