<template>
	<view class="my-head">
		<view class="my-head-icon" v-if="icon">
			<text class="iconfont icon-31fanhui1" @tap="handleToBack"></text>|<text class="iconfont icon-index-copy-copy" @tap="handleToHome"></text>
		</view>
		<view v-if="scrollTop < 50 || !scrollTop">{{title}}</view>
	</view>
</template>

<script>
	export default {
		name:"musichead",
		data() {
			return {
				
			};
		},
		methods:{
			handleToBack(){
				this.$emit("goBack")
			},
			handleToHome(){
				this.$emit("goHome")
			}
		},
		props:['title','icon','scrollTop']
	}
</script>

<style scoped>
	.my-head{
		width: 100%;
		height: 60px;
		line-height: 78px;
		font-size: 16px;
		background-color: #FFFFFF;
		text-align: center;
		position: relative;
	}
	.my-head-icon{
		position: absolute;
		left: 8px;
		top: 26px;
		width: 80px;
		height: 28px;
		background: rgba(238,238,238,0.4);
		line-height: 28px;
		border-radius: 14px;
		display: flex;
		//水平分布
		justify-content: space-evenly;
		color: #808080;
	}
	.my-head-icon text{
		
	}
	.head{
		width: 750rpx;
		height: 200rpx;
		background-color: #FFFFFF;
	}
</style>
