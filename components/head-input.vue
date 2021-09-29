<template>
	<view class="head-input">
		<!-- 搜索框部分 -->
		<view class="index-search">
			<text class="iconfont icon-fangdajing"></text>
			<view>搜索书籍</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"head-input",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	//搜索框部分
	.index-search {
		width: 80%;
		display: flex;
		align-items: center;
		margin: 20rpx;
		height: 70rpx;
		background: #EEEEEE;
		border-radius: 50rpx;
		z-index: 3;
		position: absolute;
		overflow: hidden;
	}
	.index-search text {
		font-size: 40rpx;
		margin-left: 28rpx;
		margin-right: 26rpx;
		color: #4B9B84;
	}
	.index-search view {
		font-size: 28rpx;
		color: #4B9B84;
		flex: 1;	
	}
</style>
