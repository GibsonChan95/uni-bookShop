<template>
	<view class="order-list">
		<view class="line"></view>
		<view class="title">我的订单</view>
		<view class="manage-box">
			<view class="manage-items" v-for="(item,index) in oderIcon" :key="index">
				<view class="icon-box">
					<text :class="item.icon"></text>
					<view class="items-text">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"order-manage",
		data() {
			return {
				oderIcon:[
					{
						title:"买书订单",
						icon:"iconfont icon-bags",
					},{
						title:"待付款",
						icon:"iconfont icon-qianbao",
					},{
						title:"待发货",
						icon:"iconfont icon-daifahuo",
					},{
						title:"待收货",
						icon:"iconfont icon-daishouhuo",
					},{
						title:"退款/售后",
						icon:"iconfont icon-shouhou",
					},
				]
			};
		}
	}
</script>

<style scoped>
	.title{
		margin: 0 20rpx;
	}
	.line{
		height: 4rpx;
		width: 720rpx;
		background-color: #EEEEEE;
		margin: 20rpx auto;
	}
	.manage-box{
		width: 720rpx;
		height: 200rpx;
		background-color: #FFFFFF;
		margin: 20rpx 15rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		border-radius: 20rpx;
	}
	.manage-items{
		text-align: center;
	}
	.icon-box{
		color: #AAAAAA;
	}
	.icon-box text{
		font-size: 70rpx;
		line-height: 100rpx;
	}
	.items-text{
		margin-top: 10rpx;
		font-size: 16rpx;
	}
</style>
