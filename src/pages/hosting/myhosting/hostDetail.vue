<template>
  <div>
    <div class="box">
      <div class="flex-jc-center position">
        <div class="banner bgc">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in images" :key="index">
              <div class="img_box">
                <img :src="item">
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
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
          <span>颜色：</span>
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
    </div> -->
    <!-- 未通过 -->
    <!-- <div class="state text-c">
      <div>很抱歉！</div>
      <div>您的资料未通过审核</div>
    </div> -->

    <div class="bgc">
      <div class="pd-15">交付方式</div>
      <div class="nav bgc pd-lr-15">
        <div :class="{ 'fc-blue selected': typenum==0 }" @click="typenum=0">
          <div>现场交付</div>
        </div>

        <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">
          <div>快递交付</div>
        </div>
        <div :class="{ 'fc-blue selected': typenum==2 }" @click="typenum=2">
          <div>平台配送</div>
        </div>
      </div>
    </div>
    <div class="bgc hostcode flex-jc-between flex-align-items mar-b-10">
      <span>托管码</span>
      <img src="../../../assets/right.png" class="img_r">
    </div>
    
    <div class="flex-jc-center btn_box">
      <div class="btn text-c" @click="next">下一步</div>
    </div>

    <!-- 托管成功弹窗 -->
    <van-popup v-model="showmodel" :close-on-click-overlay="false">
      <div class="text-c position mask_box">
        <div class="flex-jc-center">
          <img src="../../../assets/tg_success.png" class="tg_success">
          <span class="icon" @click="showmodel = false">
            <van-icon name="cross" color="#aeaeae" size="25px"/>
          </span>
        </div>

        <div class="gongxi">恭喜，托管成功！</div>

        <div class="gongxi">请将设备交给我们保管吧！</div>

        <!-- <div class="zhiyin">
          说明
        </div> -->
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg"
      ],
      typenum: 0,
      showmodel: true,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    beforeClose(action, done) {
      if (action === "confirm") {
        setTimeout(done, 1000);
      } else {
        done();
      }
    },
    next(){
      if(this.typenum==0){
        window.sessionStorage.removeItem('sceneDeliSession');
        this.$router.push({ path: "/sceneDeli" })
      }
      if(this.typenum==1){
        window.sessionStorage.removeItem('postDeliSession');
        this.$router.push({ path: "/postDeli" })
      }
      if(this.typenum==2){
        window.sessionStorage.removeItem('platformDeliSession');
        this.$router.push({ path: "/platformDeli" })
      }
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
  overflow: hidden;
}

.banner {
  width: 290px;
  height: 230px;
}
.img_box {
  width: 290px;
  height: 230px;
}
.img_box img {
  width: 100%;
  height: 100%;
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
  padding: 25px 15px;
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

/* 托管成功弹窗样式 */
.mask_box {
  width: 240px;
  margin: 25px;
}
.gongxi {
  font-size: 15px;
  height: 25px;
  line-height: 25px;
}
.icon {
  position: absolute;
  top: -10px;
  right: -10px;
}
.tg_success {
  width: 80px;
  height: 85px;
  margin: 10px;
}
.zhiyin {
  color: #aeaeae;
  margin-top: 10px;
}
</style>

