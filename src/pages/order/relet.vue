<template>
  <div>
    <div class="bgc mar-b-10">
      <div class="border-b flex-jc-between header flex-align-items">
        <span>选择续租的时间</span>
        <div class="time">
          <div class="border text-line" @click="isshow = true">
            {{weektext}}
            <img src="../../assets/icon-triangle.png" class="triangleimg">
          </div>
          <div class="border">
            <input
              type="number"
              v-model.trim="weekval"
              :disabled="weektext=='请选择'?true:false"
              class="bgc"
            >
          </div>
        </div>
      </div>
      <div class="pd-15">
        租金:
        <span class="fc-red">¥{{rent}}</span>
      </div>
    </div>

    <div class="bgc">
      <div class="border-b pd-15">请选择支付方式</div>
      <van-radio-group v-model="radio">
        <div class="flex-jc-between border-b pd-15" @click="radio = '1'">
          <div class>
            <img src="../../assets/weixin.png" alt="微信" class="payimg">
            微信
          </div>
          <van-radio name="1" checked-color="#2DBBF1"></van-radio>
        </div>
        <div class="flex-jc-between border-b pd-15" @click="radio = '2'">
          <div class>
            <img src="../../assets/ali.png" alt="支付宝" class="payimg">支付宝
          </div>
          <van-radio name="2" checked-color="#2DBBF1"></van-radio>
        </div>
        <div class="flex-jc-between pd-15" @click="radio = '3'">
          <div class>
            <img src="../../assets/balance.png" alt="余额" class="payimg">
            余额
            <span class="fc-red"> ¥{{info.users_balance}}</span>
          </div>
          <van-radio name="3" checked-color="#2DBBF1"></van-radio>
        </div>
      </van-radio-group>
    </div>

    <div class="pd-t-100">
      <div class="btn text-c" @click="submit">提交</div>
    </div>

    <van-popup v-model="isshow" position="bottom" :close-on-click-overlay="false">
      <van-picker :columns="columns" show-toolbar @cancel="isshow = false" @confirm="onConfirm"/>
    </van-popup>

    <van-popup v-model="showWXpay" :close-on-click-overlay='false'>
        <div class="wxbox">
            <p class="text-c border-b">请确认微信支付是否完成</p>
            <p class="text-c fc-red border-b" @click="goback">已完成支付</p>
            <p class="text-c fc-grey" @click="showWXpay = false">支付遇到问题，重新支付</p>
        </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast, Dialog } from "vant";
export default {
  data() {
    return {
      radio: "1",
      isshow: false,
      columns: ["天"],
      weektext: "请选择",
      weekval: "",
      isdisabled: true,
      rent: 0,
      info:'',
      showWXpay:false
    };
  },
  watch: {
    weekval() {
      if (this.weekval < 0) {
        this.weekval = 1
        Toast('不能为小于0');
        return;
      }
      let postData = this.$qs.stringify({
        order_id: this.$route.params.id,
        day: this.weekval
      });
      this.axios
        .post(this.API + "api/Lease_Order/orderRelet", postData)
        .then(res => {
          console.log(res.data, "weekval");
          let resdata = res.data;
          if (resdata.code == 200) {
            this.rent = resdata.data;
          } else {
            Toast(resdata.message);
          }
        });
    }
  },
  created(){
    let wxpayReletSession = JSON.parse(window.sessionStorage.getItem("wxpayReletSession"))
        if(wxpayReletSession){
            if(wxpayReletSession.orderid==this.$route.params.id){
                this.showWXpay = wxpayReletSession.state
            }
        }
    this.getinfo()
  },
  methods: {
    goback(){
      this.$router.go(-1);
    },
    getinfo() {
        let postData = this.$qs.stringify({
            users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
            order_id : this.$route.params.id
        });
        this.axios.post(this.API + "api/Order/GetPayData", postData)
        .then(res => {
            console.log(res.data, "info");
            let resdata = res.data;
            if (resdata.code == 200) {
                this.info = resdata.data;
            } else {
            Toast(resdata.message);
            }
        })
        .catch(error => {
            Toast('网络出错')
        });
    },

    onConfirm(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.weektext = value;
      this.isshow = false;
    },

    submit() {
      if (this.weekval == "" || this.weektext == "请选择") {
        Toast("请填写续租时间");
        return;
      }

      if (this.radio == 1) {
        // Toast("微信功能未开通");
        Toast.loading({ mask: true, message: "加载中..." });
        let postData = this.$qs.stringify({
          // users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_id: this.$route.params.id,
          pay_way: this.radio,
          day: this.weekval,
          money: this.rent
        });
        this.axios
          .post(this.API + "api/Lease_Order/orderRenew", postData)
          .then(res => {
            console.log(res.data, "wxpay");
            let resdata = res.data;
            if (resdata.code == 200) {
              Toast.clear();
              let wxpayReletSession = {
                  orderid:this.$route.params.id,
                  state: true
              }
              window.sessionStorage.setItem("wxpayReletSession", JSON.stringify(wxpayReletSession))
              window.location.href = resdata.data
            } else {
              Toast.clear();
              Toast(resdata.message);
            }
          })
          .catch(error => {
                Toast.clear()
                Toast('网络出错')
            });
      }
      if (this.radio == 2) {
        // Toast("支付宝功能未开通");
        Toast.loading({ mask: true, message: "加载中..." });
        let postData = this.$qs.stringify({
          // users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_id: this.$route.params.id,
          pay_way: this.radio,
          day: this.weekval,
          money: this.rent
        });
        this.axios
          .post(this.API + "api/Lease_Order/orderRenew", postData)
          .then(res => {
            console.log(res.data, "alipay");
            window.sessionStorage.removeItem("wxpayReletSession");
            Toast.clear()

            const form = res.data;
            const div = document.createElement('div');
            div.id = 'alipay';
            div.style.opacity='0'
            div.innerHTML = form;
            document.body.appendChild(div);
            document.querySelector('#alipay').children[0].submit();
          })
          .catch(error => {
                Toast.clear()
                Toast('网络出错')
            });
      }
      if (this.radio == 3) {
        Toast.loading({ mask: true, message: "加载中..." });
        let postData = this.$qs.stringify({
          // users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_id: this.$route.params.id,
          pay_way: this.radio,
          day: this.weekval,
          money: this.rent
        });
        this.axios
          .post(this.API + "api/Lease_Order/orderRenew", postData)
          .then(res => {
            console.log(res.data, "submit");
            let resdata = res.data;
            if (resdata.code == 200) {
              Toast.clear();
              Dialog.alert({
                message: "支付成功"
              }).then(e => {
                this.$router.replace({ path: "/order" });
              });
            } else {
              Toast.clear();
              Toast(resdata.message);
            }
          })
          .catch(error => {
                Toast.clear()
                Toast('网络出错')
            });
      }
    }
  }
};
</script>

<style scoped>
.payimg {
  width: 20px;
  height: 20px;
  padding-right: 10px;
  vertical-align: middle;
}
.triangleimg {
  width: 10px;
  height: 6px;
  vertical-align: middle;
}
.header {
  height: 53px;
  padding: 0 15px;
}
.time > div {
  display: inline-block;
  width: 70px;
  height: 28px;
  line-height: 29px;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
}
.time > div:nth-of-type(1) {
  margin-right: 5px;
}
.time input {
  width: 100%;
  text-align: center;
}
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

.wxbox {
    width: 200px;
}
.wxbox > p {
    padding: 10px 0;
}
</style>
