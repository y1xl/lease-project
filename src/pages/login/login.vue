<template>
  <div class="bgc bigbox">
    <div class="flex-jc-center login_box">
      <div class="login">
        <div class="tip_title text-c pdt50">Hi!</div>
        <div class="tip_title text-c">欢迎加入</div>
        <div class="border-b pdt50">
          <input v-model.trim="newPhone" placeholder="请输入手机号" type="number" maxlength="11">
        </div>

        <button class="btn text-c" @click="toNext" :class="newPhone==''?'btn-grey':'act'">获取验证码</button>
        <div class="text-c pw_login " @click="password">使用密码登陆</div>

        <div class="other" v-if="isother">
          <div class="flex-center disan_box">
            <div class="line"></div>
            <div class="disan pd-lr-15">第三方账号登陆</div>
            <div class="line"></div>
          </div>
          <div class="flex-jc-around bott">
            <img src="../../assets/l_zhifubao.png" alt="支付宝" class="icon_img" @click="goali">
            <!-- <img src="../../assets/l_weixin.png" alt="微信" class="icon_img" @click="gowx"> -->
            <img src="../../assets/l_weibo.png" alt="新浪" class="icon_img" @click="gosina">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast,Dialog } from "vant";

export default {
  beforeRouteEnter(to, from, next) {
    if (location.href.includes('token')&&location.href.includes('from')) { // 用是否有shareId 来判断是不是分享出去的链接
        let url = `${location.origin}#${to.fullPath}`  
        window.location.href = url
    }else{
      next();
    }
  },
  data() {
    return {
      newPhone: "",
      isother:true,
      redirectUri: this.$route.query.redirectUri?this.$route.query.redirectUri:false
    };
  },
  beforeCreate(){
    if (location.href.includes('wakeup')&&location.href.includes('from')) { 
        let index = location.href.indexOf('wakeup')+6+1
        let shareId = location.href.slice(index)
        // console.log(shareId,'shareId')
        let url = `${location.origin}#/login?wakeup=${shareId}`  
        window.location.href = url
    }
  },
  created(){
    if(this.$route.query.wakeup){
      window.sessionStorage.setItem("wakeup",this.$route.query.wakeup);
      this.isother = false
    }
    if(this.$route.query.token){
      this.isother = false
    }
    if(this.$route.query.code){
      this.isother = false
    }
    if(this.$route.query.rpfriend){
      this.isother = false
    }
  },
  methods: {
    //下一步
    toNext() {
      // console.log(this.newPhone);
      if (this.newPhone == "") {
        return;
      }
      
      if (!(/^1\d{10}$/.test(this.newPhone))) {
        Toast("手机号格式不正确");
        return;
      }
      if(this.$route.query.token){
        if(this.redirectUri){
          this.$router.push({ path: `/inputCode/${this.newPhone}?token=${this.$route.query.token||''}&redirectUri=${this.redirectUri}` });
        }else{
          this.$router.push({ path: `/inputCode/${this.newPhone}?token=${this.$route.query.token||''}` });
        }
      }
      if(this.$route.query.code){
        if(this.redirectUri){
          this.$router.push({ path: `/inputCode/${this.newPhone}?code=${this.$route.query.code||''}&redirectUri=${this.redirectUri}` });
        }else{
          this.$router.push({ path: `/inputCode/${this.newPhone}?code=${this.$route.query.code||''}` });
        }
      }else{
        if(this.redirectUri){
          this.$router.push({ path: `/inputCode/${this.newPhone}?redirectUri=${this.redirectUri}` });
        }else{
          this.$router.push({ path: `/inputCode/${this.newPhone}` });
        }
      }
      
    },
    //密码登录
    password() {
      if(this.redirectUri){
        this.$router.push({ path: "/passwordLogin?redirectUri=" + this.redirectUri });
      }else{
        this.$router.push({ path: "/passwordLogin" });
      }
    },

    goali(){
      Toast.loading({ mask: true, message: "加载中..." });
      let postData = {
        users_id:'',
        auth_code: '',
        state: ''
      };
      this.axios.post("api/Order/aliLogin",postData).then(res => {
        console.log(res.data, "getaliToken");
        let resdata = res.data;
        if (resdata.code == 200) {
          Toast.clear();

          let url = resdata.data.url 
            Dialog.confirm({
              message: '是否进行支付宝授权'
            }).then(() => {
              window.location.href = `alipays://platformapi/startapp?appId=20000067&url=${url}`
            }).catch(() => {
              // on cancel
            });
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
    gosina(){
      Toast.loading({ mask: true, message: "加载中..." });
      this.axios.post("api/Order/Getweibo").then(res => {
        console.log(res.data, "gosina");
        let resdata = res.data;
        if (resdata.code == 200) {
          Toast.clear();

          Dialog.confirm({
              message: '是否进行新浪授权'
            }).then(() => {
              window.location.href = resdata.data
            }).catch(() => {
              // on cancel
            });
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
    gowx(){
      Toast.loading({ mask: true, message: "加载中..." });
      this.axios.post("api/Order/GetCodeUrl").then(res => {
        console.log(res.data, "gowx");
        let resdata = res.data;
        if (resdata.code == 200) {
          Toast.clear();

          Dialog.confirm({
              message: '是否进行微信授权'
            }).then(() => {
              // window.location.href = `${resdata.data}`

            }).catch(() => {
              // on cancel
            });
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

  }
};
</script>

<style scoped>
.bigbox {
  min-height: 100vh;
}
.pdt50 {
  padding-top: 50px;
}
.login_box {
  width: 100%;
  height: 100%;
}
.login {
  width: 250px;
  height: 100%;
}
.tip_title {
  font-size: 20px;
  line-height: 40px;
}
input {
  width: 100%;
  text-align: center;
  line-height: 40px;
}
.pw_login,
.disan {
  color: #aeaeae;
  line-height: 40px;
}
.pw_login {
  position: relative;
  top: 20px;
}
.disan_box {
  margin: 50px 0 20px 0;
}

.btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  border-radius: 20px;
  margin-top: 50px;
}
.btn-grey {
  background: rgba(191, 191, 191, 1);
}
.act {
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
}
.line {
  width: 50px;
  height: 1px;
  border-bottom: 1px solid #aeaeae;
}
.icon_img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.bott {
  padding-bottom: 15px;
}
</style>
