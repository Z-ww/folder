<template>
    <div>
		
        <headers :left="'<'" :name="titl" :leftto="'foodList'"></headers>
        <div class="sort_container">
            <div class="sort_item" v-for="(i,ins) in con_ar" :key="ins" :class="ins == indexs ? 'active':''" @click='tps(ins)'>
                <div class="sort_item_border">
					{{i}}
					<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon"><polygon  points="0,3 10,3 5,8" :style="{display:ins==indexs?'none':'block'}"></polygon></svg>
					<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" versixon="1.1" class="sort_icon"><polygon style=" fill: #3190e8;" points="0,3 10,3 5,8" :style="{display:ins==indexs?'block':'none'}"></polygon></svg>
                </div>
            </div>
            <div v-show='cli_ty' class="sh">
			<div class="sort_itli" :class="indexs == 0? 'ste':''">
				<ul>
					<li v-for="(i,indexss) in gains" :key="indexss">
						{{i.name}}
					</li>
				</ul>
			</div>
			<div class="sort_itli" :class="indexs == 1? 'ste':''">
				2
			</div>
			<div class="sort_itli" :class="indexs == 2? 'ste':''">
				3
			</div>
		</div>
        </div>
		
		
        <div class="item">
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
									<li>
										<!-- <span v-for='i in 5' class="glyphicon glyphicon-star" :key="i"></span> -->
										
									</li>
								</ul>
								<span class="shop_p1s">{{i.rating}}</span>
								<span>
									月售{{i.recent_order_num}}单
								</span>
								<h5>
									<span>{{i.delivery_mode.text}}</span>
									<span>{{i.supports[1].name}}</span>
								</h5>
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
			</div>
    </div>
</template>
<script>
    import bottoms from '../components/bottom'
    import headers from '../components/HelloWorld'
export default{
    components:{headers,bottoms},
    data(){
        return{
             store: '',
			 titl:'',
			 indexs:'',
             geohash:'',
             con_ar:['排序','筛选'],
			 cli_ty:false,
			 latitude:'',
			 longitude:'',
			 gains:''
        }	
    },
    created(){
        this.rest();
        
        this.titl = this.$route.query.title
        this.geohash = this.$route.query.geohash
		this.con_ar.unshift(this.titl)
		this.gain()
		
    },
    methods:{
		//获取所有商铺分类列表
		gain(){
			this.geohash.split(',')
			this.latitude = this.geohash.split(',')[0]
			this.longitude = this.geohash.split(',')[1]
			console.log(this.longitude)
			this.$http.get('http://elm.cangdu.org/shopping/v2/restaurant/category',{
				params:{
					latitude:this.latitude,
					longitude:this.longitude
				}
			}).then((data)=>{
				console.log(data)
				this.gains = data.data
			})
		},
		//获取商铺列表
        rest() {
				// var ars = this.go.split(',');ars[0], ars[1]
				this.$http.get('https://elm.cangdu.org/shopping/restaurants', {
					params: {
						latitude: 31.234035,
						longitude:121.510013
					}
				}).then((data) => {
					this.store = data.data;
				})

			},
			tps(ins){
				
				if(this.cli_ty && ins==this.indexs){
					this.cli_ty = false
				}else{
					this.cli_ty = true
				}
				this.indexs =ins
				console.log(this.cli_ty)
			},
    }
}
</script>
<style scoped>

.sh{
	width:100%;
	background: white;
	z-index: 22;
	width:100%;
	position: fixed;
	top:86px;
	transition: 4s
}
.sh .sort_itli{
	display: none;
	transition:1s;
	opacity:0;
}
.sh div:first-of-type li{
	line-height: 30px;
}
.sh .ste{
	opacity:1;
	display:block
}
.sort_container .active{
	color: #3190e8;
}
.sort_item .sort_item_border{
    height: .5rem;
    border-right: .025rem solid #e4e4e4;
    margin-top: 10px;
}
   
.sort_item{
    font-size: .36rem;
    color: #444;
    width: 33.3%;
    height: 1.2rem;
    text-align: center;
}
.sort_container{
        background-color: #fff;
        /* border-bottom: .025rem solid #f1f1f1; */
        position: fixed;
        top: 1.3rem;
        right: 0;
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        z-index: 13;
        box-sizing: border-box;
}
	.item {
		border-top: 20px solid #f5f5f5;
		overflow: hidden;
		background: white;
		margin-top:70px;
	}
	.hd {
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		padding: 0 10px;
		opacity: 0.9;
		margin-top:4px
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
	.shop_detail_header{
		overflow: hidden;
	}
	.shop_detail_header::before{
		    content: "\54C1\724C";
		    float: left;
		    font-size:.3rem;
		    line-height: 18px;
		    color: #333;
		    background-color: #ffd930;
		    padding: 0 4px;
		    border-radius: 4px;
		    margin-right: 10px;
	    
    }
   .shop_title{
   		font-size: 14px;
   		font-weight: bold;
   		float: left;
   		overflow: hidden;
   		text-overflow: ellipsis;
   		width:120px;
   		white-space: nowrap
   }
   .shop_detail_header .shop_detail_ul{
		list-style: none;
		float: right;
	}
	.shop_detail_header .shop_detail_ul li{
		float: left;
		font-size: 12px;
		color:#999
	}
	.shop_p1{
		/* padding: 10px; */
		font-size: 10px;
		margin: 8px 0;
	}
	.shop_p1 ul{
		float: left;
	}
	.shop_p1 ul li{
		color:#ff9a0d;
		float: left;
	}
	.shop_p1s{
		color:#ff6000;
		margin-left: 10px;
	}
	.shop_p1 h5{
		float: right;
	}
	.shop_p1 h5 span{
		border-radius:2px;
		font-size: .02rem;
	}
	.shop_p1 h5 span:first-of-type{
		    color: #fff;
		    background-color: #3190e8;
		    border: 2px solid #3190e8;
	}
	.shop_p1 h5 span:last-of-type{
		color: #3190e8;
    	border: 2px solid #3190e8;
	}
	.shop_p2{
		font-size: 10px;
	}
	.segmentation{
		margin: 0 4px;
	}
	.shop_p2 p:first-of-type{
		float: left;
		color: #666;
	}
	.shop_p2 p:last-of-type{
		float: right;
		color: #666;
	}
	.shop_p2 p:last-of-type span:last-of-type{
		color: #3190e8;
	}
    	.hello{
		z-index:4;
	}
	a{
		color: #666;
	}
</style>