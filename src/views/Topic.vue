<template>
  <div class="topic">
    <backTop/>
    <div class="left">
      <div class="title" v-html='topic.title' >
      </div>
      <div class="info">
        <span>
          发布于&nbsp;
          {{$moment(topic.create_at, 'YYYY-MM-DD')
          .startOf('day')
          .fromNow()}}
          &nbsp;•&nbsp;
        </span>
        作者：
        <router-link :to="{path: '/user/' + topic.loginname}">
          {{topic.loginname}}
        </router-link>
        &nbsp;•&nbsp;
        <span>{{topic.visit_count}}次浏览&nbsp;•&nbsp;</span>
        <span>
          来自：
          {{$tab[topic.tab] && $tab[topic.tab].name}}
        </span>
      </div>
      <Divider />
      <div class="content" v-html='topic.content' />
      <Reply :data="topic.replies" />
    </div>
    <div class="right">
      <ProfilePanel :loginname='topic.loginname' />
      <OtherTopic />
      <RecentReply />
    </div>
  </div>
</template>

<script>
  import { bus } from '../utils/api.js'
  import { getTopicById } from '../utils/api.js'
  import OtherTopic from '../components/OtherTopic'
  import ProfilePanel from '../components/ProfilePanel'
  import RecentReply from '../components/RecentReply'
  import Divider from '../components/Divider'
  import Reply from '../components/Reply'
  import backTop from '../components/backTop'
  export default {
    name:'Topic',

    data () {
      return {
        topic: {}
      };
    },
    components: {
     OtherTopic,
     ProfilePanel,
     RecentReply,
     Divider,
     Reply,
     backTop
    },
    methods: {
      fetchData(id) {
        getTopicById(id).then(res => {
          this.topic = {
            ...res.data,
            ...res.data.author
          }
          console.log(this.topic.loginname,12123)
        })
      }
    },
    created() {
      this.fetchData(this.$route.params.id);
    },

    beforeRouteUpdate(to, from, next) {
      this.fetchData(to.params.id);
      next();
    }
  }
  

</script>
<style scoped>
  .topic {
  display: flex;
  margin-bottom: 100px;
}
.topic .title {
  color: black;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 8px;
}
.topic .content {
  color: #333;
  line-height: 1.6;
  margin-bottom: 50px;
}

.topic .left {
  height: 100%;
  width: 72%;
  float: left;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.topic .left .info {
  display: flex;
  align-items: center;
  color: #838383;
  font-size: 12px;
}
.topic .right {
  float: right;
  width: 35%;
  height: 100%;
  margin-left: 2%;
}


</style>

<style >
.topic .content img {
    width: 100%;
}

.topic .right {
  float: right;
  width: 35%;
  height: 100%;
  margin-left: 2%;
}
</style>