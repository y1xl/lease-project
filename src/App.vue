<template>
  <div id="app" class="fsz">
    <router-view v-wechat-title="$route.meta.title"></router-view>

    <div class="nav bgc flexbox" v-if="navshow">
      <div>
        <router-link to="/">
          <div class="img" v-if="selected=='index'"><img src="./assets/tab/indexs.png" ></div>
          <div class="img" v-else><img src="./assets/tab/index.png" ></div>
          <p>首页</p>
        </router-link>
      </div>
      <div>
        <router-link to="/shop">
          <div class="img" v-if="selected=='shop'"><img src="./assets/tab/zhuans.png" ></div>
          <div class="img" v-else><img src="./assets/tab/zhuan.png" ></div>
          <p>门店</p>
        </router-link>
      </div>
      <div>
        <router-link to="/order">
          <div class="img" v-if="selected=='order'"><img src="./assets/tab/xiaos.png" ></div>
          <div class="img" v-else><img src="./assets/tab/xiao.png" ></div>
          <p>订单</p>
        </router-link>
      </div>
      <div>
        <router-link to="/me">
          <div class="img" v-if="selected=='me'"><img src="./assets/tab/mys.png" ></div>
          <div class="img" v-else><img src="./assets/tab/my.png" ></div>
          <p>我的</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import VConsole from 'vconsole/dist/vconsole.min.js'

export default {

  data () {
    return {

    }
  },

  computed:{
    selected(){
      if(this.$route.path === "/"){
        return 'index'
      }
      if(this.$route.path === "/shop"){
        return 'shop'
      }
      if(this.$route.path === "/order"){
        return 'order'
      }
      if(this.$route.path === "/me"){
        return 'me'
      }
    },
    navshow(){
      let url = this.$route.path
      if (url === "/"||url === "/shop"||url === "/order"||url === "/me") {
        return true
      }
    }
  },
  created(){
    // let vConsole = new VConsole()
  },
  methods: {

  },
  
}
</script>

<style scoped>
  .nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 5;
    border-top: 1px solid #f2f2f2;
  }
  .nav > div {
    flex: 1;
    text-align: center;
    font-size: 10px;
    box-sizing: border-box;
    padding: 5px;
  }
  .nav .img {
    display: inline-block;
    width: 22px;
    height: 22px;
  }
</style>


<style>
  /* .fsz {
    font-size: 12px
  } */
  .mar-bottom {
    margin-bottom: 50px;
  }
</style>
