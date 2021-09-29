<template>
	<view class="select-box">
		<view class="all-select">
			<view class="all-box">
				<view class="select-btn">
					<label class="radio">
						<radio value=""  color="#E83B37"/><text>全选</text>
					</label>
				</view>
			</view>
			<view class="pay-area">
				<view class="total-price">￥88.00</view>
				<text>非偏远地区 满5.8元包邮</text>
			</view>
			<view class="pay-btn">结 算</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"all-select",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	
	.all-select{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 26rpx;
		color: #FFFFFF;
	}
	.all-box{
		margin-left: 20rpx;
	}
	.pay-area{
		width: 360rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
	}
	.total-price{
		font-size: 40rpx;
		font-weight: bold;
	}
	.pay-area text{
		font-size: 28rpx;
		font-weight: 300;
	}
	.pay-btn{
		width: 180rpx;
		height: 80rpx;
		background-color: #FFFFFF;
		margin: 0 18rpx;
		color: #E83B37;
		text-align: center;
		line-height: 80rpx;
		font-size: 40rpx;
		border-radius: 16rpx;
	}
</style>
