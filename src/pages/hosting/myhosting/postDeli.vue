<template>
  <div class="bgc full">
    <div class="flex-jc-between flex-align-items border-b pd-15 box">
      <diV>
        <div>选择交付门店</div>
      </diV>
      <div class="flex-align-items fc-grey">
        <van-icon name="arrow"/>
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
    return {};
  },
  methods: {}
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

