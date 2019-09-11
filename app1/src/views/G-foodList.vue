<template>
	<div>
		<div>
			<div>
				<transition name="fade">
					<loading v-if="isLoading"></loading>
				</transition>
			</div>
			<headers :left="'111'" :leftto="'search'" :name='list_city' right='登陆/注册' :rightto="'login'">

			</headers>

			<div class="msite_nav">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="list" v-for='(i,index) in da1' :key="index">
								<router-link :to="{path:'/food',query:{geohash:'31.234035,121.510013',title:i.title,restaurant_category_id:i.restaurant_category_id}}">
									<img :src="'https://fuss10.elemecdn.com'+i.image_url" alt="" />
									<p>{{i.title}}</p>
								</router-link>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="list" v-for='(i,index) in da2' :key="index">
								<router-link :to="{path:'/food',query:{geohash:'31.234035,121.510013',title:i.title,restaurant_category_id:i.restaurant_category_id}}">
									<img :src="'https://fuss10.elemecdn.com'+i.image_url" alt="" />
									<p>{{i.title}}</p>
								</router-link>
							</div>
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<div class="item">
				<div class="hd">
					<span class="glyphicon glyphicon-home" style="color:#ccc"></span>
					<span style="color:#999">附近商家</span>
				</div>
				<router-link to='shop'>
					<div class="lists" v-for="(i,index) in store" :key="index">
					<section>
						<img :src="'//elm.cangdu.org/img/'+i.image_path" alt="" class="shop_img" />
					</section>
					<hgroup class="shop_right">
						<header class="shop_detail_header">
							<h4 class="shop_title ellipsis premium">{{i.name}}</h4>
							<ul class="shop_detail_ul">
								<li class="supports">保</li>
								<li class="supports">准</li>
								<li class="supports">票</li>
							</ul>

						</header>
						<div class="shop_p1">
							<ul>
								<el-rate v-model="i.rating" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>

							</ul>

							<span>
									月售{{i.recent_order_num}}单
								</span>
							<h5>
									<!-- <span>{{i.delivery_mode.text}}</span> -->
									<span>{{i.supports[1].name}}</span>
								</h5>
						</div>
						<div class="shop_p2">
							<p>
								￥{{i.float_minimum_order_amount}}元起送
								<span class="segmentation">/</span> {{i.piecewise_agent_fee.tips}}
							</p>
							<p>
								<span>{{i.distance}}</span>
								<span>/</span>
								<span>{{i.order_lead_time}}</span>
							</p>
						</div>
					</hgroup>
				</div>
				</router-link>
			</div>
			<bottoms :take="'foodList'" :order="'order'" :my="'login'" :search="'search'" :nums="0"></bottoms>
		</div>
	</div>
</template>
<script>
	import bottoms from '../components/bottom'
	import headers from '../components/HelloWorld'
	import Loading from '@/components/loading'
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default {
		data() {
			return {
				da1: '',
				da2: '',
				store: '',
				list_city: '',
				isLoading: true
			}
		},
		components: {
			headers,
			bottoms,
			Loading
		},
		created() {
			
			this.gain()
			this.rest()
		},
		mounted() {
console.log(this.$store.state)
			// console.log(this.$store.state.user.longitude)
			new Swiper('.swiper-container', {
					loop: false,
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
					},
				}),
				this.dizi()
			console.log(this.list_city)
		},
		methods: {
			gain() {
				this.$http.get('https://elm.cangdu.org/v2/index_entry', ).then((data) => {
					var dat = data.data;
					this.da1 = dat.splice(0, 8);
				})
				this.$http.get('https://elm.cangdu.org/v2/index_entry', ).then((data) => {
					console.log(data)
					var dat = data.data;
					this.da2 = dat.splice(8, 16);
				})

			},
			rest() {
				// var ars = this.go.split(',');ars[0], ars[1]
				this.$http.get('https://elm.cangdu.org/shopping/restaurants', {
					params: {
						latitude: this.$store.state.user.latitude,
						longitude:  this.$store.state.user.longitude
					}
				}).then((data) => {
					this.store = data.data;
					this.isLoading = false
				})
			},
			//根据经纬度详细定位
			dizi() {
				this.$http.get('https://elm.cangdu.org/v2/pois/' + this.$route.query.latitude + ',' + this.$route.query.longitude, {
					params: {

					}
				}).then((data) => {
					this.list_city = data.data.name
					console.log(data)
				})
			}
		}
	}
</script>
<style scoped>
	.swip {
		margin-top: 50px;
	}
	
	.swiper-container {
		width: 100%;
		height: 210px;
	}
	
	.msite_nav {
		margin-top: 50px;
		background: white;
	}
	
	.list {
		width: 25%;
		box-sizing: border-box;
		float: left;
		/*height: 120px;*/
		padding: 10px 0;
		text-align: center;
		color: #666;
		font-size: 14px;
		min-height: 50px;
	}
	
	.item {
		border-top: 20px solid #f5f5f5;
		overflow: hidden;
		background: white
	}
	
	.hd {
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		padding: 0 10px;
		opacity: 0.9;
		margin-top: 4px
	}
	
	.con {
		text-align: center;
	}
	
	.list img {
		width: 40%;
		height: 40px;
		margin-bottom: 12px;
	}
	
	.lists {
		border-bottom: 2px solid #f1f1f1;
		padding: 10px;
		overflow: hidden;
	}
	
	.shop_img {
		margin-right: 10px;
		width: 70px;
		height: 70px;
		float: left;
	}
	
	.shop_right {
		overflow: hidden;
	}
	
	.shop_detail_header {
		overflow: hidden;
	}
	
	.shop_detail_header::before {
		content: "\54C1\724C";
		float: left;
		font-size: .3rem;
		line-height: 18px;
		color: #333;
		background-color: #ffd930;
		padding: 0 4px;
		border-radius: 4px;
		margin-right: 10px;
	}
	
	.shop_title {
		font-size: 14px;
		font-weight: bold;
		float: left;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 120px;
		white-space: nowrap
	}
	
	.shop_detail_header .shop_detail_ul {
		list-style: none;
		float: right;
	}
	
	.shop_detail_header .shop_detail_ul li {
		float: left;
		font-size: 12px;
		color: #999
	}
	
	.shop_p1 {
		/* padding: 10px; */
		font-size: 10px;
		margin: 8px 0;
	}
	
	.shop_p1 ul {
		float: left;
	}
	
	.shop_p1 ul li {
		color: #ff9a0d;
		float: left;
	}
	
	.shop_p1s {
		color: #ff6000;
		margin-left: 10px;
	}
	
	.shop_p1 h5 {
		float: right;
	}
	
	.shop_p1 h5 span {
		border-radius: 2px;
		font-size: .02rem;
	}
	
	.shop_p1 h5 span:first-of-type {
		color: #fff;
		background-color: #3190e8;
		border: 2px solid #3190e8;
	}
	
	.shop_p1 h5 span:last-of-type {
		color: #3190e8;
		border: 2px solid #3190e8;
	}
	
	.shop_p2 {
		font-size: 10px;
	}
	
	.segmentation {
		margin: 0 4px;
	}
	
	.shop_p2 p:first-of-type {
		float: left;
		color: #666;
	}
	
	.shop_p2 p:last-of-type {
		float: right;
		color: #666;
	}
	
	.shop_p2 p:last-of-type span:last-of-type {
		color: #3190e8;
	}
	
	.hello {
		z-index: 4;
	}
	
	a {
		color: #666;
	}
</style>