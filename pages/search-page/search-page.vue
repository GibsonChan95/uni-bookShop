<template>
	<view class="search-page">
		<my-head title="搜索" :icon = "true"  @goHome ="homeGo" @goBack="backGo"></my-head>
		<view class="input-box">
				<!-- 搜索框部分 -->
			<view class="index-search">
				<text class="iconfont icon-fangdajing"></text>
				<input placeholder="搜索书籍" v-model="inputVal"></input>
			</view>
			<view class="search-btn" @tap="btnSearch">搜索</view>
		</view>
		<view class="search-history" :style="{height: widthNum+'rpx'}">
			<view class="his-top">
				<view class="his-title">搜索历史</view>
				<view class="his-del" @tap="clearHis">清空</view>
			</view>
			<view class="his-box">
				<view class="his-box-item" v-text="" id="item-text" 
				v-for="(item,index) in hisItem" :key = "index">{{item}}</view>
			</view>
		</view>
		<view class="space">
			<view class="his-btn" v-text="widthNum === 500 ? newDiv :originalDiv" @tap="btnHis"></view>
		</view>
	</view>
</template>

<script>
	import myHead from '@/components/myhead.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				originalDiv:'展开',
				newDiv:'折叠',
				flag:true,
				widthNum:null
				}
		},
		components:{
			myHead
		},
		methods: {
			btnHis(){
				if(this.flag){
					this.widthNum = 500
					this.flag = !this.flag
				}else{
					this.widthNum = 200
					this.flag = !this.flag
				}
			},
			clearHis(){
				uni.showModal({
					title:"确认删除？",
					success: (res) => {
						if(res.confirm){
							this.hisItem = []
						}else{
							return
						}
					}
				})
				console.log(this.hisItem)
				console.log(this.inputVal)
			},
			homeGo(){
				uni.switchTab({
					url:"/pages/index/index",
				})
				
			},
			backGo(){
				uni.navigateBack({
					
				})
			},
			btnSearch(){
				this.$store.commit('searchBtn')
			},
			//小程序不兼容
			// getPageId(){
			// 	let url = getCurrentPages()
			// 	let id = null
			// 	if(url.indexOf('?') !== -1){
			// 		id = parseInt(url.substr(url.indexOf('?') + 4))
			// 		this.inputVal = this.hotSearch[id]
			// 		this.btnSearch()
			// 	}
			// }
		},
		computed:{
			inputVal:{
				//防止页面更改vuex的数据时报错
				get(){
					return this.$store.state.inputVal
				},
				set(newVal){
					this.$store.state.inputVal = newVal
				}
			},
			hisItem:{
				get(){
					return this.$store.state.hisItem
				},
				set(newItem){
					this.$store.state.hisItem = newItem
				}
			},
			// hotSearch(){
			// 	return this.$store.state.hotSearch
			// }
			
			//写成辅助函数形式
			...mapState(['hotSearch'])
		},
		onShow() {
			this.getPageId()
		},
		onLoad() {
			
		},
		onReady() {
			
		}
	}
</script>

<style scoped>
	.search-page{
		width: 750rpx;
		height: 100vh;
	}
	.input-box{
		margin: 10rpx 0;
		width: 100%;
		height: 120rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.search-btn{
		margin-left: 625rpx;
		width: 120rpx;
		height: 68rpx;
		line-height: 68rpx;
		text-align: center;
		background-color: #4B9B84;
		border-radius: 20rpx;
		color: #FFFFFF;
	}
	//搜索框部分
	.index-search {
		width: 80%;
		display: flex;
		align-items: center;
		margin: 0rpx 15rpx;
		height: 70rpx;
		background: #EEEEEE;
		border-radius: 50rpx;
		z-index: 3;
		position: absolute;
		/* overflow: hidden; */
	}
	.index-search text {
		font-size: 40rpx;
		margin-left: 28rpx;
		margin-right: 26rpx;
		color: #4B9B84;
	}
	.index-search input {
		font-size: 28rpx;
		color: #4B9B84;
		flex: 1;	
	}
	.search-history{
		width: 750rpx;
		height: 200rpx;
		background-color: #FFFFFF;
		overflow: hidden;
		position: relative;
	}
	.his-top{
		display: flex;
		justify-content: space-between;
		padding: 15rpx 28rpx;
	}
	.his-title{
		font-size: 28rpx;
	}
	.his-del{
		font-size: 20rpx;
		width: 64rpx;
		height: 32rpx;
		line-height: 32rpx;
		background-color: #FF0000;
		text-align: center;
		color: #FFFFFF;
		border-radius: 20rpx;
	}
	.his-box{
		display: flex;
		flex-wrap: wrap;
	}
	.his-box-item{
		height: 50rpx;
		line-height: 50rpx;
		background-color: #EEEEEE;
		color: #9E9E9E;
		border-radius: 25rpx;
		padding: 0 8rpx;
		margin: 5rpx 5rpx;
	}
	.his-btn{
		width: 80rpx;
		height: 40rpx;
		line-height: 40rpx;
		background-color: #999999;
		position: absolute;
		bottom: -40rpx;
		left: 335rpx;
		color: #CCCCCC;
		text-align: center;
		font-size: 26rpx;
		border-radius: 0 0 25rpx 25rpx;
	}
	.space{
		width: 750rpx;
		position: absolute;
	}
</style>
