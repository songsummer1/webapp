import Vue from 'vue'
import VueRouter from 'vue-router'
const Home =()=>import('./pages/home/Home.vue')
const User=()=>import('./pages/user/User.vue')
const Shops =()=>import('./pages/shops/Shops.vue')
const Cart =()=>import('./pages/cart/Cart.vue')

Vue.use(VueRouter)//注册 
 const  router= new VueRouter({
    mode:'hash',
    routes:[
        {path:'/user/login',component:()=>import('./pages/user/Login.vue')},
        {path:'/user/regist',component:()=>import('./pages/user/Resigt.vue')},
        {path:'/home',components:{ alive: Home}},
        {path:'/user',component:User},
        {path:'/shops',component:Shops},
        {path:'/cart',component:Cart},
        {path:'/good/:id',component:()=>import('./pages/home/homedetal.vue')},
        {path:'/*',redirect:"/home"}
    ]
})
router.beforeEach((to,from, next) => {
    console.log(from)
const token=localStorage.getItem('token')
if(to.path=='/cart'){
   if(token){
    next()
   }else{
next('/user/login')
   }
} else // 如果用户未能验证身份，则 `next` 会被调用两次
    next()
  })
export default router