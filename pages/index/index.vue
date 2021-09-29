<template>
	<view class="index">
		<!-- 自定义顶部组件 -->
		<my-head title="小谷鸭" :scrollTop='scrollTop' :icon='false'></my-head>
		<view class="head-input" v-if="scrollTop > 50">
			<view class="head-title">小谷鸭</view>
			<view class="index-search" @tap="toSearch">
				<text class="iconfont icon-fangdajing"></text>
				<view>搜索书籍</view>
			</view>
		</view>
		<view class="head-cate" v-if="scrollTop > 730">
			<cate-book></cate-book>
		</view>
		<view class="container">
			<scroll-view scroll-top="100" scroll-y="true" @scroll="scrollChange">
				<view class="index-banner">
					<!-- 搜索框部分 -->
					<search-input @toBtn="toSearch"></search-input>
					<!-- 轮播图部分 -->
					<swiper class="index-swiper" :indicator-dots="true" :autoplay="true" :interval="2500" :duration="1000">
						<swiper-item v-for="(item,index) in swiperList" :key="index">
							<view class="swiper-item">
								<image :src="item.src" mode="aspectFill"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<!-- 横向滑动部分 -->
				<view class="index-sort">
					<text>热搜</text>
					<scroll-view show-scrollbar="false" scroll-x="true" class="index-sort-x">
							<view @tap="hotSearchBtn(index)" v-for="(Hotitem,index) in hotSearch" 
							:key="index">{{Hotitem}}</view>
					</scroll-view>
				</view>
				<!-- 图标分类 -->
				<view class="index-category">
					<view class="index-category-item" @tap="bookBtn(index)" v-for="(item,index) in cateItem" :key="index">
						<view class="category-icons" :style="{'background-color':item.color}">
							<text :class="item.icon"></text>
						</view>
						<text class="category-text">{{item.name}}</text>
					</view>
				</view>
				<!-- 滚动显示 -->
				<block>
					<view class="index-scroll-box">
						<view class="scroll-box-left">
							<text>图标</text>
							<image src="../../static/logo.png"></image>
							<text>网***字:</text>
						</view>
						<view class="scroll-box-middle">
							<text>1111111111111111111111111111111115555555555551112</text>
						</view>
						<view class="scroll-box-right">
							<text>&gt;</text>
						</view>
					</view>
				</block>
				<row-list></row-list>
				<cate-book></cate-book>
				<good-list></good-list>
			</scroll-view>
		</view>
		<!-- 防止h5页面中直接拉到底时头部不见 -->
		<view class="foot-box"></view>
	</view>
</template>

<script>
	import '@/common/iconfont.css';
	import myHead from '../../components/myhead.vue'
	import rowList from '../../components/row-list.vue'
	import cateBook from '../../components/cate-book.vue'
	import goodList from '../../components/good-list.vue'
	import searchInput from '../../components/search-input.vue'
	export default {
		data() {
			return {
				swiperList: [

					{
						name: '第一张',
						src: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.8tmhljAOVt9T1sG6cXzjIAHaDk?w=294&h=169&c=7&r=0&o=5&dpr=1.25&pid=1.7'
					},
					{
						name: '第二张',
						src: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.JxAjixNx9PFThpovjq8lswHaDk?w=325&h=169&c=7&r=0&o=5&dpr=1.25&pid=1.7'
					},
					{
						name: '第三张',
						src: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.mcF6ZHB4Iu0HGqc7D0H9AgHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
					},
					{
						name: '第四张',
						src: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.2Ure3dC93AI6snnqe38XCQHaDt?w=305&h=175&c=7&r=0&o=5&dpr=1.25&pid=1.7'
					}
				],
				cateItem:[
					{
						name:'精选书单',
						icon:'iconfont icon-shoucangaixinxin',
						color:'#AEE086'
					},
					{
						name:'经典榜单',
						icon:'iconfont icon-huangguan',
						color:'#FEAAA1'
					},
					{
						name:'图书专题',
						icon:'iconfont icon-xunzhang',
						color:'#FFD254'
					},
					{
						name:'最新上架',
						icon:'iconfont icon-yooxi',
						color:'#FE8187'
					},
					{
						name:'文字',
						icon:'iconfont icon-biji',
						color:'#FFCCAA'
					},
					{
						name:'优惠券',
						icon:'iconfont icon-youhuiquan',
						color:'#FFA6BC'
					},
					{
						name:'4.9元专区',
						icon:'iconfont icon-goumai',
						color:'#FFD29E'
					},
					{
						name:'9.9元专区',
						icon:'iconfont icon-9kuai9',
						color:'#FBA1EE'
					},
					{
						name:'教材',
						icon:'iconfont icon-xueshimao',
						color:'#8EF8C2'
					},
					{
						name:'高校书单',
						icon:'iconfont icon-shudan',
						color:'#9FDAFF'
					}
				],
				scrollTop:null
			}
		},
		components: {
			myHead,
			rowList,
			cateBook,
			goodList,
			searchInput
		},
		onLoad() {
			
		},
		methods: {
			scrollChange(event){
				this.scrollTop = event.detail.scrollTop
				//console.log(event.detail)
			},
			toSearch(){
				uni.navigateTo({
					url:"/pages/search-page/search-page"
				})
			},
			hotSearchBtn(i){
				uni.navigateTo({
					url:'/pages/search-page/search-page?id='+i
				})
				this.$store.commit('searchBtn')
			},
			bookBtn(i){
				console.log(i)
				let url = ''
				switch(i){
					case 0:
					url = '/pages/pick-list/pick-list'
					break;
					
					default:
					break;
				}
				if(url){
					uni.navigateTo({
						url:url
					})
				}else{
					uni.showToast({
						title:'功能未开发，敬请期待',
						icon:'none'
					})
				}
			}
		},
		computed:{
			hotSearch(){
				return this.$store.state.hotSearch
			}
		}
	}
</script>

<style scoped>
	.head-title{
		margin: 0 50rpx;
		color: #008000;
	}
	.head-input{
		width: 750rpx;
		height: 170rpx;
		background-color: #FFFFFF;
		z-index: 800;
		position: fixed;
	}
	.head-cate{
		width: 750rpx;
		height: 70rpx;
		background-color: #FFFFFF;
		z-index: 800;
		position: fixed;
		top: 290rpx;
	}
	.index-swiper {
		width: 100%;
		height: 600rpx;
	}
	.swiper-item image {
		width: 100%;
		height: 600rpx;
	}
	//搜索框部分
	.index-search {
		width: 90%;
		display: flex;
		align-items: center;
		margin: 40rpx 5%;
		height: 70rpx;
		background: rgba(0, 0, 0, 0);
		border-radius: 50rpx;
		z-index: 3;
		border: 5rpx solid #529F89;
		position: absolute;
		overflow: hidden;
	}
	.index-search text {
		font-size: 40rpx;
		margin-left: 28rpx;
		margin-right: 26rpx;
		color: #529F89;
	}
	.index-search view {
		font-size: 28rpx;
		flex: 1;	
		color: #529F89;
	}
	/* 轮播图 */
	.index-sort{
		height: 90rpx;
		background-color:#FFFFFF;
		/* 不让文字换行 */
		white-space: nowrap;
		display: flex; 
		align-items: center; 
		position: relative;
		}
	.index-sort text{
		color: green;
		margin: 0 30rpx;
	}
	.index-sort-x{
		height: 100%;
		white-space: nowrap;
		width: 100%;
		line-height: 90rpx;
		/* 默认溢出的为隐藏状态，解决拉动滚动条时显示不全 */
		overflow: hidden; 
	}
	.index-sort-x view{
		/* 显示在一行 */
		display: inline-block; 
		height: 50rpx;
		line-height: 50rpx;
		margin: 0 20rpx;
		padding: 2rpx 15rpx;
		color: #008000;
		border: 2rpx solid #008000;
		border-radius: 30rpx;
	}
	//图标分类
	.index-category{
		display: flex;
		flex-wrap: wrap;
		/* 让换行后的距离左右对等 */
		justify-content: space-between;
	}
	.index-category-item{
		margin: 15rpx 15rpx;
		text-align: center;
	}
	.index-category-item view{
		width: 107rpx;
		height: 107rpx;
		text-align: center;
		line-height: 100rpx;
		border-radius: 40rpx;
		
	}
	.category-icons text{
		font-size: 60rpx;
		color: #F8F8F8;
	}
	.category-text{
		font-size: 18rpx;
	}
	//文字滚动部分
	.index-scroll-box{
		display: flex;
		line-height: 90rpx;
		height: 90rpx;
		font-size: 24rpx;
		background-color: #EEEEEE;
		margin: 15rpx;
		border-radius: 90rpx;
	}
	.scroll-box-left{
		display: flex;
		display: table-cell;
		width: 240rpx;
		line-height: 90rpx;
	}
	.scroll-box-left text{
		margin: 0 12rpx;
	}
	.scroll-box-left image{
		width: 50rpx;
		height: 50rpx;
		border-radius: 100%;
		vertical-align: middle;
	}
	.scroll-box-middle{
		width: 410rpx;
		overflow: hidden;
		background-color: 
	}
	.scroll-box-right{
		margin: 0 auto;
	}
</style>
