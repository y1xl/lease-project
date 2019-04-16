<template>
  <div class="bgc full">
    <div class="flex-jc-center">
      <div class="inputcode">
        <div class="tip_title text-c">请输入验证码</div>
        <div class="text-c tel">{{phone}}</div>

          <van-password-input :value="value" @focus="showKeyboard = true" :length="lengths"/>
          <button class="btn text-c" @click="login" :class="value==''?'btn-grey':'bgc-blue'">登陆</button>

        <div class="text-c resent" @click="sendcode">重新发送</div>
      </div>
    </div>

        <!-- 数字键盘 -->
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data(){
    return{
      phone: this.$route.params.phone,
      value: '',
      lengths: 6,
      showKeyboard: true
    }
  },
  created(){
    this.sendcode()
  },
  methods: {
    sendcode(){
      let postData = this.$qs.stringify({
            users_phone:this.$route.params.phone
        })
      this.axios.post(this.API + "api/Lease/Forget_PassWord",postData)
      .then(res => {
        console.log(res.data, "sendcode");
        let resdata = res.data;
        if (resdata.code == 200) {
          Toast('发送成功')
        } else {
          Toast(resdata.message);
        }
      });
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, this.lengths);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    //登录
    login() {
      // console.log(this.value)
      if(this.value==''){
        return
      }

      Toast.loading({ mask: true, message: "加载中..." })
      let postData = this.$qs.stringify({
        users_phone:this.$route.params.phone,
        yzm: this.value,
        token: this.$route.query.token||'',
        code: this.$route.query.code||'',
        wakeup: window.sessionStorage.getItem("wakeup")||''
      })
      this.axios.post(this.API + "api/Lease/Yzm_Login",postData)
      .then(res => {
        console.log(res.data, "login");
        let resdata = res.data;
        if (resdata.code == 200) {
          Toast.clear();
          window.localStorage.setItem("userinfo",JSON.stringify(resdata.data))
          
          if(window.sessionStorage.getItem("rpfriend")){
            window.sessionStorage.removeItem("rpfriend");
            this.$router.replace({ path: "/rpfriend" });
          }else if(window.sessionStorage.getItem("friendBuyShareid")){
            let { goodsid,guige } = JSON.parse(window.localStorage.getItem("friendBuyShareid"))
            window.sessionStorage.removeItem("friendBuyShareid");
            this.$router.replace({ path: `/friendBuyShare?goodsid=${goodsid}&guige=${guige}` });
          }else if(window.sessionStorage.getItem("friendBuyOrder")){
            let { id,friendid,guige,data } = JSON.parse(window.localStorage.getItem("friendBuyOrder"))
            window.sessionStorage.removeItem("friendBuyOrder");
            this.$router.replace({ path: `/friendBuy?id=${id}&friendid=${friendid}&guige=${guige}&data=${data}` });
          }
          else{
            window.sessionStorage.removeItem("wakeup");
            this.$router.replace({ path: "/" });
          }
        } else {
          Toast.clear();
          Toast(resdata.message);
        }
      });

    }
  }
};
</script>

<style scoped>
.inputcode {
  width: 250px;
}
.tip_title {
  padding-top: 70px;
  font-size: 20px;
}
.tel,
.resent {
  color: #aeaeae;
  font-size: 12px;
  line-height: 40px;
}
.input_box {
  height: 40px;
  margin-top: 30px;
}

.input_box input {
  text-align: center;
  width: 38px;
  height: 37px;
}
.border_right {
  width: 40px;
  height: 40px;
  border-right: 1px solid #b7b7b7;
}
.btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  /* background: rgba(191, 191, 191, 1); */
  border-radius: 20px;
  margin-top: 80px;
}
.btn-grey {
  background: rgba(191, 191, 191, 1);
}
</style>
