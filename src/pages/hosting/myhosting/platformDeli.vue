<template>
  <div class="bgc full">

    <router-link class="flex-jc-between flex-align-items border-b pd-15 box" to="/calendar">
      <diV>
        <div class="mar-b-10">交付日期</div>
        <div class="time">2019-01-20</div>
      </diV>
      <div class="flex-align-items fc-grey">
        <van-icon name="arrow"/>
      </div>
    </router-link>

    <div class="flex-jc-between flex-align-items border-b pd-15 box" @click="isshow = true">
      <diV>
        <div class="mar-b-10">交付时间</div>
        <div>{{text}}</div>
      </diV>
      <div class="flex-align-items fc-grey">
        <van-icon name="arrow"/>
      </div>
    </div>

      <van-popup v-model="isshow" position="bottom" :close-on-click-overlay="false">
        <van-picker
          :columns="columns"
          @change="onChange"
          show-toolbar
          @confirm="onConfirm"
          @cancel="isshow = false"
        />
      </van-popup>

    <div class="flex-jc-center bgc btn_box">
      <div class="btn text-c">下一步</div>
    </div>
  </div>
</template>

<script>
const times = {
  "00:00": ["00:00", "00:01", "00:02", "00:03", "00:04"],
  "00:01": ["00:00", "00:01", "00:02", "00:03", "00:04"]
};
export default {
  data() {
    return {
      isshow: false,

      columns: [
        {
          values: Object.keys(times),
          className: "column1"
        },
        {
          values: times["00:00"],
          className: "column2",
          defaultIndex: 2
        }
      ],

      text: "请选择交付时间"
    };
  },
  methods: {
    onConfirm(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.text = value;
      this.isshow = false;
    },
    onChange(picker, values) {
      picker.setColumnValues(1, times[values[0]]);
      console.log(times[values[0]]);
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

