<template>
    <div class="Hdetal" >
     <span class="op">商品详情</span>  
<span class="Img"><img :src="$img.url+info.img"/> </span>
<span v-text="info.desc"></span>
<br>
<span v-text="'￥'+info.price" style="color:red"> </span>
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="Tocart" />
  <van-goods-action-button color="#7232dd" type="danger" text="立即购买"  @click="Tocart" />
</van-goods-action>
    </div>
</template>

<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
    export default {
        components:{
   [GoodsAction.name]:GoodsAction,
   [GoodsActionIcon.name]:GoodsActionIcon,
   [GoodsActionButton.name]:GoodsActionButton
        },
        data:function(){
        return{
            info:{}
        }
        },
      beforeCreate(){
          //console.log(this.$route.params.id)
          this.$http.Getlistinfo({id:this.$route.params.id}).then(res=>
          { 
          this.info=res
          console.log(this.info) 
          })
      } ,
      methods:{
          Tocart(){
            let token =localStorage.getItem('token')
              if(token){
                const data={
                  good_id:this.info._id
                }
                this.$http.Tocart(data).then(res=>{
                   console.log(res)
                this.$router.replace('/cart')
                } )
                
              }else{
            this.$router.push('/user/login')
              }
          }
      }
        
    }
</script>

<style lang="scss" scoped>
.Hdetal{ 
    height: 100%;
    width: 100%;
    .Img ,img{
    width: 100%;
    height: 10rem;
       .op{
        width: 100%;
        height: 1rem;
        text-align: center;
        display: block;
    }
}}

</style>