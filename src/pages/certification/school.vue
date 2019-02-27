<template>
  <div>
    <!-- <div class="bgc box">
      <div class="pd-15 border-b">
        <span class="w">姓名</span>
        <input type="text" placeholder="请输入" v-model.trim="nameval">
      </div>
      <div class="pd-15">
        <span class="w">身份证</span>
        <input type="text" placeholder="请输入" v-model.trim="phoneval">
      </div>
    </div>
    <div class="pd-t-100">
      <div class="btn text-c" @click="submit">提交</div>
    </div> -->
    <van-popup v-model="showmodel1" :close-on-click-overlay="false">
      <div class="model1">
        <div class="text-c pd-15" v-if="mxcode&&mxcode==1">认证成功</div>
        <div class="text-c pd-15" v-else>认证失败</div>
        <div class="text-c pd-lr-15 mar-b-10"><router-link to="/" replace><van-button type="default" size="large">回到首页</van-button></router-link></div>
        <div v-if="mxcode&&mxcode!=1" class="text-c pd-lr-15 mar-b-10" @click="getgo"><van-button type="danger" size="large">重新认证</van-button></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      // nameval: "",
      // phoneval: ""
      showmodel1: false,
      mxcode: null
    };
  },
  created(){
    //mxcode=1&taskType=chsi&message=认证成功&loginDone=1&userId=3&account=421002199604251410&taskId=97020380-3996-11e9-b239-00163e00413f
    let mxcode = this.$route.query.mxcode
    if(mxcode){
      this.mxcode = this.$route.query.mxcode
      // let taskType = this.$route.query.taskType
      // let message = this.$route.query.message
      // let loginDone = this.$route.query.loginDone
      // let userId = this.$route.query.userId
      // let account = this.$route.query.account
      // let taskId = this.$route.query.taskId

    }else{
      // this.getgo()
    }
  },
  methods: {
    getgo() {
      Toast.loading({ mask: true, message: "加载中..." });
        let postData = this.$qs.stringify({
            users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
        });
        this.axios.post(this.API + "api/Order/GetCHISUrl", postData)
        .then(res => {
            console.log(res.data, "goschool");
            let resdata = res.data;
            if (resdata.code == 200) {
                window.location.href = resdata.data
            } else {
                Toast(resdata.message);
            }
        })
        .catch(error => {
            Toast('网络出错')
        });
    },
    // submit() {
    //   if (this.nameval == "" || this.phoneval == "") {
    //     Toast("请先填写完整");
    //     return;
    //   }
    //   Toast("此功能未开通");
    // }
  }
};
</script>

<style scoped>
.pd-t-100 {
  padding: 0 15px;
  padding-top: 100px;
}
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}

.box {
  border-radius: 10px;
  overflow: hidden;
  margin: 15px;
}
.box .w {
  width: 50px;
  display: inline-block;
}

.model1 {
  width: 200px;
}
</style>
