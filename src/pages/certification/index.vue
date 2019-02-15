<template>
  <div class="full bgc">
    <div class="pd-15">
      <div class="header">
        <div class="text-c">我的额度</div>
        <div class="text-c">{{users_money}}</div>
      </div>
    </div>

    <div class="pd-15 border-b rz-style">认证免押金方式</div>
    <router-link class="flex-jc-between pd-15 border-b" to="/realname">
      <div>实名认证</div>
      <div class="flex-align-items">
        <span class="fc-blue mr" v-if="!realname">去认证</span>
        <span class="fc-grey mr" v-else>已认证</span>
        <van-icon name="arrow"/>
      </div>
    </router-link>
    <router-link class="flex-jc-between pd-15 border-b" to="/school">
      <div>学籍认证</div>
      <div class="flex-align-items">
        <span class="fc-blue mr">去认证</span>
        <span class="fc-grey mr">已认证</span>
        <van-icon name="arrow"/>
      </div>
    </router-link>
    <router-link class="flex-jc-between pd-15 border-b" to>
      <div>邀请好友</div>
      <div class="flex-align-items">
        <!-- <span class="fc-blue mr">去认证</span>
        <span class="fc-grey mr">已认证</span>-->
        <van-icon name="arrow"/>
      </div>
    </router-link>
    <router-link class="flex-jc-between pd-15 border-b" to="/cpeople">
      <div>添加紧急联系人</div>
      <div class="flex-align-items">
        <van-icon name="arrow"/>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      users_money: "",
      realname:'',
      users_name: ""
    };
  },
  created() {
    this.userprice();
  },
  methods: {
    userprice() {
      let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
      if (userinfo) {
        Toast.loading({ mask: true,message: '加载中...'})
        let postData = this.$qs.stringify({
          users_id: userinfo.users_id
        });
        this.axios
          .post(this.API + "api/Lease/user_price", postData)
          .then(res => {
            console.log(res.data, "user_price");
            let resdata = res.data;
            if (resdata.code == 200) {
              Toast.clear()
              this.users_money = resdata.data.users_money;
              this.realname = resdata.data.is_idcard
              let users_name = "";
              users_name = resdata.data.users_name;
            } else {
              Toast.clear()
              Toast(resdata.message);
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.mr {
  margin-right: 10px;
}
.header {
  height: 140px;
  background-image: linear-gradient(90deg, #5f99fd 0%, #2974f1 100%);
  border-radius: 5px;
  color: #fff;
}
.rz-style {
  background: #f6f6f6;
}
.header > div:nth-of-type(1) {
  /* font-size: 12px; */
  padding-top: 30px;
}
.header > div:nth-of-type(2) {
  font-size: 30px;
  padding-top: 10px;
}
</style>
