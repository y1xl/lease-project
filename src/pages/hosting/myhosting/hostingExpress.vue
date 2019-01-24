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

        <div class="pd-lr-15">
            <div class="mar-b-10">快递：顺丰</div>
            <div>运单号：1234564879</div>
        </div>

        <div class="box express">
            <div class="item flex-align-items">
                <span>11:00</span>
                <span class="flex-1">物流信息物流信息物流信息物流信息物流信息物流信息</span>
            </div>
            <div class="item flex-align-items">
                <span>11:00</span>
                <span class="flex-1">物流信息物流信息物流信息物流信息物流信息物流信息</span>
            </div>
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
        }
    }
}
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

.express .item {
    padding: 10px;
}
.express .item > span:nth-of-type(1){
    width: 50px;
}
</style>
