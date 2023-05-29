var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.get("/api/index_list/data", function(req, res, next) {
	res.send({
		"code": '0',
		"data": {
			topBar: [{
					id: 1,
					name: '推荐'
				},
				{
					id: 2,
					name: '运动户外'
				},
				{
					id: 3,
					name: '服饰内衣'
				},
				{
					id: 4,
					name: '鞋靴箱包'
				},
				{
					id: 5,
					name: '美妆个护'
				},
				{
					id: 6,
					name: '家居数码'
				},
				{
					id: 7,
					name: '食品母婴'
				}
			],
			data: [{
					type: "swiperList",
					data: [{
							imgUrl: '/static/img/swiper1.png'
						},
						{
							imgUrl: '/static/img/swiper2.png'
						},
						{
							imgUrl: '/static/img/swiper3.png'
						}
					]
				},
				{
					type: "recommendList",
					data: [
					{
						bigUrl: '/static/img/big-item1.png',
						data: [{
								imgUrl: '/static/img/small-item1.jpg'
							},
							{
								imgUrl: '/static/img/small-item2.jpg'
							},
							{
								imgUrl: '/static/img/small-item3.jpg'
							},
							]
					}]
				},
				{
					type: "commodityList",
					data: [{
							id: 1,
							imgUrl: '/static/img/commodity1.png',
							name: '大绒毛衣',
							pprice: '299',
							oprice: '199',
							discount: '12',
						},
						{
							id: 2,
							imgUrl: '/static/img/commodity2.png',
							name: '大绒毛衣',
							pprice: '399',
							oprice: '199',
							discount: '20',
						},
					]
				},
				{
					type: 'Hot',
					data: [

					]
				}
			],
			//data.data end
		}
	})
})

module.exports = router;