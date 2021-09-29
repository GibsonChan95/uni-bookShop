<template>
	<view class="user-top">
		<view class="user-head">
			<image src="../static/logo.png" mode=""></image>
		</view>
		<view class="user-member">
			<view class="user-name">我的名字</view>
			<view class="member-info">
				<view class="member-1">谷圈新芽</view>
				<view class="member-line"></view>
				<view class="member-2">会员积分 38 &gt;</view>
			</view>
		</view>
		<view class="sign-in">
			<image src="../static/sign-in.png" mode=""></image>
			<view class="sign-btn">签到</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"user-top",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.user-top{
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 40rpx 0;
	
}
.user-head{
	width: 140rpx;
	height: 140rpx;
	margin: 0 20rpx;
}
.user-head image{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.user-member{
}
.user-name{
	font-size: 36rpx;
	margin: 10rpx 0;
}
.member-info{
   display: flex;
   align-items: center;
}
.member-1{
	width: 138rpx;
	height: 40rpx;
	background-color: #FABD37;
	text-align: center;
	margin: 10rpx 0;
	color: #FFFFFF;
	font-size: 24rpx;
	border-radius: 40rpx;
	line-height: 40rpx;
}
.member-line{
	height: 35rpx;
	width: 1rpx;
	background-color: #AAAAAA;
	margin: 0 20rpx;
}
.member-2{
	font-size: 30rpx;
	color: #999999;
}
.sign-in{
	text-align: center;
	margin-left: 30rpx;
}
.sign-in image{
	width: 80rpx;
	height: 80rpx;
}
.sign-btn{
	width: 110rpx;
	height: 40rpx;
	background-color: #FE632E;
	color: #FFFFFF;
	border-radius: 40rpx;
	font-size: 28rpx;
}
</style>
