<template>
  <div>
    <div id="nav">
      <van-tabs @click="ontab" v-model="ind">
        <van-tab :title="item" v-for="(item,index) in navtitle" :key="index">
          <div v-show="list.length==0" class="fc-grey text-c pd-15">没有更多了</div>
          
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
                    <span v-if="item.trust_status=='待审核'||item.trust_status=='审核通过'||item.trust_status=='审核未通过'">审核中</span>
                    <span v-if="item.trust_status=='快递中'||item.trust_status=='主机入库中'">待入库</span>
                    <span v-if="item.trust_status=='托管中'">在库</span>
                    <span v-if="item.trust_status=='已退回'">已退回</span>
                    <!-- <span>出租中</span> -->
                  </div>
                  <div>
                    <div class="btn border-blue" v-if="item.trust_status==5" @click.stop="cancelTg(item.trust_id,)">取消托管</div>
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
  beforeRouteEnter(to, from, next) {
    let urlarr = ['审核详情','托管详情','取消托管']
    if(urlarr.includes(from.meta.title)) {
        to.meta.isBack = true;
    }
    next();
  },
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
    this.isFirstEnter = true;
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
              this.list = []
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
      if (status=='待审核'||status=='审核通过'||status=='审核未通过'||status=='快递中'||status=='主机入库中') {
        this.$router.push({ path: "/hostDetail/"+id });
      }
      if (status=='托管中') {
        this.$router.push({ path: "/hostingDetail/"+id });
      }
      if (status=='已退回') {
        this.$router.push({ path: "/hostingExpress/"+id });
      }
    },
    //取消托管
    cancelTg(id) {
      window.sessionStorage.removeItem("hostCancelSession");
      this.$router.push({ path: "/hostCancel/"+id });
    },
  },

  activated() {
     if(!this.$route.meta.isBack || this.isFirstEnter){
       this.ind=0,
       this.list=[]
       this.getlist()
     }else{
       this.getlist()       
     }
     this.$route.meta.isBack=false
     this.isFirstEnter=false;
  },
};
</script>

<style scoped>
#nav >>> .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
} 
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


