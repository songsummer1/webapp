<template>
    <div class="Uhome">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
     <van-notice-bar 
     mode="closeable"
     left-icon="volume-o"
     :text="msg"   background="red" color="white" >
     <template #left-icon>
       <div class="yu"> 登<van-icon name="smile-o"  @click="tologin">录</van-icon  ></div>
     </template>
     </van-notice-bar> 


     <van-swipe :autoplay="3000">
     <van-swipe-item v-for="(image, index) in images" :key="index">
     <img class='qf-swipe-img' v-lazy="image" />
     </van-swipe-item>
     </van-swipe>
<div class="qf-good-title">
        <van-image
          class="qf-image"
          src="//img12.360buyimg.com/img/s750x70_jfs/t1/148857/1/16777/13220/5fc9f9d0E734c0ee5/88c99cdbe410e58a.png"
        />
      </div>
     
          
               
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :immediate-check='false'
  >
     <div class="Ucow" v-for="i in n" :key="i">
         <Shoplist  :info='Shlist[2*i-2]' /> <Shoplist :info='Shlist[2*i-1] ||{}' />
         </div>
  </van-list>
</van-pull-refresh>
         
      <Tarbar></Tarbar>
    </div>
</template>

<script>

// import Vue from 'vue';import {  } from 'vant';
import {Icon, NoticeBar ,Swipe, SwipeItem, Lazyload,Image,List,PullRefresh} from 'vant';
import Vue from 'vue'
Vue.use(Lazyload)
import Shoplist from '@/components/shoplist.vue'
const Tarbar= ()=>import("@/components/Tarbar/tarbar.vue")

    export default {
        data:function(){
            return{
         msg:'京东webapp 全场一折起 京东webapp 全场一折起 买到就是赚到 不买也来看看啊',
         images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/150221/28/19991/65518/5fe58ab4Ecad9d5b7/5eb68a4501f20c10.jpg!q80.dpg.webp',
        "//img14.360buyimg.com/n7/jfs/t1/112053/34/13958/115769/5f2779caE6a5cd023/587c3ce3394099b3.jpg"
      ],
      //img12.360buyimg.com/img/s750x70_jfs/t1/148857/1/16777/13220/5fc9f9d0E734c0ee5/88c99cdbe410e58a.png
       loading: false,
      finished: false,
      refreshing: false,
      timer:null,
   
      Shlist:[],
      page:1
            }
        },
        components:{
          [Icon.name]:Icon,
          Shoplist,  
          Tarbar,
            [NoticeBar.name]:NoticeBar,
             [Image.name]: Image,
              [Swipe.name]: Swipe,
              [SwipeItem.name]: SwipeItem,
               [List.name]: List,
                [PullRefresh.name]: PullRefresh,
               
    
        },
          computed: {
    n:function(){
      return Math.ceil(this.Shlist.length/2) 
    }  //将数据组处理
  },
        methods: {
          tologin(){
this.$router.push('/user/login')
          },
           getList(){
             const params={
               size:6,
               page:this.page

             }
this.$http.Getlist(params).then(res=>
    {


// Shlist 每次请求会加6条新的res.list, 如果直接赋值  this。shlist=res。list 
// Shlist 不会显示上次page的数据，做一个累加，... 结构数组， 将两个新旧数组另赋予合并
//达到累加的效果
if(this.page==1){
  this.Shlist=res.list
   this.finished=false
  //  this.refreshing=false
}else{
  this.Shlist=[...this.Shlist,...res.list]
      // console.log("res",res)
}
      this.loading=false

      
      if(this.Shlist.length===res.total){
        this.finished=true
      }// 判断停止加载条件
    
  })
    },
   onRefresh() {
    this.time= setTimeout(() => {
        console.log('触发了下拉刷新')
      this.page=1
      this.getList(1) 
      this.refreshing = false
     }, 1000);
    
     
      
      // 重置页面
      // 获取数据库商品列表的第一页数据
      // setTimeout(()=>{
      //   // this.finished = false
      //   this.n = 5
        
      // }, 2000)
    },
    onLoad() {
     // console.log('触发了触低加载')
      this.page++
      this.getList()
      // 获取数据库商品列表的下一页数据
      // setTimeout(()=>{
      //   this.n += 5
      //   this.loading = false
      // }, 2000)
    },
   
  },
  mounted(){
     this.getList(1)
     },
     beforeDestroy(){
       clearTimeout(this.time)
     },
       
    }
</script>

<style lang="scss" scoped>
.Uhome{
  padding-bottom: 1.333333rem;
   .qf-swipe-img ,.van-swipe-item {
    display: block;
    width: 100%;
    height: 4.13rem;
  }
  .yu{color: white; font-size: .666667rem;line-height: .9333rem;}
  .van-swipe  {
    position: relative;}
    .Ucow{display: flex;justify-content: space-around;}



}

</style>