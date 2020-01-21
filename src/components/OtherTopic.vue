<template>
  
   <div class="panel">
    <header>最近创建的话题</header>
    <Divider class="divider"/>
    <template v-for='item in user'>
      <div :key='item.id'>
        <div class="main">
          <router-link class="avator" :to="{path: '/user/' + item.author.loginname}">
            <img :src="item.author && item.author.avatar_url" alt="头像">
          </router-link>
          <router-link class="title" key={item.id} :to="{path: '/topic/' + item.id}">
            {{item.title}}
          </router-link>
          <span class="time">
          {{
            $moment(item.last_reply_at, 'YYYY-MM-DD')
              .startOf('day')
              .fromNow()
          }}
        </span>
        </div>
        
        <Divider class="inside-divider" />
      </div>
    </template>
    
  </div>
</template>

<script>
  import bus from '../utils/bus.js'
  import Divider from "./Divider"
  export default {
    name:'',
    data () {
      return {
        user: {}
      };
    },
    methods: {

    },
    created() {
      bus.$on('getMessage', data => {
        this.user = data.recent_topics
      })
      console.log('others')
    },
    components: {
      Divider
    }
  }

</script>
<style scoped>
  .panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 10px 0;
  }
  .panel header {
    color: black;
    font-weight: bold;
   
  }
  .panel > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .time {
   
    color: #777;
    font-size: 15px;
    margin-right: 10px;
    
  }
  .inside-divider {
      margin: 10px 0;
    }
    .avatar {
      margin-left: 10px;
    }
  img {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    margin-right: 5px;
  }
  .divider {
    margin: 12px 0;
  }


</style>