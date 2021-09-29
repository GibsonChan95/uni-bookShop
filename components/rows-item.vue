<template>
	<view class="rows-item">
		<view class="item-box">
			<view class="item-title">消息通知</view>
			<text class="iconfont icon-jiantouyou"></text>
			<view class="line"></view>
		</view>
		<view class="item-box">
			<view class="item-title">书来书往</view>
			<text class="iconfont icon-jiantouyou"></text>
			<view class="line"></view>
		</view>
		<view class="item-box">
			<view class="item-title">地址管理</view>
			<text class="iconfont icon-jiantouyou"></text>
			<view class="line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"rows-item",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.rows-item{
		width: 720rpx;
		height: 300rpx;
		background-color: #FFFFFF;
		margin: 0 auto;
		border-radius: 30rpx;
	}
	.item-box{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		width: 100%;
		height: 100rpx;
		border-radius: 30rpx;
		flex-wrap: wrap;
		color: #AAAAAA;
	}
	.item-box text{
		margin-right: 20rpx;
		line-height: 100rpx;
	}
	.item-title{
		margin: 0 30rpx;
		font-size: 30rpx;
	}
	.line{
		width: 680rpx;
		height: 1rpx;
		background-color: #EEEEEE;
		margin: 0 auto;
	}
</style>
