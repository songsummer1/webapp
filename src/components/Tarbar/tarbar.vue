<template>
<div class="qf-tabbar">
  <van-tabbar
    v-model="active"
    active-color="orange"
    inactive-color="#000000"
    route
  >
    <van-tabbar-item to='/home' icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to='/shops' icon="search">发现</van-tabbar-item>
    <van-tabbar-item to='/cart' icon="friends-o">购物车</van-tabbar-item>
    <van-tabbar-item to='/user' icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</div>
</template>



<script>

import {
  Tabbar,
  TabbarItem
} from 'vant'

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data: function() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="css" scoped>
</style>
