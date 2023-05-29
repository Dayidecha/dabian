<template>
	<view class="Hot">
		<Commodity :dataList="hotList" itemWidth="33.33%" imgHeight="250rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../../common/Commodity/Commodity.vue'
	export default {
		components:{
			Commodity,
		},
		data() {
			return {
				hotList:[
					{id:1,
					imgUrl: '/static/img/hot1.png',
					name:	'大绒毛衣1',
					pprice:	'299',
					oprice:  '199',
					discount: '12',
					},
					{id:2,
					imgUrl: '/static/img/hot2.png',
					name:	'大绒毛衣2',
					pprice:	'399',
					oprice:  '199',
					discount: '20',
					},
					{id:3,
					imgUrl: '/static/img/hot3.png',
					name:	'大绒毛衣3',
					pprice:	'299',
					oprice:  '199',
					discount: '12',
					},
					{id:4,
					imgUrl: '/static/img/hot4.png',
					name:	'大绒毛衣',
					pprice:	'399',
					oprice:  '199',
					discount: '20',
					},
					{id:5,
					imgUrl: '/static/img/hot5.png',
					name:	'大绒毛衣',
					pprice:	'299',
					oprice:  '199',
					discount: '12',
					},
					{id:6,
					imgUrl: '/static/img/hot6.png',
					name:	'大绒毛衣',
					pprice:	'399',
					oprice:  '199',
					discount: '20',
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
