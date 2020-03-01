<template>
  <div>
    <backTop />
    <div class="home">
      <el-tabs v-model="tab" @tab-click="tabChanged">
        <el-tab-pane label="全部" name="all">
          <Content :list="list" />
        </el-tab-pane>     
        <el-tab-pane label="精华" name="good">
          <Content :list="list" />
        </el-tab-pane>
        <el-tab-pane label="分享" name="share">
          <Content :list="list" />
        </el-tab-pane>
        <el-tab-pane label="问答" name="ask">
          <Content :list="list" />
        </el-tab-pane>    
        <el-tab-pane label="招聘" name="job">
          <Content :list="list" />
        </el-tab-pane> 
      </el-tabs>  
    </div>
  </div>
</template>

<script>
  import { getTopics } from "../utils/api"
  import Content from "../components/Content"
  import backTop from "../components/backTop"
  export default {
    name:'Home',
    data () {
      return {
        page: 1,
        limit: 20,
        tab: 'all',
        list: [],
        store: {},
        t: '',
      };
    },
    components: {
      Content,
      backTop
    },
    methods: {
      getTopics() {
        getTopics({
          page: this.page,
          limit: this.limit,
          tab: this.tab
        }).then(res => {
          this.list = res.data;
          this.limit = this.limit + 10;
          const store = this.store;
          store[this.tab] = {
            limit: this.limit,
            data: res.data
          }
          console.log(res.data)
          
        })
      },
      throttle(fn, delay) {
        let lastTime = 0;
        return function() {
        let nowTime = new Date();
          if(nowTime - lastTime > delay) {
            fn.call(this)
            lastTime = nowTime
          } 
        }
      },
      scroll() {
        const sumH = document.body.scrollHeight || document.documentElement.scrollHeight;
        const viewH = document.documentElement.clientHeight;
        const scrolH = document.body.scrollTop || document.documentElement.scrollTop;
        if(viewH + scrolH >= sumH - 0.4000244140625) {
          this.t();
        }
      },
      tabChanged() {
        const store = this.store;
        if(!store[this.tab]) {
          this.limit = 20;
          this.list = [];
          this.getTopics();
          return;
        }
        this.list = store[this.tab].data;
        this.limit = store[this.tab].limit;
      }
    },
    created() {
      this.getTopics();
      this.t = this.throttle(this.getTopics, 2000)
      window.addEventListener('scroll',this.scroll)
    },
    destroyed() {
      window.removeEventListener("scroll", this.scroll)
    }
    
  }

</script>
<style scoped>

    .home {
      margin: auto;
      width: 75%;
      padding: 20px 30px;
      box-sizing: border-box;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    
    
</style>