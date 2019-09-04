<template>
	<div class="box">
		<div class="header">
			<router-link to='/fuwu'><span><</span></router-link>
			<span>{{dat.phototutorialCaption}}</span>
		</div>
		<div class="body">
			<p>{{dat.phototutorialContent}}</p>
		</div>
	</div>
</template>
<style scoped>
	.box{
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
	.body p{
		font-size: 14px;
		padding: 15px;
	}
</style>
<script>
	export default{
		name:'xg',
		data(){
			return{
				dat:[]
			}
		},
		created(){
			this.btn()
		},
		methods:{
			btn(){
				this.$http.get('https://elm.cangdu.org/v3/profile/explain',{
					param:{
						
					}
				}).then((data)=>{
					this.dat=data.data
				})
			}
			
		}
	}
</script>{\rtf1}