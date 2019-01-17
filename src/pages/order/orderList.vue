<template>
  <div>
    <div class="nav bgc border-b flex-jc-center">
      <div :class="{ selected: selected==0 }" @click="nav(0)">租赁单</div>
      <div :class="{ selected: selected==1 }" @click="nav(1)">租转售</div>
    </div>

    <div id="nav">
      <van-tabs @click="ontag">
        <van-tab :title="item" v-for="(item,index) in navarr" :key="index" ></van-tab>
      </van-tabs>
    </div>

    <div class="list">
        {{navarr[index]}}
        <OrderCard/>
    </div>

  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard'
export default {
    components:{
        OrderCard,
    },
  data() {
    return {
      selected: 0,
      index:0,
      navarr: ["待付款", "预租中", "已预订", "租赁中", "已超期", "待评价"],
      navarr0: ["待付款", "预租中", "已预订", "租赁中", "已超期", "待评价"],
      navarr1: ["待付款", "待发货", "待收货", "待评价", "已完成"],
    };
  },
  methods: {
    nav(n) {
      this.selected = n;
      if(n==0){
          this.navarr = this.navarr0
      }
      if(n==1){
          this.navarr = this.navarr1
      }
    },
    ontag(index, title) {
      console.log(index,title)
      this.index = index
    }
  }
};
</script>

<style>
#nav .van-tabs__line {
    background-color: #fff;
    background-image: linear-gradient(90deg, #6C76ED 0%, #74D2FF 100%);
}
</style>

<style scoped>
.nav > div {
  padding: 10px;
  color: #666;
}
.nav .selected {
  color: #000;
}

.list{
    padding:15px;
}
  /* .model {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, .5);
      z-index: 100;
  } */
</style>