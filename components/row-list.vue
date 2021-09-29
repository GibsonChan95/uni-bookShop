<template>
	<view id="row-list">
		<view class="row-box">
			<view class="row-box-up">
				<view class="box-up-left">必备教材</view>
				<view class="box-up-right">
					更多
					<text>&gt;</text>
				</view>
			</view>
			<view class="row-box-under">
				<scroll-view scroll-x="true" class="row-box-x">
					<view class="box-under">
						<view class="box-under-img">
							<image src="../static/logo.png" mode=""></image>
						</view>
						<view class="box-under-price">
							<text class="under-original">￥4.40</text>
							<text class="under-sale">￥21.00</text>
						</view>
						<view class="box-under-name">
							<text>马克思理论基础</text>
						</view>
					</view>
					<view class="box-under">
						<view class="box-under-img">
							<image src="../static/logo.png" mode=""></image>
						</view>
						<view class="box-under-price">
							<text class="under-original">￥4.40</text>
							<text class="under-sale">￥21.00</text>
						</view>
						<view class="box-under-name">
							<text>马克思理论基础</text>
						</view>
					</view>
					<view class="box-under">
						<view class="box-under-img">
							<image src="../static/logo.png" mode=""></image>
						</view>
						<view class="box-under-price">
							<text class="under-original">￥4.40</text>
							<text class="under-sale">￥21.00</text>
						</view>
						<view class="box-under-name">
							<text>马克思理论基础</text>
						</view>
					</view>
					<view class="box-under">
						<view class="box-under-img">
							<image src="../static/logo.png" mode=""></image>
						</view>
						<view class="box-under-price">
							<text class="under-original">￥4.40</text>
							<text class="under-sale">￥21.00</text>
						</view>
						<view class="box-under-name">
							<text>马克思理论基础</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"row-list",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.row-box{
		margin: 0 auto;
		width: 720rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		padding: 10rpx 0;
	}
	//上部文字
	.row-box-up{
		display: flex;
		justify-content: space-between;
		margin: 20rpx 30rpx;
	}
	.box-up-left{
		font-size: 36rpx;
	}
	.box-up-right{
		color: #898C8A;
		font-size: 20rpx;
	}
	//中部图片区域
	.row-box-under{
		height: 330rpx;
		white-space: nowrap;
		overflow: hidden;
	}
	.row-box-x{
		width: 96%;
		margin: 0 auto;
	}
	.box-under{
		display: inline-block;
		background-color: white;
		width: 220rpx;
		text-align: center;
		margin-right: 15rpx;
	}
	.box-under-img image{
		width: 200rpx;
		height: 250rpx;
		
	}
	.box-under-price{}
	.under-original{
		color: red;
		font-size: 32rpx;
		}
	.under-sale{
		color: #DEE1E6;
		text-decoration: line-through;
		font-size: 26rpx;
	}
</style>
