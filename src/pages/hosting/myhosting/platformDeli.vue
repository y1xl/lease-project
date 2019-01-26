<template>
  <div class="bgc full">
    <div
      class="flex-jc-between flex-align-items border-b pd-15 box"
      @click="go('/calendar/platformDeli')"
    >
      <diV>
        <div class="mar-b-10">交付日期</div>
        <div class :class="datetext==''?'':'time'">{{datetext==''?'请选择日期':datetext}}</div>
      </diV>
      <div class="flex-align-items fc-grey">
        <van-icon name="arrow"/>
      </div>
    </div>

    <div class="flex-jc-between flex-align-items border-b pd-15 box" @click="isshow = true">
      <diV>
        <div class="mar-b-10">交付时间</div>
        <div>{{timequantum}}</div>
      </diV>
      <div class="flex-align-items fc-grey">
        <van-icon name="arrow"/>
      </div>
    </div>

    <van-popup v-model="isshow" position="bottom" :close-on-click-overlay="false">
      <van-picker show-toolbar :columns="columns" @cancel="isshow = false" @confirm="onConfirm"/>
    </van-popup>

    <div class="flex-jc-center bgc btn_box">
      <div class="btn text-c">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
      datetext: "",
      columns: ["07:00-09:00", "09:00-11:00", "测试", "测试", "测试"],
      timequantum: "请选择交付时间"
    };
  },
  created() {
    let platformDeliSession = JSON.parse(
      window.sessionStorage.getItem("platformDeliSession")
    );
    if (platformDeliSession) {
      this.datetext = platformDeliSession.date;
      this.timequantum = platformDeliSession.timequantum;
    }
    //取缓存 end
  },
  methods: {
    go(url) {
      let platformDeliSession = {
        date: this.datetext,
        timequantum: this.timequantum
      };
      window.sessionStorage.setItem(
        "platformDeliSession",
        JSON.stringify(platformDeliSession)
      );
      this.$router.push({ path: url });
    },
    onConfirm(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.timequantum = value;
      this.isshow = false;
    }
  }
};
</script>
<style scoped>
.img_r {
  width: 5px;
  height: 10px;
}
.time {
  color: black;
}
div {
  color: #aeaeae;
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

