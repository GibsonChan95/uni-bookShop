import axios from 'axios';
import qs from 'qs';

//创建axios实例
const http = axios.create({
	baseUrl:'http://127.0.0.1:3000',
	//请求超时设置
	
	timeout:5000
})

//请求拦截器
http.interceptors.request.use(config =>{
	//请求前做点什么
	if(!config.data){
		config.data = {};
	}
	console.log(config)
	//设置公共参数
	console.log(qs.stringify(config.data));
	return config;
},error =>{
	//处理请求错误
	console.log(error);
	return Promise.reject(error);
})

//响应拦截器
http.interceptors.response.use(response =>{
	return response;
},error =>{
	console.log('error:' + error);
	return Promise.reject(error);
})

export default http;