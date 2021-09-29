<template>
	<view class="pick-list">
		<good-pick></good-pick>
		<view class="add" @tap="ceBtn">
			
		</view>
	</view>
</template>

<script>
	import goodPick from '../../components/good-pick.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			goodPick
		},
		methods: {
			ceBtn(){
				console.log(111)
			}
		}
	}
</script>

<style>
.add{
	width: 100rpx;
	height: 20rpx;
	background-color: #007AFF;
}
</style>
