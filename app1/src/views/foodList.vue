<template>
    <div>
      <div>
           <headers></headers>
      </div>
      <div class="msite_nav">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="list" v-for='i in da1'>
								<img :src="'https://fuss10.elemecdn.com'+i.image_url" alt="" />
								<p>{{i.title}}</p>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="list" v-for='i in da2'>
								<img :src="'https://fuss10.elemecdn.com'+i.image_url" alt="" />
								<p>{{i.title}}</p>
							</div>
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
			</div>
        

        <!-- <div class="item">
				<div class="hd">
					<span class="glyphicon glyphicon-home" style="color:#ccc"></span>
					<span style="color:#999">附近商家</span>
				</div>
				<div class="lists" v-for="i in store">
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
									<li>
										<span v-for='i in 5' class="glyphicon glyphicon-star"></span>
										
									</li>
								</ul>
								<span class="shop_p1s">{{i.rating}}</span>
								<span>
									月售{{i.recent_order_num}}单
								</span>
								<h4>
									<span>{{i.delivery_mode.text}}</span>
									<span>{{i.supports[1].name}}</span>
								</h4>
						</div>
						<div class="shop_p2">
							<p>
								￥{{i.float_minimum_order_amount}}元起送
								<span class="segmentation">/</span>
								{{i.piecewise_agent_fee.tips}}
							</p>
							<p>
								<span>{{i.distance}}</span>
								<span>/</span>
								<span>{{i.order_lead_time}}</span>
							</p>
						</div>
					</hgroup>
				</div>
			</div> -->
    </div>
</template>
<script>
import headers from '../components/HelloWorld'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default{
    data(){
        return {
            da1: '',
            da2: '',
            store: '',
        }
    },
    components:{headers},
    created(){
        
      
       
    },
    mounted() {
          this.gain()
			new Swiper('.swiper-container', {
				loop: true,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
            })
		},
    methods:{
        gain() {
				this.$http.get('https://elm.cangdu.org/v2/index_entry', ).then((data) => {
                    var dat = data.data;
                    console.log(data)
					this.da1 = dat.splice(0, 8);

				})
				this.$http.get('https://elm.cangdu.org/v2/index_entry', ).then((data) => {
					var dat = data.data;
					this.da2 = dat.splice(8, 16);

				})
            },
			rest() {
				var ars = this.go.split(',');
				this.$http.get('https://elm.cangdu.org/shopping/restaurants', {
					params: {
						latitude: ars[0],
						longitude: ars[1]
					}
				}).then((data) => {
					console.log(data);
					this.store = data.data;
				})

			},
    }
}
</script>
<style scoped>
    .swip{
        margin-top:50px;
    }
    .swiper-container {
        width: 100%;
        height: 230px;
    }  
    .msite_nav{
        margin-top:50px;
    }
    .list{
		width: 25%;
		box-sizing: border-box;
		float: left;
		/*height: 120px;*/
		padding: 10px 0;
		text-align: center;
		color:#666;
		font-size: 14px;
		min-height: 50px;
	}
	
	.list img {
		width: 40%;
		height: 40px;
		margin-bottom: 12px;
	}
	

	
</style>