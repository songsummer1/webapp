<template>
    <div class="Uuser">
<div class="header">
                    <van-nav-bar title="标题" @click-left='fan'  left-text="返回" left-arrow>
                    <template #right>
                        <van-icon name="search" size="18" />
                    </template>
                    </van-nav-bar>  </div><!-- 头部 -->
                     
  <van-swipe-cell v-for="(i,index) in list " :key="i._id">
    <van-row type='flex' align='center'>
     
  <van-col span="3" >
         <van-checkbox class="qf-checkbox" v-model="i.checked"
         @click="rowClick"
         />
    </van-col>
  <van-col span="21">
      <van-card
    :num="i.num"
    :price="i.good.price"
    :desc="i.good.desc"
    :title="i.good.name"
    class="goods-card"
    :thumb="$img.url+i.good.img"
  >
          <template #footer>
            <div class="btns">
              <span @touchstart='update(i,index,-1)' > - </span>
              <span @touchstart='update(i,index,1)' > + </span>
            </div>
          </template>
      </van-card>
  </van-col>
  
</van-row>
 <template #right>
    <van-button @touchstart='remove(i,index)'  square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell> 
  



<van-submit-bar :price="cprice" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="full" @click='fullClick( )'>全选</van-checkbox>
  <template #tip>
    你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
  </template>
</van-submit-bar>
    </div>
</template>

<script>
import{NavBar,Icon,Dialog,
SwipeCell,Card,Button,Checkbox,Col, Row,SubmitBar,
Toast
} from 'vant'
    export default {
      name:'cart',
        data:function(){
     return{ checked: true, 
             full:false,
             list:[] ,
            
        }},
      
        components:{
            [NavBar.name]:NavBar,
            [Icon.name]:Icon,
            [SwipeCell.name]:SwipeCell,
            [Card.name]:Card,
            [Button.name]:Button,
            [Checkbox.name]:Checkbox,
            [Col.name]:Col,
            [Row.name]:Row,
            [SubmitBar.name]:SubmitBar
        },
       computed:{
         cprice(){
           let t =null
           this.list.map(ele=>{
             if(ele.checked) { t+=ele.good.price*ele.num}
           })
           return t*100
         }
       },
          mounted(){
           this.init()
              
        },
        methods:{
        
          init() {
              this.$http.ToCartList().then(res=>{
                this.list=res
               // console.log(this.list)
              })
           },
             remove(i,index){
               Dialog.confirm({
        title: '警告',
        message: `你确定要删除 ${i.good.name} 吗？`,
      }).then(()=>(
 this.$http.CartDel({id:i._id}).then(res=>{
   
              this.list.splice(index,1)
                console.log(res,'删除成功')
                 })
                 .catch(()=>{})
      ))
              },
                  update(i,index,tp){
                    const data={
                      id:i._id,
                      num:i.num+tp
                    }
                    if(data.num==0) {return Toast('商品数据不能小于1')}
                    else{
                      this.$http.Cartdetail(data).then(()=>{
                        //console.log(res)
                        this.list[index].num=data.num
                      })
                    }
                  },


              // update(i,index,step) {
              //  const data={
              //    id: i._id,
              //    num:i.num + step
              //  }
              //  if(data.num===0) {return Toast('商品数据不能小于1')}
              //  this.$http.Cartdetail(data).then(res=>{
              //   console.log(res)
              //   this.list[index].num=data.num

              //  })

              // }  ,

              
          //  this.init()
          
          rowClick(){
            const arr=this.list.filter(ele=>
              (ele.checked)
            )
     this.full=(arr.length===this.list.length)
          },
          fullClick(){
            console.log('e',this.full)
          //  const arr=this.list
            this.list.map((ele,idex,arr)=>{
             arr[idex].checked= this.full
            })
            
            this.list=JSON.parse(JSON.stringify(this.list))
         // this.list=JSON.parse(JSON.stringify(arr))
          },
          fan(){
            this.$router.back()
          },
             onSubmit() {
               
      console.log('提交订单')
      let goods=""
      this.list.map(ele=>{
        if(ele.checked){
          goods+=(';'+ele._id)
        }
      })
      if(!goods) return Toast('请选择你要提交的商品')
      this.$http.Setcart({goods}).then(()=>{
        //console.log(res)
        this.init()
      })
    },
    onClickEditAddress() {
      console.log('你点击了修改地址')
    }
        }
   
    }
</script>

<style lang="scss" scoped>
.Uuser{
    padding-bottom:1.833333rem ;
     .delete-button {
    height: 100%;
  }
  .btns {
    span {
      display: inline-block;
      padding: 0 .2rem;
      border:  1px solid #ccc;
      border-radius: .04rem;
      box-sizing: border-box;
      line-height: .4rem;
      height: .43rem;
      font-size: .32rem;
      color: #ccc;
    }
    span:last-child {
      margin-left: .27rem;
    }
  }
}
</style>