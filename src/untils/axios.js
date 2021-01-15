
import axios from 'axios'
const baseURL = 'http://localhost:8000'
import { Toast } from 'vant';
const instance = axios.create({
    baseURL,
    timeout: 7000,
    headers: {}
  })
  // 封装请求拦截器（是请求被发出去之前）
instance.interceptors.request.use(function (config) {
    
    // 在请求被发出去之前做一些事儿
    // 加 token 鉴权
    config.headers.Authorization = localStorage.getItem('token')
    
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  
  // 封装响应拦截器
  instance.interceptors.response.use(function (response) {
    
    // 在响应数据回来之前做一些事儿
    // 要根据http状态码判断请求是否成功，如果不成功要提示用户
    // 要根据业务状态码对数据进行过滤
    let res = null
    //当status 为200，调接口成功  ，response有所有信息，res为使用方法调接口，res能获取到的参数，response过滤后给res

    if(response.status==200){
      if(response && response.data){
        const err=response.data.err
        switch(err){
          case 0:
            res=response.data.data
            break
            case -1:
          // 当token失效时，后端会返回 err=-1业务状态码
          window.location.href = '/#/user/login'
               break
              default :
            Toast(response.data.msg)
        }
      }
      
    }
    
    // if(response && response.data){
    //   const err=response.data.err 
    //   switch(err){
    //     case 0:
    //       res = response.data.data
    //       break
    //       case -1:
    //         window.location.href="/#/login"
    //         break
    //         default:
    //           Toast(response.data.msg)

    //   }
    // }
  return res
  
  }, function (error) {
    return Promise.reject(error)
  })
  
  export default instance
  
