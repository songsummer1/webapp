import axios from './axios'
export  function Getlist(params){
    return axios({ 
url: '/api/v1/jd/good/list',
method:"GET",
params
    })
}
export function Getlistinfo(params){
    return axios ({
     url:'/api/v1/jd/good/detail'  ,
     method:'GET',
     params, 
    })
}
export  function Tologin(data){
    return axios ({
url:"/api/v1/user/login",
method:"POST",
data,
    })
} 
export  function Toregist(data){
    return axios ({
url:"/api/v1/user/regist",
method:"POST",
data,
    })
}
export  function Tocart(data){
    return axios ({
url:"/api/v1/user/regist",
method:"POST",
data,
    })
}

export default{
    Getlist, 
    Getlistinfo,
    Tologin,
    Toregist,
    Tocart:(data)=>axios({
        url:"/api/v1/jd/cart/add",
       method:"POST",
       data
    }),
    ToCartList:(params)=>axios({
        url:"/api/v1/jd/cart//list",
       method:"GET",
       params,
    }),
    Cartdetail:(data)=>axios({
        url:"/api/v1/jd/cart/update",
       method:"POST",
       data:data,
    }),
    CartDel:(params)=>axios({
        url:"/api/v1/jd/cart/del",
       method:"GET",
       params,
    }),
    Setcart:(data)=>axios({
        url:"/api/v1/jd/cart/submit",
       method:"POST",
       data,
    }),
    Getclass:(params)=>axios({
        url:"/api/v1/jd/cates",
       method:"GET",
       params,
    }),

}