<!--把to的name改成搜索路由名-->

<template>
	<div class="home">
		<hello-world left="elm.en" right="登陆|注册"></hello-world>
		<div style="height: 50px"></div>
		<div>
			<div class="z-left">当前定位城市：<span>定位不标时，请在城市列表中选择</span></div>
			<div class="z-Location">
				<router-link :to='{name:"mine",params:{id:Location.id}}' style="color: #3190e8;">{{Location.name}}<span>></span></router-link>

			</div>
		</div>
		<div class="z-box">
			<p>热门城市</p>
			<div class="z-box1" v-for='i,index in home'>
				<router-link :key='index' :to='{name:"mine",params:{id:i.id}}'>{{i.name}}</router-link>
			</div>
		</div>
		<div style="width: 100%;">
			<div class="z-Allcities" v-for='i,index,key in Allcities'>
				<h2>{{index}}{{Sort}}</h2>
				<div class="z-Allcities1" v-for='a in i'>
					<router-link :key='index' :to='{name:"mine",params:{id:a.id}}'>{{a.name}}</router-link>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld.vue'
	export default {

		name: "home",
		components: {
			HelloWorld
		},
		data() {
			return {
				home: '',
				Location: '',
				Allcities: '',
			}
		},
		computed: {

			Sort() {

			}
		},
		created() {
			this.$http.get('https://elm.cangdu.org/v1/cities?type=hot').then(data => {
					//      		console.log(data.data)
					this.home = data.data
				}),
				this.$http.get('https://elm.cangdu.org/v1/cities?type=guess').then(data => {
					//      		console.log(data.data)
					this.Location = data.data
				}),
				this.$http.get('https://elm.cangdu.org/v1/cities?type=group').then(data => {
					this.Allcities = this.group_s(data.data)
				})

		},
		methods: {
			group_s(arr) {
				var keys = Object.keys(arr).sort();
				var newObj = {};
				for(var i = 0; i < keys.length; i++) {
					var index = keys[i];
					newObj[index] = arr[index];
				}
				return newObj;
			}
		}
	}
</script>

<style scoped>
	.z-box {
		width: 100%;
		height: 100px;
		padding-top: 15px;
		border-top: .4rem #e4e4e4 solid;
	}
	
	.z-box p {
		width: 100%;
		height: 30px;
		text-align: left;
		padding-left: 20px;
		box-sizing: border-box;
	}
	
	.z-box1 {
		width: 25%;
		height: 40px;
		float: left;
		line-height: 40px;
		border: 1px solid #e4e4e4;
		box-sizing: border-box;
		text-align: center;
	}
	
	.z-box1 a {
		color: #3190e8;
	}
	
	.z-Location {
		text-align: left;
		line-height: 40px;
		font-size: 20px;
		/*padding-left: 20px;*/
		padding: 0px 20px 0px 20px;
		box-sizing: border-box;
	}
	
	.z-Location>a>span {
		float: right;
		overflow: hidden;
		color: #CCCCCC;
	}
	
	.z-left {
		padding: 0px 20px 0px 20px;
		line-height: 40px;
		text-align: left;
		border-bottom: 1px solid #e4e4e4;
	}
	
	.z-left>span {
		float: right;
		overflow: hidden;
	}
	
	.z-Allcities {
		/*padding:0px 20px 0px 20px;*/
		width: 100%;
		text-align: center;
		border-top: .4rem #e4e4e4 solid;
		overflow: hidden;
	}
	
	.z-Allcities>h2 {
		text-align: left;
		margin-left: 20px;
		line-height: 40px;
	}
	
	.z-Allcities1 {
		width: 25%;
		height: 40px;
		float: left;
		line-height: 40px;
		border: 1px solid #e4e4e4;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.z-Allcities1>a {
		display: inline-block;
		padding: 0px 6px;
		box-sizing: border-box;
		color: #2C3E50;
	}
</style>