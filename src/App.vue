<template>
  <div id="app">
    
   <keep-alive>
     <router-view  name="alive"></router-view>
   </keep-alive>
   <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  
  components: {
 
   
  },
  beforeDestroy(){
    console.log('注销')
  }
}
</script>

<style lang="scss" >
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
.van-checkbox.qf-checkbox {
  // background-color: red;
  &>div {
    margin: 0 auto;
  }
}


</style>


