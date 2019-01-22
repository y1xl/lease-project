<template>
  <div class="bgc full">
    <div class="box">
      <div class="banner text-c">
        <van-swipe :autoplay="3000" @change="onChange">
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <img :src="item">
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="title text-line">Canon/佳能 EOS 200D 单反相机入门级</div>
      <div class="detail">
        <div class="hang">
          <span>型号：</span>
          <span>x14886232548</span>
        </div>
        <div class="hang">
          <span>序列号：</span>
          <span>白</span>
        </div>
        <div class="hang">
          <span>成色：</span>
          <span>9新</span>
        </div>
        <div class="hang">
          <span>功能：</span>
          <span>完好</span>
        </div>
        <div class="hang">
          <span>配件：</span>
          <span>镜头盖 相机包 电池 sd卡</span>
        </div>
      </div>
    </div>
    <!-- 审核中 -->
    <!-- <div class="state text-c">
      <div>您的物品正在审核中</div>
      <div>请耐心等候！</div>
    </div>-->
    <!-- 未通过 -->
    <!-- <div class="state text-c">
      <div>很抱歉！</div>
      <div>您的资料未通过审核</div>
    </div>-->
    <div class="bgc">
      <div class="pd-15">交付方式</div>
      <div class="nav bgc pd-lr-15">
        <div :class="{ 'fc-blue selected': typenum==0 }" @click="typenum=0">现场交付</div>
        <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">快递交付</div>
        <div :class="{ 'fc-blue selected': typenum==2 }" @click="typenum=2">平台配送</div>
      </div>
    </div>
    <div class="bgc hostcode flex-jc-between flex-align-items">
      <span>托管码</span>
      <img src="../../../assets/right.png" class="img_r">
    </div>
    <div class="flex-jc-center bgc btn_box">
      <div class="btn text-c">下一步</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
        "https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
        "https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
        "https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99"
      ],
      typenum: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
<style scoped>
.box {
  margin: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px 0px rgba(188, 188, 188, 0.32);
}

.banner {
  width: 100%;
  height: 220px;
}
.banner img {
  width: 93.3%;
  height: 200px;
  border-radius: 5px;
  padding: 15px 0;
}
.title {
  margin: 10px;
  font-size: 16px;
}
.detail {
  padding: 10px;
  color: #383838;
}
.hang {
  line-height: 30px;
}
.state {
  margin: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px 0px rgba(188, 188, 188, 0.32);
  color: #4ea9f9;
  padding: 30px 0;
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
.img_r {
  width: 5px;
  height: 10px;
}
.btn_box {
  width: 100%;
}
.btn {
  width: 280px;
  height: 40px;
  margin-bottom: 20px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
</style>

