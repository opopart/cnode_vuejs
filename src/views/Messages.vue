<template>
  <div class="msg">
    <div class="panel"> 
      <div class="header">新消息</div>
      <div class="inner">
        <span v-if="hasnot_read.length==0">无</span>
      </div>
    </div>
    <div class="panel"> 
      <div class="header">过往消息</div>
      <div class="inner">
        <span v-if="has_read.length==0">无</span>
        <div v-for="item in has_read" :key="item.id">
          <div v-if="item.type == 'reply'">
            <router-link :to="'/user/' + item.author.loginname" >{{item.author.loginname}}</router-link>
            回复了你的话题
            <router-link :to="'/topic/' + item.topic.id">{{item.topic.title}}</router-link>
          </div>
          <div v-else>
            {{item.author.loginname}}在话题{{item.topic.title}}中@了你
          </div>
          <Divider/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getMessages } from '../utils/api'
  import Divider from '../components/Divider'
  export default {
    name:'',
    data () {
      return {
          has_read: [],
          hasnot_read: [],
      };
    },
    components: {
      Divider
    },
    created() {
      getMessages(window.localStorage.accessToken).then(res => {
        this.has_read = res.data.has_read_messages;
        this.hasnot_read = res.data.hasnot_read_messages;
        console.log(this.has_read)
      })
    }

  }

</script>
<style scoped>
  .panel {
    width: 1062.28px;
    height: 98px;
      margin-right: 305px
  }

  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }

  .panel .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }

  .inner div {
    margin: 10px;
  }
</style>