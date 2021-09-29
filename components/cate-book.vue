<template>
	<view class="cate-book">
		<view class="cate-title">
			<scroll-view scroll-x="true" class="cate-title-x">
				<view class="active">
					<text>推荐</text>
					<view>精选必看</view>
				</view>
				<view class="line"></view>
				<view class="cate-title-item">
					<text>热销</text>
					<view>畅销书</view>
				</view>
				<view class="line"></view>
				<view class="cate-title-item">
					<text>梦想</text>
					<view>年轻无极限</view>
				</view>
				<view class="line"></view>
				<view class="cate-title-item">
					<text>儿童</text>
					<view>启蒙教育</view>
				</view>
				<view class="line"></view>
				<view class="cate-title-item">
					<text>名人</text>
					<view>名人传记</view>
				</view>
				<view class="line"></view>
				<view class="cate-title-item">
					<text>字典</text>
					<view>中英词典</view>
				</view>
				<view v-if="false" class="line"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"cate-book",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.cate-book{
		background-color: white;
		margin-top: 20rpx;
	}
	.cate-title{
		white-space: nowrap;
		overflow: hidden;
	}
	.cate-title-x{
		width: 100%;
		overflow: hidden;
	}
	.cate-title-item{
		display: inline-block;
		text-align: center;
		padding: 10rpx 15rpx;
	}
	.cate-title-item view{
		font-size: 26rpx;
		padding: 0 8rpx;
	}
	.line{
		background-color: #E7EAED;
		width: 1rpx;
		height: 70rpx;
		display: inline-block;
	}
	.active{
		display: inline-block;
		text-align: center;
		padding: 10rpx 15rpx;
	}
	.active text{
		color: #E83B37;
	}
	.active view{
		background-color: #FBBC37;
		color: #FFFFFF;
		font-size: 26rpx;
		padding: 0 8rpx;
	}
</style>
