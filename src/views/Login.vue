<template>
  <div class="login">
    <p>请登录</p>
    <el-input style="width:75%" class="inp" v-model="accessToken" placeholder="请输入accessToken"></el-input>    
    <div class="btn">
      <el-button @click="getAccessToken" >登录</el-button>
    </div>
    <span class="src"><a href="https://cnodejs.org/api" target="_blank">如何获取accessToken?</a></span>
  </div>
</template>

<script>
  import {getAccessToken} from '../utils/api'
  export default {
    name:'',
    data () {
      return {
        accessToken: '',
        
      };
    },
    methods: {
      getAccessToken() {
        const acc = this.accessToken;
        if(!acc) {alert('accesstoken不能为空'); return;}
        
        getAccessToken(this.accessToken).then(res => {
          this.$store.commit('getAccess', acc)
          window.localStorage.setItem('accessToken', acc)
          this.$store.commit('haslogin')
          this.$router.replace('/')
        })
      }
      
    }
  }

</script>
<style scoped>
    .login {
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 600px;
      height: 300px;
      background-color: rgba(245, 245, 247, 0.3);
      box-shadow: 0 0 15px rgba(196, 188, 188,0.4);
      border-radius: 10px;
    }

    p {
      margin: auto;
      font-size: 30px;
      text-align: center;
      color: rgb(95, 95, 87);
    }
    .btn {
      width: 100%;
      text-align: center;
    }
    .el-button {
      width: 75%;
    }
     .inp {
      margin: 40px auto;
    }
    .src {
      margin: auto;
    }
</style>