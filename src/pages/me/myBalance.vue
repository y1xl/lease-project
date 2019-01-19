<template>
  <div>
    <div class="bgc text-c all_bal">
      <div class="all_pro">¥863.08</div>
      <div>可提现金额</div>
      <div class="btn">提现</div>
    </div>

    <div class="flex-jc-around">
      <div :title="item" v-for="(item,index) in navtitle" :key="index" @click="ontab">
        <div class="nav_title">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navtitle: ["押金", "托管收益", "推广金", "红包", "邀请码"]
    };
  },
  methods: {
    ontab(index, title) {
      console.log(index, title);
      this.index = index;
    }
  }
};
</script>


<style scoped>
.all_bal {
  width: 100%;
  height: 150px;
  margin-top: 15px;
  box-shadow: 0px 0px 16px 0px rgba(220, 221, 223, 0.19);
}
.all_pro {
  font-size: 35px;
}

.nav_title {
  height: 35px;
  line-height: 35px;
}
.nav_title :active {
  height: 6px;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
</style>


