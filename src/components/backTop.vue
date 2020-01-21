<template>
  <div class="top" @click="backTop">
      <span>UP</span>
  </div>
</template>

<script>

  export default {
    name:'',
    data () {
      return {

      };
    },
    methods: {
      backTop() {
        window.scrollTo(0, 0);
      }
    }

  }

</script>
<style>
  .top {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      box-shadow: 0 0 5px rgb(218, 198, 198);
      font-size: 24px;
      border-radius: 20%;
      position: fixed;
      bottom: 100px;
      right: 50px;
      cursor: pointer;
    }
</style>