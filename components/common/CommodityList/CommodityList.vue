<template>
	<view class="commodity-list">
		<!-- 商品列表组件 -->
		<Commodity :dataList='dataList'></Commodity>
	</view>
</template>

<script>
	import Commodity from '../Commodity/Commodity.vue'
	export default {
		props:{
			dataList:Array
		},
		components:{
			Commodity
		},
		data() {
			return {
				commodityList:[
					{id:1,
					imgUrl: '/static/img/commodity1.png',
					name:	'大绒毛衣',
					pprice:	'299',
					oprice:  '199',
					discount: '12',
					},
					{id:2,
					imgUrl: '/static/img/commodity2.png',
					name:	'大绒毛衣',
					pprice:	'399',
					oprice:  '199',
					discount: '20',
					},
				]
			}
		},
		methods: {
			
		},
		mounted(){
			console.log(this.dataList)
		}
	}
</script>

<style>

</style>
