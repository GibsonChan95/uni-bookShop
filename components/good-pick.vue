<template>
	<view class="good-list">
		<view class="good-list-items" @tap="toPickGood(index)" v-for="(item,index) in titleArr" :key="index">
			<view class="good-pic">
				<image :src="item.cover" mode=""></image>
			</view>
			<view class="good-title">
				<text class="book-name">{{item.title}}</text></br>
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
				titleArr:[]
			};
		},
		methods:{
			async cateArr (){
				const h5Res = await uni.request({
					method:'GET',
					url:'/api/pick/list',
					success: res => {
						//for(let i = 0; i<)
						console.log(res.data)
						let myData = res.data
						for(let i = 0; i < myData.length;i++){
							console.log(myData[i].title)
							this.titleArr.push(myData[i])
						}
					},
					fail: error => {
						console.log(error)
					}
				})
				//h5解决跨域问题后，兼容小程序
				if(!h5Res){
					const wxRes = await uni.request({
						method:'GET',
						url:'http://127.0.0.1:3000/pick/list',
						success: res => {
							//for(let i = 0; i<)
							console.log(res.data)
							let myData = res.data
							for(let i = 0; i < myData.length;i++){
								console.log(myData[i].title)
								this.titleArr.push(myData[i])
							}
						},
						fail: error => {
							console.log(error)
						}
					})
				}
			},
			toPickGood(i){
				console.log(i)
				uni.navigateTo({
					url:'/pages/pick-page/pick-page?id='+i
				})
			}
		},
		created(){
			this.cateArr()
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
