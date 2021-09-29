<script>
	import '@/common/iconfont.css';
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	.container{
		width: 100%;
		height: calc(100vh - 60px);
		overflow: hidden;
	}
	
	.container scroll-view{
		height: 100%;
	}
	//全选结算框
	.select-box{
		position: fixed;
		left: 15rpx;
		bottom: 0rpx;
		height: 140rpx;
		width: 720rpx;
		background-color: #E83B37;
		border-radius: 20rpx 20rpx 0 0;
		/* 在h5中，不被tabbar遮住 */
		bottom: var(--window-bottom);
	}
	page{
		width: 750rpx;
		background-color: #ECF7F3;
		margin: 0;
		padding: 0;
	}
</style>
