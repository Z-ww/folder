<template>
    <div>
       		<div>
				<transition name="fade">
					<loading v-if="isLoading"></loading>
				</transition>
			</div>
        <headerBar :left="'<'" :leftto="'foodList'" :name="'搜索'" ></headerBar>
        <div class="sear">
            <input type="text" placeholder="请输入商家或美食名称" v-model="txt" @input='inp($event)'>
            <button @click='btn()'>提交</button>
        </div>
       <div v-if='typess'>
            <div v-if='types'>
                <div class="item">
				<div class="hd">
					<span class="glyphicon glyphicon-home" style="color:#ccc"></span>
					<span style="color:#999">附近商家</span>
				</div>
				<div class="lists" v-for="(i,index) in store" :key="index">
					<router-link :to="{name:'shop',query:{id:i.id}}">
						<section>
							<img v-lazy="'//elm.cangdu.org/img/'+i.image_path" alt="" class="shop_img" />
						</section>	
					</router-link>
					
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
										<el-rate v-model="i.rating" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>

									</li>
								</ul>
								<span class="shop_p1s">{{i.rating}}</span>
								<span>
									月售{{i.recent_order_num}}单
								</span>
								<h5>
									<span>{{i.delivery_mode == undefined?'':i.delivery_mode.text}}</span>
									<span>{{i.supports[1]== undefined?'':i.supports[1].name}}</span>
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
            <div v-else class="sear_txt">
                很抱歉！！！搜索无结果 
            </div>
       </div>
      
        <div class="sear_his" v-else>
            <p>搜索历史</p>
            <div>
                <ul>
                    <li v-for='(i,index) in ars' :key="index"><p @click='val($event)'>{{i}}</p><span @click='clear(index)'>✘</span></li>
                     <li class="clears" @click='allclear' v-show='ars.length!=0'>清空搜索历史</li>
                </ul>
               
            </div>
        </div>
        <bottoms :take="'foodList'" :order="'order'" :my="'login'" :search="'search'" :nums="1"></bottoms>
    </div>
</template>
<script>
import bottoms from '../components/bottom'
import headerBar from '../components/HelloWorld'
import Loading from '@/components/loading'
export default{
    components:{headerBar,bottoms,Loading},
    data(){
        return{
            txt:'',
            types:'',
            txts:'',
            ars:[],
            typess:'',
            store:'',
			isLoading: false
        }
    },
    created(){
        if(localStorage.searchHistory.length){
            this.ars = JSON.parse(localStorage.searchHistory)
        }
         
    },
    methods:{
        btn(){
			this.store = '';
			this.isLoading=true
            this.$http.get('https://elm.cangdu.org/v4/restaurants',{
              params:{
                    geohash:'31.22967,121.4762',
                    keyword:this.txt
              }
            }).then((data)=>{
                    console.log(data)
                    this.types = data.data.length
                    if(this.types){
                        this.store = data.data
					}
					this.typess = true
				// this.txts = data.data.message
				this.isLoading=false
            })
            this.ars.unshift(this.txt)
            localStorage.searchHistory = JSON.stringify(this.ars)
            
			// this.isLoading= false
        },
        inp(e){
            console.log(e.target.value);
            if(e.target.value == ''){
                this.typess = false;
            }
        },
        clear(i){
            var arss = JSON.parse(localStorage.searchHistory);
            arss.splice(i,1);
            console.log(arss);
            localStorage.searchHistory = JSON.stringify(arss);
            this.ars = arss
        },
        allclear(){
            localStorage.searchHistory = [];
            this.ars = []
        },
        val(e){
            console.log(e.target.innerText)
            this.txt = e.target.innerText;
            this.btn()
        }
    },
}
</script>
<style scoped>
*{margin:0;padding:0};
html,body{
    width:100%;
    height:100%;
    background-color: #f5f5f5;
}
.sear{
    padding: 10px;
    background: white
}
.sear input{
    margin-top: 50px;
    width:70%;
    height:30px;
    /* background:  */
    border: 1px solid #e4e4e4;
    color: #333;
    font-size: 14px;
    color: #333;
    border-radius: 4px;
    background-color: #ededed;
    font-weight: 700;
    padding: 0px 6px
}
.sear_txt{
    margin: 0 auto;
    font: .4rem/1rem Microsoft YaHei;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: .125rem;
}
.sear button{
    width:20%;
    height:32px;
    border: 1px solid #3190e8;
    margin-left: 6px;
    font-size: 16px;
    color: #fff;
    border-radius: 6px;
    background-color: #3190e8;
    font-weight: 700;
    padding: 0 4px;
}
.sear_his p{
    font-size: .4rem;
    line-height: 1.3rem;
    text-indent: .5rem;
    font-weight: 700;
    color: #666;
}
.sear_his li{
    font-size: 20px;
    padding: 5px 0 ;
    min-height: 50px;
    padding-left: 6px;
    background: white;
    overflow: hidden;
    position: relative;
    border-bottom: .025rem solid #e4e4e4;
}
.sear_his span{
    /* float:right; */
    /* margin-right: 20px; */
    position: absolute;
    right:20px;
    top:20px;
}
.sear_his .clears{
    text-align: center;
        color: #3190e8;
        font-size: 16px;
        font-weight: 600
        
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