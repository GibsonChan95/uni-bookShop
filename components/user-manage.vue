<template>
	<view class="user-manage">
		<view class="manage-box">
			<view class="manage-items" v-for="(item,index) in manageIcon" :key="index">
				<view class="icon-box" :style="{'background':item.color}">
					<text :class="item.icon"></text>
					<view class="items-text">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"user-manage",
		data() {
			return {
				manageIcon:[
					{
						title:"收藏夹",
						color:"#F887BA",
						icon:"iconfont icon-3aixin"
					},
					{
						title:"积分商城",
						color:"#FFAE52",
						icon:"iconfont icon-store_icon"
					},{
						title:"谷鸭圈",
						color:"#C965F7",
						icon:"iconfont icon-iconfontquanzi"
					},{
						title:"待售书籍",
						color:"#60CB88",
						icon:"iconfont icon-shoucangshuji"
					},{
						title:"足迹",
						color:"#4CB6FF",
						icon:"iconfont icon-wodezj"
					}
					
				]
			};
		}
	}
</script>

<style>
.manage-box{
	width: 720rpx;
	height: 200rpx;
	background-color: #FFFFFF;
	border-radius: 80rpx;
	margin: 0 15rpx;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}
.manage-items{
	text-align: center;
}
.icon-box{
	width: 100rpx;
	height: 100rpx;
	border-radius: 50rpx;
}
.icon-box text{
	font-size: 60rpx;
	color: #FFFFFF;
	line-height: 100rpx;
}
.items-text{
	margin-top: 10rpx;
	font-size: 25rpx;
}
</style>
