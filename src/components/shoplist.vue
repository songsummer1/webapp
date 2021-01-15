<template>
    <div class="Ublock" @touchstart="fgj" v-if='info._id'>
<span class="Img"><img :src='"http://10.36.149.14:9999"+info.img'/> </span>
<span v-text="info.name" ></span>
<br>
<span v-text='"￥"+info.price' style="color:red"> </span>

    </div>
</template>

<script>
    export default {
        data:function(){
            return{ timer:null}

        },
        props: {
    info: {
      type: Object,
      required: true
    }
  },  
         methods:{    
            fgj(){
               this.timer =  setTimeout(()=>{
this.$router.push("/good/"+this.info._id)
                 },300)
            }
            
           
        
        },
        
        beforeDestroy(){
            console.log(this.timer)
            clearTimeout(this.timer)
        }
        
    }
</script>

<style lang="scss" scoped>
.Ublock{
    width: 4.7rem;
    height: 6rem;
    padding: .066667rem;
    
    font-size: .133333rem;
    &>.Img ,img{width: 100%;height: 4rem;display: block;}
}
</style>