<template>
    <div class="Usel">
      <div class="title"> 注册页面</div>
<van-form @submit="onRegist">
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
    <van-field
      v-model="user.password2"
      type="password"
      name="密码"
      label="确认密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请确认密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">立即注册</van-button>
    </div>
  </van-form>
  <div>
    <span>如果已有账号？</span>
    <span @touchstart='skipToLogin'>点击登录</span>
  </div>

    </div>
</template>

<script>
import { Form,Field,Button,Toast } from 'vant';
    export default {
      data: function(){
        return{
          user: {
        username: '',
        password: '',
        password2: ''
      },
        }
       
     
      },
      components:{
          [Form.name]:Form,
          [Field.name]:Field,
          [Button.name]:Button
      }  ,
      methods:{
        onRegist(){
          console.log('注册提交')
          this.$http.Toregist(this.user).then(res=>{
            console.log(res)
            Toast.success('注册成功')
            this.timer=setTimeout(() => {
                this.$router.push('/user/login')
            }, 2000);
          })
        },
        skipToLogin(){
            this.$router.back()
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
}
</style>