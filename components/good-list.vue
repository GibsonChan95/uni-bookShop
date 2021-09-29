<template>
	<view class="good-list">
		<view class="good-list-items">
			<view class="good-pic">
				<image src="../static/logo.png" mode=""></image>
			</view>
			<view class="good-title">
				<text class="book-name">我惧怕成为这样“强硬”的菇凉</text></br>
				<text class="book-author">刘媛媛</text>
			</view>
			<view class="good-price">
				<text class="now-price">￥9.90</text>
				<view class="discount">2.6折</view>
				<text class="original-price">￥3899.00</text>
			</view>
		</view>
		<view class="good-list-items">
			<view class="good-pic">
				<image src="../static/logo.png" mode=""></image>
			</view>
			<view class="good-title">
				<text class="book-name">我惧怕成为这样“强硬”的菇凉</text></br>
				<text class="book-author">刘媛媛</text>
			</view>
			<view class="good-price">
				<text class="now-price">￥9.90</text>
				<view class="discount">2.6折</view>
				<text class="original-price">￥3899.00</text>
			</view>
		</view>
		<view class="good-list-items">
			<view class="good-pic">
				<image src="../static/logo.png" mode=""></image>
			</view>
			<view class="good-title">
				<text class="book-name">我惧怕成为这样“强硬”的菇凉</text></br>
				<text class="book-author">刘媛媛</text>
			</view>
			<view class="good-price">
				<text class="now-price">￥9.90</text>
				<view class="discount">2.6折</view>
				<text class="original-price">￥3899.00</text>
			</view>
		</view>
		<view class="end-line">
			<view class="line-left"></view>
			<view class="line-text">已经到底了</view>
			<view class="line-right"></view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"good-list",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.good-list{
	display: flex;
	margin: 20rpx 0;
	flex-wrap: wrap;
}
.good-list-items{
	margin-left: 20rpx;
	width: 345rpx;
}
.good-pic{
	width: 100%;
	height: 345rpx;
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15rpx;
}
.good-pic image{
	width: 200rpx;
	height: 250rpx;
}
.book-name{
	font-size: 30rpx;
	font-weight: 400;
}
.book-author{
	font-size: 26rpx;
	font-weight: 300;
	color: #999999;
}
.good-price{
	display: flex;
	align-items: center;
	position: relative;
}
.now-price{
	font-size: 28rpx;
	font-weight: 550;
	color: #E83B37;
}
.discount{
	font-size: 24rpx;
	margin-left: 14rpx;
	color: #E83B37;
	width: 70rpx;
	height: 30rpx;
	line-height: 30rpx;
	border: 1rpx solid #E83B37;
	text-align: center;
	border-radius: 10rpx;
}
.original-price{
	position: absolute;
	right: 0;
	font-size: 24rpx;
	color: #999999;
	text-decoration: line-through;
}
.end-line{
	width: 750rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 100rpx 0;
	color: #CECECE;
}
.line-left{
	width: 200rpx;
	height: 1rpx;
	background-color: #333333
}
.line-text{
	font-size: 30rpx;
	padding: 0 10rpx;
}
.line-right{
	width: 200rpx;
	height: 1rpx;
	background-color: #333333
}
</style>
