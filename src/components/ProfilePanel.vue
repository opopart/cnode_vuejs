<template>
  <div class="panel">
    <router-link class="userr" :to="{path: '/user/' + user.loginname}">
      <img :src="user.avatar_url" alt="用户头像"/>
      <span>{{user.loginname}}</span>
    </router-link>
    <div>
    积分：{{user.score}}
    </div>
    <div>
      Github:
      <a :href="'https://github.com/' + user.githubUsername" target="_blank" rel="nofollow noopener noreferrer">
        {{user.githubUsername}}
      </a>
    </div>
    <div>
      注册时间：
      {{$moment(user.create_at, 'YYYY-MM-DD')
      .startOf('day')
      .fromNow()}}
    </div>
  </div>
  
</template>

<script>
  import {getUserByName} from "../utils/api.js"
  import bus from '../utils/bus.js'
  export default {
    name:'ProfilePanel',
    props: ['loginname'],
    data () {
      return {
        user: {}
      };
    },
    methods: {
      fetchData(loginname) {
        getUserByName(loginname).then(res => {
          this.user = res.data;
          console.log(loginname);
          console.log(this.user);     
          bus.$emit('getMessage', res.data)
        })
      }
    },

    created() {
      if(!this.loginname) {
        return
      }
      console.log('12312312313')
      this.fetchData(this.loginname);
    },
    watch: {
    loginname(loginname) {
      if (!loginname) {
        return;
      }
      this.fetchData(loginname);
    }
  }


  }

</script>
<style  scoped>
  .panel {
    display: flex;
    flex-direction: column;
    color: black;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    
  }


  .panel img {
    width: 48px;
    height: 48xp;
    border-radius: 5px;
    margin-right: 20px;
  }
  .userr {
    margin-bottom: 10px;
    color: blue
  }
 
</style>