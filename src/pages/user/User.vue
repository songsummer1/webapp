<template>
    <div>
用户中心
<van-field v-model="digit" type="digit" label="秒"  @keyup.enter="op"/>
<van-count-down
  ref="countDown"
  millisecond
  :time="time"
  :auto-start="false"
  format="ss:SSS"
  @finish="finish"
/>
<van-grid clickable>
  <van-grid-item text="开始" icon="play-circle-o" @click="start" />
  <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
  <van-grid-item text="重置" icon="replay" @click="reset" />
</van-grid>
<Tarbar/>
    </div>
</template>

<script>
import { CountDown,Toast,Grid,GridItem ,Field} from 'vant';
    export default {
        components:{
          [Field.name]:Field,
          [GridItem.name]:GridItem,
          [Grid.name]:Grid,
          [CountDown.name]:CountDown,
Tarbar:()=>import("@/components/Tarbar/tarbar.vue")
        },
        data: function() {
    return {
      activeKey: 0,
      time: 1 * 60 * 60 * 1000,
      digit: '',
      bj:null

    }
  },
  methods: {
    op(){ 
      
     this.time =(this.digit) * 1000
     this.digit=''
    },
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      Toast('倒计时结束');
    },
  },
        
    }
</script>

<style lang="scss" scoped>

</style>