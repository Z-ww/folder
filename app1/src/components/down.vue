<template>
	<div>
		<div class="down clearfix">
			<div class="sort">
				<div class="sort_container" @click="is==0?is=-1:is=0" :style="{'color':is==0?'blue':''}"><span>准时达</span></div>
				<transition>
					<div class="sort_detail_type clearfix" v-show="is==0">
						<div class="category_left">
							<div class="category_box" v-for="(i,index) in category" @click="btn(index)" :style="{'background':xb==index?'#fff':''}">
								<div class="category_text">
									<div class="img_box"><img :src='url+i.image_url+png'></div>
									<span>{{i.name}}</span>
								</div>
								<div class="category_jump">
									<div class="category_minbox">
										<span>{{i.count}}</span>
										<i>></i>
									</div>
								</div>
							</div>
						</div>
						<div class="category_right">
							<p v-for="(i,inedx) in categoryl.slice(1,categoryl.length)" @click="emit(i.id)">{{i.name}}<span>{{i.count}}</span></p>
						</div>
					</div>
				</transition>
			</div>
			<div class="sort">
				<div class="sort_container" @click="is==1?is=-1:is=1" :style="{'color':is==1?'blue':''}"><span>排序</span></div>
				<transition>
					<div class="sort_detail_type" v-show="is==1">
						<ul class="sort_list_container">
							<li class="sort_list_li" v-for="o,i in str[0]">
								<span :class="['iconfont',arr[i]]" :style="{'color':color()}"></span>
								<p :data="str[1][i]" @click="datas(str[1][i])">{{o}}</p>
							</li>
						</ul>
					</div>
				</transition>
			</div>
			<div class="sort">
				<div class="sort_container" @click="is==2?is=-1:is=2" :style="{'color':is==2?'blue':''}"><span>筛选</span></div>
				<!-- 筛选 -->
				<transition>
					<div class="sort_detail_type" v-show="is==2">
						<p class="psfs">配送方式</p>
						<ul class="filter_ul">
							<li class="filter_li" @click="types(0)"><span :class="['iconfont',type[0]?'icon-duigou':'icon-birdxiaoniao']"></span><p :style="{'color':type[0]?'blue':''}">蜂鸟专送</p></li>
						</ul>
						<p class="psfs">商家属性（可以多选）</p>
						<ul class="filter_ul" style="padding-bottom: 20px;">
							<li class="filter_li" v-for="i,index in data" @click="types(index+1)">
								<span class="filter_icon iconfont">{{type[index+1]?'&#xe63e;':i.icon_name}}</span>
								<p :style="{'color':type[index+1]?'blue':''}">{{i.name}}</p>
							</li>
						</ul>
						<!-- 底部 -->
						<div class="confirm_filter clearfix">
							<div>清空</div>
							<div @click = "gb">{{!num?'确定':'确定'+'('+num+')'}}</div>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
export default {
		data() {
			return {
				data:'',
				is:-1,
				category:'',
				url:'https://fuss10.elemecdn.com/',
				png:'.png',
				categoryl:'',
				xb:-1,
				str:[['智能排序','距离最近','销量最高','起送价最低','配送速度最快','评分最高'],[0,5,6,1,2,3]],
				arr:['icon-paixu','icon-location','icon-lunkuodasan-','icon-qian','icon-iconfront-','icon-xingxing'],
				type:[0,0,0,0,0,0,0],
			}
		},
		props:{
			latitude:{
				type:String
			},
			longitude:{
				type:String
			}
		},
		created(){
			fetch('https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes ').then(response=>response.json()).then(res=>{
			    this.data = res
				// console.log(this.data)
			})
			fetch('http://elm.cangdu.org/shopping/v2/restaurant/category?latitude='+this.latitude+'&longitude='+this.longitude+'').then(response=>response.json()).then(res=>{
				this.category =res
				// console.log(this.category)
			})
		},
		computed: {
			num(){
				var str = 0
				for(var i = 0;i<this.type.length;i++){
					str+=this.type[i]
				}
				return str
			}
		},
		methods:{
			btn(index){
				this.xb = index;
				this.categoryl=this.category[index].sub_categories;
				// console.log(this.categoryl)
			},
			emit(o){
				this.$emit('id',o)
				this.is = -1
			},
			datas(o){
				this.$emit('data',o)
				this.is = -1
			},
			color(){
				return `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`
			},
			gb(){
				this.is = -1
			},
			types(is){
				if(this.type[is]){
					this.$set(this.type,is,0)
				}else{
					this.$set(this.type,is,1)
				}
				console.log(is)
			}
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	 .clearfix {
	  zoom: 1;
	}
	.clearfix::after,.clearfix::before {
	  content: "";
	  display: block;
	  width: 0;
	  height: 0;
	  visibility: hidden;
	  clear: both;
	}
	.down{
		width: 100%;
		border-bottom: 2px solid #f1f1f1;
		position: relative;
		background: #fff;
	}
	.sort{
		width: 33.3%;
		float: left;
	}
	.sort_container{
		width:100%;
		height: 50px;
	}
	.sort_container span{
		display: block;
		text-align:center;
		line-height: 50px;
		font-size: 14px;
		border-right: 1px solid #f1f1f1;
	}
	.down>div:nth-of-type(3)>div:nth-of-type(1)>span{
		border: none;
	}
	.sort_detail_type{
		width: 100%;
		position: absolute;
		left: 0;
		z-index: -1;
		transform: translateY(0px)
	
	}
	/* 筛选 */
	.psfs{
		font-size: 16px;
		color: #333;
		line-height: 40px;
		text-align: left;
		padding-left: 30px;
		background-color: #fff;
		}
	.filter_ul{
		display: flex;
		flex-wrap: wrap;
		padding-left: 26px;	
		}
	.filter_li{
		display: flex;
		width: 25%;
		border: 1px solid #eee;
		border-radius: 10px;
		padding: 6px;	
		margin-right:10px;
		margin-bottom:10px;
		}
	.filter_li span{
		width:10px;
		height: 10px;
		line-height: 10px;
		padding: 10px;
		border-radius: 10px;
		font-size: 12px;
		margin-right: 4px;
		margin-top: 4px;
		}
	.filter_li p{
		font-size: 10px;
		line-height: 40px;
		height: 40px;
		box-sizing: border-box;
		width: 80%;
		}
	.filter_ul .filter_li:nth-of-type(1) span{
		color: rgb(63, 189, 230);
		border-color: rgb(63, 189, 230);
	}
	.filter_ul .filter_li:nth-of-type(2) span{
		color: rgb(153, 153, 153);
		border-color: rgb(153, 153, 153);
	}
	.filter_ul .filter_li:nth-of-type(3) span{
		color: rgb(87, 169, 255);
		border-color: rgb(87, 169, 255);
	}
	.filter_ul .filter_li:nth-of-type(4) span{
		color: rgb(232, 132, 45);
		border-color: rgb(232, 132, 45);
	}
	.filter_ul .filter_li:nth-of-type(5) span{
		color: rgb(232, 132, 45);
		border-color: rgb(232, 132, 45);
	}
	.filter_ul .filter_li:nth-of-type(6) span{
		color: rgb(153, 153, 153);
		border-color: rgb(153, 153, 153);
	}
	.filter_icon{
		border: 1px solid #CCCCCC;
	}
	.confirm_filter{
		padding: 10px;
		background: #f1f1f1;
	}
	.confirm_filter div{
		width:48%;
		background: #FFFFFF;
		color: #000000;
		float: left;
		font-size: 18px;
		text-align: center;
		line-height: 50px;
		border-radius:10px ;
	}
	.confirm_filter div:nth-of-type(1){
		margin-right:4%;
	}
	.confirm_filter div:nth-of-type(2){
		background: #56d176;
		color: #FFFFFF;
	}
	
	/* 排序 */
	.sort_list_container{
		width: 100%;
	}
	.sort_list_li{
		display: flex;
		font-size: 16px;
	}
	.sort_list_li span{
		width: 30px;
		height: 30px;
		margin: 16px 0 0 20px;
	}
	.sort_list_li p{
		line-height: 40px;
		flex: auto;
		text-align: left;
		text-indent: 25px;
		border-bottom: 1px solid #e4e4e4;
		display: flex;
		align-items: center;
		color: #666;
	}
	/* 分类 */
	.category_left{
		width: 50%;
		background: #f1f1f1;
		float: left;
	}
	.category_box{
		width: 100%;
		height: 50px;
		font-size: 12px;
		color: #666;
		box-sizing: border-box;
	}
	.category_text{
		width: 60%;
		height: 100%;
		line-height: 50px;
		float: left;
	}
	.img_box{
		float: left;
		width: 30px;
		height: 70px;
		padding-top: 10px;
		box-sizing: border-box;
		margin-right: 10px;
	}
	.img_box img{
		width: 100%;
		height: 30px;
	}
	.category_left>div:nth-of-type(1)>div>div{
		display: none;
	}
	.category_jump{
		width: 30%;
		float: right;
	}
	.category_minbox{
		padding-top: 10px;
		height: 100%;
		box-sizing: border-box;
		float: left;
	}
	.category_jump span{
		display: inline-block;
		width: 40px;
		text-align: center;
		height: 20px;
		font-size: 12px;
		border-radius: 10px;
		background: #CCCCCC;
		line-height: 20px;
		color: #FFFFFF;
		margin-right: 10px;
	}
	.category_jump i{
		color: #e0e0f1;
	}
	/* 右盒子 */
	.category_right{
		width: 44%;
		height: auto;
		float: left;
		padding-left: 20px;
		overflow-y:scroll;
	}
	.category_right p{
		width: 100%;
		font-size: 16px;
		line-height: 50px;
		border-bottom: 1px solid #ccc;
		color: #666;
	}
	.category_right span{
		float: right;
		padding-right: 20px;
	}
	.v-enter{
		transform: translateY(-600px)
	}
	.v-enter-active{
		transition:  .35s;
	}
	.v-leave{
		transform: translateY(0px)
	}
	.v-leave-active{
		transition:  .1s;
	}
</style>
