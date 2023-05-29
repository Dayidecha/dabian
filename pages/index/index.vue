<template>
	<view class="index">
		<!-- topBars start -->
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
			<view class="scroll-item" :id="'top'+index" v-for="(item,index) in topBar" :key="index"
				@tap="changeTap(index)">
				<text :class="topBarIndex === index ? 'f-active-color':''"> {{item.name}}</text>
			</view>
		</scroll-view>
		<!-- topBars end -->

		<!-- main start -->
		<swiper  :indicator-dots="false" :autoplay="false" :duration="1000" @change="onChangeTap" :current="topBarIndex"
			:style="'height:'+mainContentHeight+'px;'">

			<swiper-item v-for="(item,index) in remoteTopBar" :key='index'>
				
				<scroll-view class="" scroll-y="true" :style="'height:'+mainContentHeight+'px;'">
					<block v-if="item.data.length>0">
						<block v-for="(i,k) in item.data" :key='k'>
							<IndexSwipper v-if="i.type ==='swiperList'" :dataList="i.data"></IndexSwipper>
						
							<template v-if="i.type ==='recommendList'">
								<Recommend :dataList="i.data"></Recommend>
								<Card cardTitle="猜你喜欢"></Card>
							</template>
							<CommodityList v-if="i.type ==='commodityList'" :dataList="i.data"></CommodityList>
							<!-- 	<Banner></Banner> -->
							<!-- <Hot></Hot>	 -->
						</block>
					</block>
					<view v-else>
						<text>暂无数据...</text>
					</view>
				</scroll-view>

				<!-- main-content用于获取页面高度值 -->
				<!-- <view class="swiper-item main-content"> -->
				<!-- </view> -->

			</swiper-item>
		</swiper>
		<!-- main end -->



	</view>
</template>

<script>
	import IndexSwipper from '@/components/index/IndexSwiper/IndexSwiper.vue'
	import Recommend from '@/components/index/Recommend/Recommend.vue'
	import Card from '@/components/common/Card/Card.vue'
	import CommodityList from '@/components/common/CommodityList/CommodityList.vue'
	import Banner from '@/components/index/Banner/Banner.vue'
	import Hot from '@/components/index/Hot/Hot.vue'
	export default {
		data() {
			return {
				scrollIntoIndex: 'top0', //topBar跟随的索引
				topBarIndex: 0, //topBar选中的索引
				mainContentHeight: 0, //内容块的高度值
				topBar: [ //topBar选中的
					// {name:'推荐'},
					// {name:'运动户外'},
					// {name:'服饰内衣'},
					// {name:'鞋靴箱包'},
					// {name:'美妆个护'},
					// {name:'家居数码'}

				],
				remoteTopBar: [] //远程请求过来的topBar
			}
		},
		components: {
			IndexSwipper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Hot,

		},
		onLoad() {
			this.__init()
		},
		onReady() {

			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
					this.mainContentHeight = res.windowHeight - uni.upx2px(80) - this.getClientHeight()
					console.log(res.statusBarHeight)
				}
			})
			
			//计算高度（有问题）
			// let view = uni.createSelectorQuery().select('.main-content')
			// //console.log(view)
			// view.boundingClientRect(data => {
			// 	this.mainContentHeight = 5000
			// 	// this.mainContentHeight = data.height
			// 	//console.log(data)
			// }).exec()

		},

		methods: {
			//请求首页数据
			__init() {
				uni.request({
					url: "http://127.0.0.1:3000/api/index_list/data",
					success: (res) => {
						this.topBar = res.data.data.topBar
						this.remoteTopBar = this.initData(res.data.data)
					}
				})
			},
			//添加数据
			initData(res) {

				let arr = [];
				//主要内容区内容与topbar对应
				for (let i = 0; i < this.topBar.length; i++) {
					let obj = {
						data: []
					}
					//获取首次数据
					if (i == 0) {
						console.log(JSON.stringify(res.data))
						obj.data = res.data
					}
					arr.push(obj)
				}
				return arr;
			},
			//点击顶栏
			changeTap(index) {
				if (this.topBarIndex === index) {
					return
				}
				this.scrollIntoIndex = 'top' + index
				this.topBarIndex = index
			},
			//对应滑动
			onChangeTap(e) {
				this.changeTap(e.detail.current)

			},
			//获取可视区域高度【兼容】
			getClientHeight(){
				const res = uni.getSystemInfoSync()
				//console.log(res.statusBarHeight)
				//写法1
				const system = res.platform
				if(system === 'ios'){
					return 44 + res.statusBarHeight
				}else if(system ==='andriod'){
					return 48 + res.statusBarHeight
				}else{
					return 0;
				}
				//写法2
				
					//微信
				// #ifdef MP-WEIXIN
				
				// #endif
				
				
			}
		}
	}
</script>

<style scoped>
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}

	.scroll-item {
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 36rpx;
	}

	.f-active-color {
		color: #55aa00;
		padding: 10rpx 0;
		border-bottom: 10rpx solid #55aa00;
	}

	.swiper-item {}
	
	.demo1{
		background: skyblue;
	}
</style>