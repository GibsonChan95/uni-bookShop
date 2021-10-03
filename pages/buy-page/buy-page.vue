<template>
	<view class="buy-page">
		<view v-if="scrollTop > 545" class="change-bar">
			<view class="bar-name" @tap="changeName(index)" :class="activeNum === index ? 'bar-active' : 'bar-name'"
				v-for="(item,index) in barName" :key="index">{{item}}</view>
		</view>
		<view class="container">
			<scroll-view scroll-y="true" :scroll-into-view="intoindex" @scroll="scrollChange" style="height:100vh;">
				<view class="show-dpt">
					<image src="../../static/logo.png" mode=""></image>
					<view class="dpt-name">会觉得非共和国肯定会</view>
					作者：<text class="dpt-author">鬼地方个</text>
				</view>
				<view class="line"></view>
				<view class="price-box">1111</view>
				<view class="sales-dpt">
					<view class="dis-card">
						<view class="">全场满5.8元包邮</view>
						<view class="card-box">领券</view>
					</view>
					<view class="line"></view>
					<view class="score-card">
						<view class="">购买可获得78豆</view>
						<view class="card-box"> > </view>
					</view>
				</view>
				<view class="under-content">
					<view class="change-bar">
						<view class="bar-name" v-for="(item,index) in barName" :key="index"
							:class="activeNum === index ? 'bar-active' : 'bar-name'" @tap="changeName(index)">{{item}}
						</view>
					</view>
					<view v-for="(item,index) in theName" :class="item" :id="'text'+index">
						书籍内容{{index}}{{boxHeight}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barName: ['书籍详情', '书籍留言', '书籍推荐'],
				activeNum: 0,
				scrollTop: null,
				boxHeight: [],
				theName: ['book-detail', 'book-conment', 'book-push'],
				intoindex: ''
			}
		},
		methods: {
			scrollChange(e) {
				this.scrollTop = e.detail.scrollTop
				if(this.scrollTop > 548 + this.boxHeight[0] + this.boxHeight[1] + 10){
					this.activeNum = 2
				}else if(this.scrollTop > 548 + this.boxHeight[0] + 5){
					this.activeNum = 1
				}else{
					this.activeNum = 0
				}
			},
			changeName(i) {
				this.activeNum = i
				//console.log(this.activeNum)
				//从当前位置到达目标位置
				this.$nextTick(() => {
					this.intoindex = "text" + this.activeNum
					//console.log(this.intoindex)
				});
				this.intoindex = '' //不清空再次跳到锚点位置会不起作用

			},
			changeBtn(){
				for(let i = 0; i < this.theName.length; i++){
				const query = uni.createSelectorQuery().in(this);
					query.select('.' + this.theName[i]).boundingClientRect(data => {
						this.boxHeight.push(data.height)
						console.log(this.boxHeight)
					}).exec();
				}
			}
		},
		mounted() {
			this.changeBtn()
		}
	}
</script>

<style>
	.buy-page {
		width: 750rpx;
		margin: 0;
		padding: 0;
	}

	.show-dpt {
		width: 100%;
		text-align: center;
		background-color: #FFFFFF;
		padding: 20rpx 0;
	}

	.show-dpt image {
		width: 360rpx;
	}

	.dpt-name {
		font-size: 38rpx;
		font-weight: 600;
		margin: 20rpx 0;
	}

	.dpt-author {
		text-decoration: underline;
		margin-bottom: 30rpx;
	}

	.price-box {
		width: 100%;
		margin-top: ;
		height: 100rpx;
		line-height: 100rpx;
		background-color: #FFFFFF;
	}

	.line {
		width: 675rpx;
		height: 4rpx;
		padding-left: 37.5rpx;
	}

	.sales-dpt {
		width: 100%;
	}

	.dis-card {
		margin-top: 10rpx;
		background-color: #FFFFFF;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
	}

	.score-card {
		background-color: #FFFFFF;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
	}

	.card-box {
		margin-left: 380rpx;
	}

	.under-content {
		width: 750rpx;
	}

	.change-bar {
		width: 100%;
		height: 100rpx;
		margin: 10rpx 0;
		background-color: #FFFFFF;
		line-height: 90rpx;
		display: flex;
		justify-content: space-between;
	}

	.bar-name {
		padding: 0 20rpx;
	}

	.bar-active {
		padding: 0 20rpx;
		border-bottom: 10rpx solid red;
	}

	.book-detail {
		width: 100%;
		height: 1500rpx;
		background-color: #FFFFFF;
	}

	.book-conment {
		width: 100%;
		height: 200rpx;
		background-color: #FFFFFF;
		margin: 10rpx 0;
	}

	.book-push {
		width: 100%;
		height: 2000rpx;
		background-color: #FFFFFF;
	}
</style>
