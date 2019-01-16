<template>
	<div>
		<div class="text-c border-b top">首页</div>
		<div class="flex-jc-between top_sear">
			<div class="dw">附近门店：</div>
			<div class="sear">
				<van-icon name="search" />
				<input placeholder="搜索你想要的商品">
			</div>
		</div>
		<div class="banner">
			<van-swipe :autoplay="3000" @change="onChange">
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img :src="image">
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="flex-jc-around">
			<div class="tg">
				<img src="../assets/tab/mys.png"> 我要托管
			</div>
			<div class="tg">
				<img src="../assets/tab/mys.png"> 我要推广
			</div>
			<div class="tg">
				<img src="../assets/tab/mys.png"> 福利社
			</div>
		</div>
		<van-tabs v-model="active">
			<van-tab title="热门">
				<div class="flex-jc-between hb">
					<div class="title">热门租赁</div>
					<div class="m_txt" @click="more">更多
						<van-icon name="arrow" />
					</div>
				</div>
				<div class="flex-jc-around">
					<div>
						<img class="img" src="../assets/tab/mys.png">
						<div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
						<div>
							<span class="price">¥3.08</span>/日
						</div>
					</div>
					<div>
						<img class="img" src="../assets/tab/mys.png">
						<div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
						<div>
							<span class="price">¥3.08</span>/日
						</div>
					</div>
					<div>
						<img class="img" src="../assets/tab/mys.png">
						<div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
						<div>
							<span class="price">¥3.08</span>/日
						</div>
					</div>
				</div>
				<div class="flex-jc-between hb">
					<div class="title">游戏玩家</div>
					<div class="m_txt" @click="more">更多
						<van-icon name="arrow" />
					</div>
				</div>
				<div class="flex-jc-around">
					<div>
						<img class="img" src="../assets/tab/mys.png">
						<div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
						<div>
							<span>¥3.08</span>/日
						</div>
					</div>
					<div>
						<img class="img" src="../assets/tab/mys.png">
						<div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
						<div>
							<span>¥3.08</span>/日
						</div>
					</div>
					<div>
						<img class="img" src="../assets/tab/mys.png">
						<div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
						<div>
							<span>¥3.08</span>/日
						</div>
					</div>
				</div>
				<div class="em"></div>
			</van-tab>
			<van-tab title="相机">
				<div class="hb">
					<div class="title">热门推荐</div>
				</div>
				<div class="flex-jc-around border-b">
					<div>
						<img class="img" src="../assets/tab/mys.png">
						<div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
						<div>
							<span class="price">¥3.08</span>/日
						</div>
					</div>
					<div>
						<img class="img" src="../assets/tab/mys.png">
						<div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
						<div>
							<span class="price">¥3.08</span>/日
						</div>
					</div>
					<div>
						<img class="img" src="../assets/tab/mys.png">
						<div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
						<div>
							<span class="price">¥3.08</span>/日
						</div>
					</div>
				</div>
				<div class="hb">
					<div class="title">所有产品</div>
					<div class="img_box">
						<img class="sy_img" src="https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99">
					</div>
					<div class="f14">Canon/佳能 PowerShot SX720 HS</div>
					<div style="display: flex;">
						<van-rate v-model="value" disabled disabled-color="#FFB10E" />
						<span class="f12">4.9</span>
						<div>
							<img class="chat" src="../assets/tab/chat.png">
							<span class="f12">999+</span>
						</div>
					</div>
					<div>
						<span class="f14">租金：</span>
						<span class="price">¥3.08</span>
						<span class="f12">/日</span>
					</div>
					<div class="em"></div>
				</div>
			</van-tab>
			<van-tab title="游戏">游戏</van-tab>
			<van-tab title="手机">手机</van-tab>
			<van-tab title="影音">影音</van-tab>
			<van-tab title="酷玩">酷玩</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	export default {
		data() {
			return {
				images: [
					"https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
					"https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
					"https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
					"https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99"
				],
				active: 0,
				value: 5,
				lat: '',
				lag: ''
			};
		},
		created() {
			this.getLocation()
		},
		methods: {
			getLocation() {
				if(window.navigator.geolocation) {
					window.navigator.geolocation.getCurrentPosition((position) => {
						var lat = position.coords.latitude; //纬度 
						var lag = position.coords.longitude; //经度 
						this.lat = lat,
						this.lag = lag
					})
				} else {
					Toast('浏览器不支持地理定位')
				}
			},
			onChange(index) {
				this.current = index;
			},
			//更多
			more() {
				this.$router.push({
					path: '/home'
				})
			}
		}
	}
</script>

<style scoped>
	.f12 {
		font-size: 12px;
	}
	
	.f14 {
		font-size: 14px;
	}
	
	.top {
		position: fixed;
		top: 0;
		z-index: 99;
		background: #fff;
		width: 100%;
		height: 44px;
		line-height: 44px;
	}
	
	.top_sear {
		width: 100%;
		height: 44px;
		margin-top: 44px;
	}
	
	.sear {
		width: 50%;
		height: 33px;
		margin: 5px 12px 0 0;
		border-radius: 15px;
		line-height: 33px;
		background: #f6f5f5;
	}
	
	.sear .van-icon {
		padding-left: 10px;
	}
	
	.sear input {
		width: 70%;
		background: none;
	}
	
	input::placeholder {
		font-size: 13px;
	}
	
	.dw {
		width: 50%;
		height: 44px;
		line-height: 44px;
		margin-left: 13px;
		font-size: 13px;
	}
	
	.banner {
		width: 100%;
		height: 209px;
	}
	
	.tg {
		text-align: center;
		font-size: 12px;
	}
	
	.tg img {
		display: block;
		width: 50px;
		height: 50px;
	}
	
	.border_b {
		border-bottom: 4px solid rgba(17, 153, 255, 1);
	}
	
	.img {
		display: block;
		width: 81px;
		height: 81px;
	}
	
	.hb {
		height: 44px;
		line-height: 44px;
	}
	
	.title {
		font-size: 17px;
		font-weight: 600;
		margin-left: 13px;
	}
	
	.m_txt {
		font-size: 12px;
		color: d0d0d0;
		margin-right: 13px;
	}
	
	.pro_title {
		width: 80px;
	}
	
	.price {
		font-size: 14px;
		color: #f21e1e;
	}
	
	.img_box {
		width: 100%;
		height: 200px;
		text-align: center;
	}
	
	.sy_img {
		width: 96%;
		height: 200px;
		border-radius: 10px;
	}
	
	.van-rate__item {
		width: 10px;
		height: 10px;
	}
	
	.chat {
		width: 16px;
		height: 14px;
	}
	
	.em {
		width: 100%;
		height: 60px;
	}
</style>