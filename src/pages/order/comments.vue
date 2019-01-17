<template>
  <div>
    <div class="header bgc mar-b-10 flex-jc-between">
      <div>
        <div>日本 instax拍立得</div>
        <div>黑色</div>
      </div>
      <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt="">
    </div>

    <div class="border-b text-c bgc">
      <van-rate v-model="value" @change="onRating"/>
    </div>

    <div class="textarea"><textarea name="" id="" cols="30" rows="10" placeholder="写下商品使用体会，可以更好的帮助其他小伙伴哦~"></textarea></div>
    <div class="bgc imglist">
        <img :src="item.content" alt="" v-for="(item,index) in imgarr" :key="index">
      <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
        <van-icon name="photograph"/>
      </van-uploader>
    </div>

    <div style="padding:0 10px"><div class="btn text-c">提交</div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      imgarr:[]
    };
  },
  methods: {
      //评星
    onRating(e) {
      console.log(e);
    },
    //图片
    onRead(file) {
      console.log(file)
      this.imgarr.push(file)
    }
  }
};
</script>

<style scoped>
.header img{
  width: 90px;
  height: 90px;
}
.textarea textarea{
    width: 100%;
}
.imglist img {
    width: 77px;
    height: 77px;
}
.btn{
    margin-top: 76px;
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
</style>
