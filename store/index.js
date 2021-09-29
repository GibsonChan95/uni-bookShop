import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		hisItem:[],
		hotSearch:['日语','六级','英语','四级','中医','线性代数'],
		inputVal:''
	},
	mutations:{
		searchBtn(state){
			if(state.inputVal === ''){
				return
			}else{
				let res = state.inputVal
				let resArr = state.hisItem
				for(let i = 0; i < resArr.length; i++){
					if(resArr[i] === res){
						resArr.splice(i,1)
					}
				}
				resArr.unshift(res)
				state.inputVal = ''
			}
		},
		hotSearchBtn(state,data){
			state.hotSearch.forEach(item=>{
				if(item = data){
					
				}
			})
			}
	},
	getters:{
		// saveHis(state){
		// localStorage.getItem('searchBtn') ? state.hisItem = localStorage.getItem('searchBtn') : ''	
		// return state.hisItem
		//  }
	},
	actions:{}
})
export default store