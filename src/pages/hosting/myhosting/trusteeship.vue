<template>
  <div>
    <div id="nav">
      <van-tabs @click="ontab" v-model="ind">
        <van-tab :title="item" v-for="(item,index) in navtitle" :key="index">
          <div class="position" v-for="(item,index) in list" :key="index">
            <div class="box flex-jc-around bgc" @click="toDetail(item.trust_id,item.trust_status)">
              <div>
                <img
                  :src="item.phone_picture"
                  class="goods_img"
                >
              </div>
              <div class="pd-15 flex-column-space-between">
                <div class="goods_title newline">{{item.model}}</div>
                <div class="flex-jc-between flex-align-items">
                  <div class="state">
                    <span v-if="item.trust_status==0||item.trust_status==1||item.trust_status==2">审核中</span>
                    <span v-if="item.trust_status==3||item.trust_status==4">待入库</span>
                    <span v-if="item.trust_status==5">在库</span>
                    <span v-if="item.trust_status==6">已退回</span>
                    <!-- <span v-if="ind==1||ind==0">审核中</span>
                    <span v-if="ind==2">在库</span>
                    <span>出租中</span>
                    <span v-if="ind==3">已退回</span> -->
                  </div>
                  <div>
                    <div class="btn border-blue" v-if="item.trust_status==5" @click.stop="cancelTg">取消托管</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      navtitle: ["全部", "审核中", "托管中", "已退回"],
      list: [],
      ind: 0
    };
  },
  beforeCreate(){
    if (!window.localStorage.getItem("userinfo")) {
      this.$router.replace({ path: "/login" });
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    ontab(index, title) {
      console.log(index, title);
      this.getlist()
    },
    getlist(){
      Toast.loading({ mask: true, message: "加载中..." });
      let postData = this.$qs.stringify({
          users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          state: this.ind
      });
      this.axios.post(this.API + "api/Trusteeship/queryTrusteeship", postData)
      .then(res => {
          console.log(res.data, "list");
          let resdata = res.data;
          if (resdata.code == 200) {
              Toast.clear();
              this.list = resdata.data
          } else {
              Toast.clear();
              Toast(resdata.message);
          }
      })
      .catch(error => {
          Toast.clear();
          Toast('网络出错')
      });
    },
    //托管详情
    toDetail(id,status) {
      if (status==0||status==1||status==2) {
        this.$router.push({ path: "/hostDetail/"+id });
      }
      if (status==5) {
        this.$router.push({ path: "/hostingDetail/"+id });
      }
      if (status==6) {
        this.$router.push({ path: "/hostingExpress/"+id });
      }
    },
    //取消托管
    cancelTg() {
      window.sessionStorage.removeItem("hostCancelSession");
      this.$router.push({ path: "/hostCancel" });
    },
  }
};
</script>

<style>
#nav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
</style>

<style scoped>
.box {
  margin: 10px 15px 0 15px;
  border-radius: 10px;
}

.goods_img {
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 13px;
}

.goods_title {
  font-size: 15px;
  width: 135px;
}
.state {
  color: #aeaeae;
}

.btn {
  color: #4ea9f9;
  border-radius: 15px;
  padding: 5px 10px;
}
</style>


