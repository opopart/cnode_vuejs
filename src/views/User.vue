<template>
  <div class="user">
    <ProfilePanel :loginname='loginname'/>
    
    <OtherTopic/>
    <RecentReply/>
  </div>
</template>

<script>
 import ProfilePanel from "../components/ProfilePanel"
 import OtherTopic from "../components/OtherTopic"
 import RecentReply from "../components/RecentReply"

  export default {
    name:'',
    data () {
      return {
        loginname: ''
      };
    },
    created() {
      this.loginname = this.$route.params.id;
      console.log(this.loginname)
    },
    beformRouteUpdate(to, from, next) {
      this.loginname = to.params.id;
      next();
    },

    components: {
      ProfilePanel,
      OtherTopic,
      RecentReply
    }
  }

</script>
<style scoped>
  .user {
    width: 75%;
    margin: auto;
  }
</style>