<template>
	<view class="search-input">
		<!-- 搜索框部分 -->
		<view class="index-search" @tap="toSearch">
			<text class="iconfont icon-fangdajing"></text>
			<view>搜索书籍</view>
		</view>
	</view>
</template>
<script>
	export default {
		name:"search-input",
		data() {
			return {
				
			};
		},
		methods:{
			toSearch(){
				this.$emit('toBtn','toSearch')
			}
		}
	}
</script>

<style scoped>
	//搜索框部分
	.index-search {
		width: 90%;
		display: flex;
		align-items: center;
		margin: 70rpx 5%;
		height: 70rpx;
		background: rgba(0, 0, 0, 0);
		border-radius: 50rpx;
		z-index: 3;
		border: 5rpx solid white;
		position: absolute;
		overflow: hidden;
	}
	.index-search text {
		font-size: 40rpx;
		margin-left: 28rpx;
		margin-right: 26rpx;
		color: #FFFFFF;
	}
	.index-search view {
		font-size: 28rpx;
		color: #FFFFFF;
		flex: 1;	
	}
</style>
