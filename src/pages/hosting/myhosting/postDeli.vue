<template>
  <div class="bgc full">
    <div class>
      <div class="flex-jc-between pd-15">
        <div>选择交付门店</div>
        <div class="flex-align-items fc-grey">
          <van-icon name="arrow"/>
        </div>
      </div>

      <div class="box">
        <div class="flex-jc-between" @click="toShopdet">
          <div class="shop_title pd-15">龙华区油松店</div>
        </div>

        <div class="txt pd-lr-15">广东省深圳市龙华新区油松路158号油富商城门店</div>
        <div class="dt text-c">
          <img class="ck_img" src="../../../assets/mddw.png">
          <span class="txt">查看地图</span>
        </div>
      </div>
    </div>

    <div class="nav bgc flex-jc-between">
      <div :class="{ 'fc-blue selected': typenum==0 }" @click="typenum=0">预约快递</div>
      <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">已寄出</div>
    </div>
    <div v-if="typenum==0">
      <div class="flex-jc-between pd-15 bgc border-b flex-align-items" @click="showdatetime=true">
        <span class="custom-text">期望揽收日期</span>
        <span class="flex-align-items fc-grey fsz12">
          {{datetext}}
          <van-icon name="arrow"/>
        </span>
      </div>
      <van-popup v-model="showdatetime" position="bottom" :close-on-click-overlay="false">
        <van-datetime-picker type="date" @cancel="showdatetime=false" @confirm="onConfirmdata"/>
      </van-popup>
      <div class="flex-jc-between pd-15 bgc border-b flex-align-items" @click="showtime=true">
        <span class="custom-text">时间</span>
        <span class="flex-align-items fc-grey fsz12">
          {{timetext}}
          <van-icon name="arrow"/>
        </span>
      </div>
      <van-popup v-model="showtime" position="bottom" :close-on-click-overlay="false">
        <van-datetime-picker
          type="time"
          show-toolbar
          @cancel="showtime=false"
          @confirm="onConfirm"
        />
      </van-popup>
      <van-cell is-link>
        <template slot="title">
          <span class="custom-text">选择发货地址</span>
        </template>
      </van-cell>

      <div class="inputbox border-b">
        <input placeholder="收件地址">
      </div>
    </div>
    <div v-if="typenum==1">
      <div class="border-b" style="margin-top: 50px;">
        <input v-model="postnum" placeholder="请输入顺丰单号" type="text">
      </div>

      <div v-for="item in 6">
        <div class="logist">12.08 物流信息</div>
      </div>
    </div>
    <div class="flex-jc-center bgc btn_box">
      <div class="btn text-c">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typenum: 0,
      postnum: "",
      timetext: "",
      datetext: "",
      showdatetime: false,
      showtime: false
    };
  },
  methods: {
    toShopdet() {
      this.$router.push({ path: "/ShopDetail" });
    },
    onConfirm(value) {
      console.log(`当前值：${value}`);
      this.timetext = value;
      this.showtime = false;
    },
    onConfirmdata(value) {
      console.log(`当前值：${value}`);
      this.datetext =
        value.getFullYear() +
        "-" +
        (value.getMonth() + 1) +
        "-" +
        value.getDate();
      this.showdatetime = false;
    }
  }
};
</script>
<style scoped>
.box {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px 0px rgba(188, 188, 188, 0.32);
  border-radius: 10px;
  margin: 15px;
}
.shop_title {
  font-size: 15px;
  color: #7a7a7a;
}
.txt {
  font-size: 12px;
  width: 220px;
  color: #dcdddf;
}
.ck_img {
  width: 10px;
  height: 12px;
}
.dt {
  padding: 15px;
}
.img_r {
  width: 6px;
  height: 12px;
}

.nav {
  margin: 0 40px;
  padding: 15px 0;
}
.nav > div {
  width: 80px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  box-shadow: 0 1px 7px 1px #e8e9ea;
  border-radius: 20px;
  text-align: center;
  box-sizing: border-box;
  font-size: 13px;
  margin-right: 10px;
}
.nav .selected {
  box-shadow: 0 1px 7px 1px #def4fd;
}
.hostcode {
  padding: 30px 15px;
}

.custom-text {
  color: #aeaeae;
  font-size: 14px;
}

input {
  width: 280px;
  height: 40px;
  line-height: 40px;
  margin: 0 15px;
  color: #aeaeae;
  font-size: 14px;
}

.logist {
  margin: 15px;
}
.btn_box {
  width: 100%;
  margin-top: 30px;
}
.btn {
  width: 280px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
</style>

