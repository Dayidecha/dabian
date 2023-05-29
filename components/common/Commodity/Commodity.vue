<template>
	<view class="commodity">
		<!-- 单个商品组件 -->
		<view class="commodity-item" v-for="(item,index) in dataList" :key="index" :style="'width:'+itemWidth+';'">
			<image class="commodity-img" :src="item.imgUrl" :style="'height:'+imgHeight+';'"></image>
			<view class="commodity-content">
				<text class="commodity-name">{{item.name}}</text>
				<view>
					<text class="pprice">${{item.pprice}}</text>
					<text class="oprice">${{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		props:{
			dataList: Array, //商品的数据
			itemWidth:{   	//商品盒子的宽度
				type:String,
				default: '375rpx'
			},
			imgHeight:{  //商品图片的高度
				type:String,
				default: '375rpx'
			}
		},
		
		data() {
			return {
				dataList1: []
			}
		},
		methods: {
			
		},
		mounted(){
			// console.log(this.dataList)
			// this.dataList1 = this.dataList
			// console.log('-----------------------')
			// console.log(this.dataList1)
		}
	}
</script>

<style>
.commodity{
	display: flex;
	flex-wrap: wrap;
}
.commodity-item{
	
	padding-bottom: 20rpx;
}
.commodity-img{
	width: 100%;

}
.commodity-content{
	overflow: hidden;
	text-overflow: ellipsis;
/* 	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-ordinal: vertical; */
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	color: #333333;
	word-break: break-all;
	padding: 6rpx 20rpx;
	
}
.oprice{
	text-decoration: line-through;
	font-size: 24rpx;
	color: #999999;
}
.discount{
	display: block;
	/* width: max-content; */
	/* text-align: center; */
	border-radius: 4rpx;
	border: 3px solid #ff3333;
	padding: 2rpx 10rpx;
	font-size: 20rpx;
	color: #ff3333;
	
}
</style>
