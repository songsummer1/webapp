<template>
<div class="qf-find">
  <div class="qff-left">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        v-for='i in Uclass'
        :key='i._id'
        :title="i.cate_zh"
      />
    </van-sidebar>
  </div>
  <div class="qff-right">
    <van-grid square column-num='3'>
      <van-grid-item  
        v-for="value in goodlist[activeKey]"
        :key="value.id"
      >
        <template #icon>
          <div class="icon">
            <img :src="$img.url+value.img" alt="">
          </div>
        </template>
        <template #text>
          <div class="name" v-text="value.name"></div>
        </template>
      </van-grid-item>
    </van-grid>
  </div>

  <Tarbar></Tarbar>
</div>
</template>

<script>

import Tarbar from '@/components/Tarbar/tarbar.vue'

import {
  Sidebar,
  SidebarItem,
  Grid,
  GridItem
} from 'vant'
import {mapActions,mapState} from 'vuex'
export default {
  name: 'Find',
  components: {
    Tarbar,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data: function() {
    return {
      activeKey: 0,
      Uclass:[],
      
      
    }
  },
  computed:{
...mapState('Goods',['goodlist']),
cateindex(){
  return{
    index:this.activeKey,
    cate: this.Uclass[this.activeKey].cate
  }
}
  },
  watch:{
activeKey(){
  const arr =this.goodlist[this.activeKey]
  // this.$http.Getlist({cate:this.Uclass[this.activeKey].cate}).then(res=>{
  //   this.goodlist=res.list
  // })this.getGoodList(this.cateIndex)
if(!(arr && arr.length>0)){
this.Getgoods(this.cateindex)
}
  
  
}
  },
  methods:{
    ...mapActions('Goods',['Getgoods','GCly']),
async init() {
let {list}= await this.$http.Getclass({})
this.Uclass=list,
this.Getgoods(this.cateindex)




    }
  },
  mounted(){
   // console.log(this.$store.state)
    this.init()
    },
    beforeDestroy(){
      this.GCly()
    }


  
}
</script>

<style lang="scss" scoped>
.qf-find {
  position: relative;
  width: 100%;
  height: 100%;
  .qff-left {
    position: absolute;
    top: 0;
    bottom: 1.33rem;
    left: 0;
    width: 2.13rem;
    overflow: auto;
  }
  .qff-right {
    position: absolute;
    top: 0;
    bottom: 1.33rem;
    left: 2.13rem;
    right: 0;
    overflow: auto;
    .icon {
      width: 1.9rem;
      height: 1.9rem;
      margin: 0 auto;
      &>img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .name {
      font-size: .35rem;
      text-align: center;
    }
  }
}
</style>
