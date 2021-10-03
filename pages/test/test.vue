<template>
	<view class="content">
		<scroll-view scroll-y="true" :scroll-into-view="intoindex" style="height: 300px;">
			<view class="caa">
				
			</view>
			<view class="add">
				<view class="pay-area">
					<view v-for="(item,index) in content" :key='index' :id='"text"+index'>{{item+index}}</view>
				</view>
			</view>
		</scroll-view>
		<button type="primary" @tap="scroll">跳</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: ["珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮",
					"奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮",
					"奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮",
					"奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮",
					"奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮",
					"奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮",
					"奶茶三兄弟"
				],
				intoindex: '',
				num:10 //动态模拟需要跳到的位置
			}
		},
		onLoad() {

		},
		methods: {
			scroll() {
				this.num+=3
				this.$nextTick(()=> {
					this.intoindex = "text" + this.num
					console.log(this.intoindex)
				});
				this.intoindex=''  //不清空再次跳到锚点位置会不起作用
			}
		}
	}
</script>

<style>
	.caa{
		width: 750rpx;
		height: 500rpx;
	}
</style>
