<template>
  <div class="header">
    <div class="info">
      <router-link to="/" class="brand">
      <img src="../assets/cnodejs.svg" alt="网站logo" >
      </router-link>
      <span v-if="isLogin"><span @click="logout" >退出</span><span><router-link to="/Messages">未读消息</router-link></span></span>
      <span v-else><router-link to="/login">登录</router-link></span>
      <span @click="dialogVisible = true">
       关于
      </span>
      
      
    </div>
    
    <el-dialog
            title="关于本项目"
            :visible.sync="dialogVisible"
            width="35%"
            class="about"
            >
            <span>作者：柯杰鑫</span><br>
            <span >Github: <a href="https://github.com/opopart" target="_blank" >https://github.com/opopart</a></span>
            <div>技术栈：
              <ul>
                <li>Vue</li>
                <li>Vue Router</li>
                <li>Vuex</li>
                <li>ElementUi</li>
                <li>Axios</li>
              </ul>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
  </div>
</template>

<script>
  import {
        mapGetters
    } from 'vuex';
  export default {
    name:'Header',
    data () {
      return {
        dialogVisible: false,
        
      };
    },
    methods: {
      logout() {
        window.localStorage.removeItem('accessToken');
        this.$store.commit('haslogout');
        this.$router.replace('/')
      }
    },
    created() {
      if(window.localStorage.accessToken) {
        this.islogin = true;
      }
    },
    computed: {
      isLogin() {
        return this.$store.getters.getislogin;
      }
    }

  }
</script>
<style scoped>

    .info {
        width: 100%;
        height: 50px;
        background-color: #444;
    }

    .brand {
        width: 120px;
        height: 50px;
        float: left;
        margin: 8px 0 0 150px;
        display: block;
    }

    .brand img {
      width: 100%;
      
      display: block;
      
    }

    .info span {
        float: right;
        height: 50px;
        line-height: 50px;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        margin: 0 20px 0 0;
        
    }
    .info a {
      color: #fff;
      text-decoration: none;
    }

    .about ul{
      margin-top: 5px;
      margin-left: 20px;
    }

    
</style>