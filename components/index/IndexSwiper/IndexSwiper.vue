<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in dataList" :key="index">
				<view class="swiper-item">
					<img class="swiper-img" :src="item.imgUrl" alt="">
				</view>
			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			dataList: Array
		},
		data() {
			return {
				swiperList: [{   //弃用，已从后台传输
						src: '/static/img/swiper1.png'
					},
					{
						src: '/static/img/swiper2.png'
					},
					{
						src: '/static/img/swiper3.png'
					}
				],
			}
		},
		methods: {
			
		},

	}
</script>

<style scoped> 
  .swiper-img{
	  width: 100%;
	  height: 400rpx;
  }
</style>