<template>
	<view class="user-info">
		<my-head title="个人中心"></my-head>
	<view class="container">
			<user-top></user-top>
			<user-manage></user-manage>
			<order-manage></order-manage>
			<rows-item></rows-item>
		</view>
	</view>
</template>

<script>
	import '@/common/iconfont.css';
	import myHead from '../../components/myhead.vue'
	import userTop from '../../components/user-top.vue'
	import userManage from '../../components/user-manage.vue'
	import orderManage from '../../components/order-manage.vue'
	import rowsItem from '../../components/rows-item.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			myHead,
			userTop,
			userManage,
			orderManage,
			rowsItem
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
</style>
