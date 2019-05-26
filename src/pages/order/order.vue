<template>
    <div>
        <div class="nav bgc border-b flex-jc-center">
            <router-link to="/order">租赁单</router-link>
            <router-link to="/order/buyOrder">租转售</router-link>
        </div>

        <keep-alive :max="15">
            <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title" ></router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" ></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
  height: 42px;
  line-height: 42px;
}
.nav > a {
  color: #666;
  font-size: 16px;
  display: block;
}
.nav > a:nth-of-type(1) {
  margin-right: 50px;
}
.nav a.router-link-exact-active {
  color: #000;
  font-weight: bold;
}
</style>
