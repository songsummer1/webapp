<template>
    <div class="Usel">
      <div class="title"> 登录页面</div>
<van-form @submit="onSubmit">
  <van-field
    v-model="user.username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="user.password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
<div class="reg">
  <span>没有有账号？</span><br>
    <span @click='skipToLogin'>点击注册</span>
    </div>
    </div>
</template>

<script>
import { Form,Field,Button } from 'vant';
    export default {
      data: function(){
        return{
          user: {
                  username: '',
                  password: ''
                },
                timer:null
        }
       
     
      },
      components:{
          [Form.name]:Form,
          [Field.name]:Field,
          [Button.name]:Button
      }  ,
      methods:{
        onSubmit(){
          console.log('登录提交')
          this.$http.Tologin(this.user).then(res=>{
            console.log(res)
            localStorage.setItem("token",res.token)
           this.timer= setTimeout(()=>{
this.$router.push('/home')
            },1500)
          })
        },
        skipToLogin(){
          this.$router.push('/user/regist')
        }


      }
    }
</script>

<style lang="scss" scoped>
.Usel{
  width: 100%;
  height: 100%;
  .title{
    width: 100%;
    height: 2rem;
    text-align: center;
  }
  .res{width: 100%;height: 2rem;font-size: .4rem;}
}
</style>