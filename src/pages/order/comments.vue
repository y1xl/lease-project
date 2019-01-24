<template>
  <div>
    <div class="goods bgc mar-b-10 flex-align-items box-sizing">
      <div class="flex-1">
        <div style="font-weight: bold;" class="mar-b-10">日本 instax拍立得</div>
        <div>黑色</div>
      </div>
      <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt="">
    </div>

    <div class="border-b text-c bgc ratebox">
      <van-rate v-model="rateval" @change="onRating" size="27"/>
    </div>

    <div class="textarea bgc"><textarea rows="6" v-model="contentval" placeholder="分享使用体验，有机会上我们的头版哦！分享视频内容，更有机会上New Bee官方抖音并拿大奖！"></textarea></div>
    <div class="bgc imglist">
        <img @click="onImagePreview(index)" :src="item.content" alt="" v-for="(item,index) in imgarr" :key="index">
      <van-uploader :after-read="onRead" accept="image/png, image/jpeg" multiple>
        <img src="../../assets/uploadimg.png" alt="">
      </van-uploader>
    </div>

    <div class="pd-15"><div class="btn text-c" @click="submit">提交</div></div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { Toast } from 'vant';
export default {
  data() {
    return {
      rateval: '',
      contentval:'',
      imgarr:[],
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
    },
    //预览
        onImagePreview(index){
            let arr = []
            for(let v of this.imgarr){
                arr.push(v.content)
            }
            ImagePreview({
                images: arr,
                startPosition: index,
            });
        },
    submit(){
      if(this.rateval==''){
        Toast('请先评星')
        return
      }
      if(this.contentval==''){
        Toast('请先填写内容')
        return
      }
    }
  }
};
</script>

<style scoped>
.goods{
  padding: 10px;
}
.goods img{
  width: 90px;
  height: 90px;
}
.ratebox {
  padding: 10px 0;
}
.textarea {
  padding: 10px;
}
.textarea textarea{
    width: 100%;
}
.imglist{
  padding: 10px 0;
}
.imglist img {
    width: 77px;
    height: 77px;
    padding-left: 10px;
    padding-bottom: 10px;
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
