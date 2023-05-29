<template>
	<view class="recommend bg-color">
		
		<view class="recommend-item" v-for="(item,index) in dataList" :key="index">
			<image class="big-img" :src="item.bigUrl" mode=""></image>
			<view class="small-img">
				<block v-for="(i,k) in item.data" :key="k">
				<image class="small-img-item" :src="i.imgUrl" mode=""></image>
				</block>
			</view>
		</view>
		
	</view>
	</template>

<script>
	export default {
		props:{
			dataList: Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted(){
		
		}
	}
</script>

<style scoped> 
	 .recommend{
		 padding: 20rpx;
	 }
	 
	.recommend-item{
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2rpx solid #cccccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.big-img{
		width: 100%;
		height: 400rpx;
	}
	.small-img-item{
		width: 33.333%;
		height: 250rpx;
	}
	
</style>