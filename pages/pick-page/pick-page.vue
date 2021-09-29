<template>
	<view class="pick-containner">
		<block v-for="(item,index) in coverInfo" :key = "index">
			<view class="pick-page" :style="{backgroundImage: `url(${item.cover})`}">
			</view>
			<image :src="item.cover" class="pick-cover" mode=""></image>
			<view class="pick-box">
				<text>{{item.title}}</text>
				<view class="">{{item.describe}}</view>
			</view>
		</block>
		<view class="book-box">
			<block v-for="(bookItem,index) in bookInfo" :key = "index">
				<view class="img-box">
					<image :src="bookItem.img" mode=""></image>
				</view>
				<view class="book-text">
					<text class="book-name">{{bookItem.name}}</text>
					<view class="book-author">{{bookItem.author}}</view>
					<view class="buy-book">
						<view class="now-price">￥{{(bookItem.original * bookItem.bookdec[0].dis) / 10}}</view>
						<view class="original-price">￥{{bookItem.original}}</view>
						<view class="book-add">加</view>
					</view>
				</view>
				<view class="line"></view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coverInfo: [],
				bookInfo:null,
				disPrice:null,
				pageId:null
			}
		},
		methods: {
			getPageId(){
				let pages = getCurrentPages()
				//获取当前页面的信息
				let page = pages[pages.length - 1]
				
				let id = parseInt(page.options.id)
				console.log(id)
				//console.log(isNaN(id))
				if(!isNaN(id)){
					this.pageId = id
				}
				//console.log(this.pageId)
				return this.pageId
			},
			async pickInfo() {
				const h5Res = await uni.request({
					method: 'GET',
					url:'/api/pick/list',
					success: res => {
						//console.log(res)
						//console.log(this.pageId)
						this.coverInfo.push(res.data[this.pageId])
						//console.log(this.coverInfo)
						this.bookInfo = res.data[this.pageId].child
						console.log(this.bookInfo)
					},
					fail: error => {
						console.log(error)
					}
				})
			}
		},
		onShow() {
			this.getPageId(),
			this.pickInfo()
		}
	}
</script>
<style scoped>
	.pick-page {
		position: relative;
		width: 750rpx;
		height: 100vh;

	}

	.pick-page {
		content: '';
		height: 50%;
		width: 100%;
		background: url(../../static/logo.png) no-repeat center center;
		background-size: cover;
		filter: blur(8rpx);
		-webkit-filter: blur(8rpx);
		position: absolute;
		transform: scale(1.01);
		opacity: 1;
		z-index: -1;
	}

	.pick-cover {
		font-size: 50rpx;
		opacity: 1;
		width: 249rpx;
		height: 333rpx;
		position: absolute;
		top: 30rpx;
		left: 20rpx;
	}

	.pick-box {
		position: absolute;
		width: 430rpx;
		left: 289rpx;
		top: 32rpx;
		color: #03436F;
	}

	.pick-box text {
		font-size: 36rpx;
	}

	.pick-box view {
		font-size: 28rpx;
		margin-top: 20rpx;
	}

	.book-box {
		position: absolute;
		width: 750rpx;
		background-color: #FFFFFF;
		top: 393rpx;
		display: flex;
		flex-wrap: wrap;
		border-radius: 28rpx 28rpx 0 0;
	}

	.img-box {
		width: 230rpx;
		height: 280rpx;
		margin: 20rpx 30rpx;
		background-color: #EEEEEE;
	}

	.img-box image {
		width: 90%;
		height: 100%;
		margin: auto;
		display: block;
	}

	.book-text {
		margin-top: 20rpx;
		width: 460rpx;
	}

	.book-name {
		font-size: 40rpx;
	}

	.book-author {
		font-size: 32rpx;
		color: #999999;
	}

	.buy-book {
		display: flex;
		margin-top: 140rpx;
	}

	.now-price {
		color: #E83B37;
		margin-right: 20rpx;
		font-size: 36rpx;
	}

	.original-price {
		color: #999999;
		text-decoration: line-through;
		margin-right: 20rpx;
		line-height: 48rpx;
	}

	.book-add {
		width: 50rpx;
		height: 50rpx;
		text-align: center;
		background-color: #7AC4B6;
		margin-left: 100rpx;
	}

	.line {
		width: 750rpx;
		height: .5rpx;
		background-color: #000;
	}
</style>
