<template>
  <div>
    <div class="flex-jc-center bgc">
      <div class="img_b">
        <img class="top_img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1337839379,464669222&fm=26&gp=0.jpg">
      </div>
    </div>
    <div>
      <van-list v-model="loading" :finished="finished" @load="onLoad" class="flex-wrap bgc">
        <div v-for="(item,index) in list" :key="index" :title="item">
          <div class="item text-c">
            <div class="flex-jc-center img_b1">
                <img class="img" src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg">
            </div>
            <div class="text-line pro_title mar-b-10">日本 instax拍立得日本 instax拍立得</div>
            <div>
              <span class="price">¥3.08</span><span class="f12">/日</span>
            </div>
          </div>
        </div>
        <!-- <div class="text-c no_more">
          <span>没有更多了</span>
        </div> -->
      </van-list>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page:1
    };
  },
  created(){
    // this.getlist()
  },
  methods: {
    onLoad() {
      // // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 10) {
      //     this.finished = true;
      //   }
      // }, 500);

      let postData = this.$qs.stringify({
          scene_id: this.$route.params.id,
          page: this.page
      })
      this.axios.post(this.API + 'api/Lease/Scene_goods',postData)
      .then( res => {
          console.log(res.data,'getbanner'); 
          let resdata = res.data
          if(resdata.code == 200){
            this.list = this.list.push(resdata.data)
          }else {
            Toast(resdata.message)
          }
      })
       this.loading = false;
    },
    getlist(){
      Toast.loading({ mask: true,message: '加载中...'})
      let postData = this.$qs.stringify({
          scene_id: this.$route.params.id,
          page: this.page
      })
      this.axios.post(this.API + 'api/Lease/Scene_goods',postData)
      .then( res => {
          console.log(res.data,'getbanner'); 
          let resdata = res.data
          if(resdata.code == 200){
            this.list = [...resdata.data,...resdata.data]
            // this.loading = false;
          }else {
            Toast(resdata.message)
          }
          Toast.clear()
      })
    },
  }
};
</script>

<style scoped>
.f12 {
  font-size: 12px;
}
.img_b {
  width: 92%;
  height: 120px;
  margin-top: 13px;
}
.top_img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.item {
  width: 140px;
  height: 204px;
  background: #f7f7f7;
  border-radius: 5px;
  margin: 13px 0 0 13px;
}
.img_b1 {
  font-size: 0;
  height: 120px;
  width: 100%;;
}
.img {
  width: 100%;
  height: 100%;
}
.pro_title {
  padding: 20px 20px 0 20px;
}
.price {
  color: #f21e1e;
}
.no_more {
  width: 100%;
  color: #cecece;
  padding: 12px 0;
}
</style>