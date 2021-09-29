<template>
	<view class="cart-box">
		<my-head title="购物车"></my-head>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="cart">
					<view class="cart-item">
						<view class="item-left">
							<label class="item-radio">
								<radio class="radio" @click="change" :checked="flag" color="#E83B37" />
							</label>
							<view class="item-pic">
								<image src="../../static/logo.png" mode=""></image>
							</view>
						</view>
						<view class="item-right">
							<view class="item-describe">
								<view class="item-title">
									和声学教程哈师范仅仅是官方
								</view>
								<view class="del">
									×
								</view>
							</view>
							<view class="look-level">
								品相：全新
							</view>
							<view class="level-discount">
								<view class="line"></view>
								<view class="discount-rate">
									3.4折
								</view>
								<view class="save-count">
									省36.50元
								</view>
							</view>
							<view class="item-total">
								<view class="item-price">￥28.88</view>
								<view class="item-count">
									<view class="sub">－</view>
									<view class="count">1</view>
									<view class="add">＋</view>
								</view>
							</view>
						</view>
					</view>
					<view class="cart-item">
						<view class="item-left">
							<label class="item-radio">
								<radio class="radio" @click="change" :checked="flag" color="#E83B37" />
							</label>
							<view class="item-pic">
								<image src="../../static/logo.png" mode=""></image>
							</view>
						</view>
						<view class="item-right">
							<view class="item-describe">
								<view class="item-title">
									和声学教程哈师范仅仅是官方
								</view>
								<view class="del">
									×
								</view>
							</view>
							<view class="look-level">
								品相：全新
							</view>
							<view class="level-discount">
								<view class="line"></view>
								<view class="discount-rate">
									3.4折
								</view>
								<view class="save-count">
									省36.50元
								</view>
							</view>
							<view class="item-total">
								<view class="item-price">￥28.88</view>
								<view class="item-count">
									<view class="sub">－</view>
									<view class="count">1</view>
									<view class="add">＋</view>
								</view>
							</view>
						</view>
					</view>
					<view class="cart-item">
						<view class="item-left">
							<label class="item-radio">
								<radio class="radio" @click="change" :checked="flag" color="#E83B37" />
							</label>
							<view class="item-pic">
								<image src="../../static/logo.png" mode=""></image>
							</view>
						</view>
						<view class="item-right">
							<view class="item-describe">
								<view class="item-title">
									和声学教程哈师范仅仅是官方
								</view>
								<view class="del">
									×
								</view>
							</view>
							<view class="look-level">
								品相：全新
							</view>
							<view class="level-discount">
								<view class="line"></view>
								<view class="discount-rate">
									3.4折
								</view>
								<view class="save-count">
									省36.50元
								</view>
							</view>
							<view class="item-total">
								<view class="item-price">￥28.88</view>
								<view class="item-count">
									<view class="sub">－</view>
									<view class="count">1</view>
									<view class="add">＋</view>
								</view>
							</view>
						</view>
					</view>
					<view class="your-like">
						<view class="line-left"></view>
						<view class="like-title">猜你喜欢</view>
						<view class="line-right"></view>
					</view>
					<good-list class="like-list"></good-list>
					<all-select />
				</view>
			</scroll-view>
		</view>
	</view>

</template>

<script>
	import myHead from '../../components/myhead.vue'
	import goodList from '../../components/good-list.vue'
	import allSelect from '../../components/all-select.vue'
	export default {
		data() {
			return {
				flag: false
			}
		},
		components: {
			myHead,
			goodList,
			allSelect
		},
		methods: {
			change() {
				this.flag = !this.flag
			}
		}
	}
</script>

<style scoped>
	.cart {
		width: 750rpx;
		height: 100%;
	}

	.cart-item {
		background-color: #FFFFFF;
		width: 720rpx;
		margin: 15rpx;
		display: flex;
	}

	//购物车左侧
	.item-left {
		display: flex;
		align-items: center;
	}

	.item-radio {
		margin-left: 20rpx;
	}

	.item-pic {
		background-color: #F9F9F9;
		width: 180rpx;
		text-align: center;
		margin: 20rpx 0;
		border-radius: 10rpx;
	}

	.item-pic image {
		width: 160rpx;
		height: 220rpx;
	}

	//购物车右侧
	.item-right {
		width: 100%;

	}

	.item-describe {
		display: flex;
		justify-content: end;
	}

	.item-title {
		margin: 10rpx 20rpx;
	}

	.del {
		width: 50rpx;
		height: 80rpx;
		margin-right: 20rpx;
		text-align: center;
		line-height: 60rpx;
		font-size: 60rpx;
		font-weight: 300;
		color: #999999;
	}

	.look-level {
		margin: 20rpx;
		font-size: 30rpx;
		color: #666666;
	}

	.level-discount {
		display: flex;
		font-size: 26rpx;
		margin: 20rpx;
		width: 230rpx;
		height: 36rpx;
		line-height: 36rpx;
		border: 1rpx solid #FA9E90;
		border-radius: 5rpx;
	}

	.line {
		height: 100%;
		width: 2rpx;
		background-color: #FFFFFF;
	}

	.discount-rate {
		background-color: #FA9E90;
		padding: 0 10rpx;
		color: #FFFFFF;
	}

	.save-count {
		padding: 0 10rpx;
		color: #FA9E90;
	}

	.item-total {
		display: flex;
		justify-content: space-between;
	}

	.item-price {
		margin: 20rpx;
		color: #E83B37;
	}

	.item-count {
		display: flex;
		margin: 20rpx 35rpx;
		height: 60rpx;
		background-color: #F6F6F6;
		line-height: 60rpx;
		border-radius: 60rpx;
		color: #FFFFFF;
	}

	.count {
		font-size: 30rpx;
		width: 60rpx;
		text-align: center;
		color: #666666;
	}

	.sub {
		font-size: 40rpx;
		font-weight: bold;
		background-color: #E3E3E3;
		width: 60rpx;
		text-align: center;
		border-radius: 60rpx;
	}

	.add {
		font-size: 40rpx;
		font-weight: bold;
		background-color: #7ACCB5;
		width: 60rpx;
		text-align: center;
		border-radius: 60rpx;
	}

	.your-like {
		color: #cccccc;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 80rpx;
		margin-bottom: 50rpx;
	}

	.like-title {
		margin: 0 30rpx;
	}

	.line-left {
		width: 100rpx;
		height: 2rpx;
		background-color: #CCCCCC;
	}

	.line-right {
		width: 100rpx;
		height: 2rpx;
		background-color: #CCCCCC;
	}
</style>
