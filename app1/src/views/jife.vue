<template>
	<div class="box">
		<headers left="<" leftto="mine" name="积分商城"></headers>
		<router-link to='/mine'><h3>请重新进入</h3></router-link>
		<p>请返回后重新进入积分商城~</p>
		<img src="//yun.duiba.com.cn/webapp/img/retrylogin.png" />
	</div>
</template>
<style scoped>
	.box{
		width: 375px;
		position: relative;
	}
	.box h3{
		position: absolute;
		top: 170px;
		left: 120px;
		font-size: 26px;
	    color: #0d7fd5;
	    margin-bottom: 15px;
	}
	.box p{
		position: absolute;
	    font-size: 16px;
	    color: #666;
	   	left: 90px;
	   	top: 214px;
	}
	.box img{
		width: 176px;
    	height: 176px;
    	position: absolute;
    	top: 260px;
    	left: 90px;
	}
</style>
<script>
	import headers from "../components/HelloWorld";
	export default{
		name:'jife',
		components: {
            headers
        },
	}
</script>