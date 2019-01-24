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

        <div id="hnav">
            <van-tabs v-model="active">
                <van-tab title=" 出租记录">
                <div class="tab_box">
                    <div class="flex-jc-between flex-align-items pd-15" v-for="index in 5" :key="index">
                    <div>
                        <div>共计10天</div>
                        <div class="time">2018-12-19～2018-12-29</div>
                    </div>
                    <div>
                        <span class="jia">+</span>
                        <span class="money">670</span>
                    </div>
                    </div>
                </div>
                </van-tab>
                <van-tab title="收益记录">
                <div class="tab_box text-c">
                    <div class="time pd-15">可分成</div>
                    <div class="fc_money">670</div>
                    <div class="flex-jc-between pd-15">
                    <div>
                        <div class="time">当月总租金</div>
                    </div>
                    <div class="time">690</div>
                    </div>
                </div>
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            images: [
                "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
                "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
                "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg"
            ],
            active:0
        }
    }
}
</script>

<style>
#hnav .van-tab {
    background-color: #f6f6f6;
}
#hnav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
</style>

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

.tab_box {
  margin: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px 0px rgba(188, 188, 188, 0.32);
  border-radius: 10px;
}
.jia {
  color: #4ea9f9;
}
.money {
  color: #4ea9f9;
  font-size: 16px;
}
.fc_money {
  color: #4ea9f9;
  font-size: 50px;
}
.time {
  color: #aeaeae;
  font-size: 12px;
}
</style>
