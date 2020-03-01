<template>
  <div>
    <div class="topic" v-for="item in list" :key="item.id">
      <router-link :to='{path: "/user/" + item.author.loginname}' >
        <img :src="item.author.avatar_url" alt="用户头像">
      </router-link>
      <span class="count" >
        <em>{{item.reply_count}}</em>/<em>{{item.visit_count}}</em>
      </span>
      <el-tag :type="$tab[item.tab] && $tab[item.tab].type">
        {{ $tab[item.tab] && $tab[item.tab].name }}
      </el-tag>
      <span class="title">
        <router-link :to='{path: "/topic/" + item.id}'>
          {{item.title}}    
        </router-link>
      </span >
      <span class="time">
        {{$moment(item.last_reply_at, 'YYYY-MM-DD')
        .startOf('day')
        .fromNow()}}
      </span>
    </div>
  </div>
  
</template>

<script>

  export default {
    name:'',
    data () {
      return {

      };
    },
    props: ['list'],
    methods: {
      
    }
  }

</script>
<style scoped>
  .topic {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .count {
    width:50px;
    text-align: center;      
  }

  .count em:first-child {
    font-size: 1.2em;
    color: purple;
  }

  .count em:last-child {
    color: grey;
  }

  .title {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }

  .time {
    width: 70px;
    text-align: right;
  }
</style>