<template>
  <div>
    <div class="flex-jc-between flex-align-items pd-15 bgc border-b" @click="isshow = true">
      <div>关系</div>
      <div class="flex-align-items fc-grey">
        <span v-if="text==''">请选择</span>
        <span v-else>{{text}}</span>
        <van-icon name="arrow"/>
      </div>
    </div>
    <div class="bgc">
      <div class="pd-15 border-b">
        <span>联系人姓名</span>
        <input type="text" placeholder="请输入" v-model="nameval">
      </div>
      <div class="pd-15">
        <span>联系人电话</span>
        <input type="text" placeholder="请输入" v-model="phoneval">
      </div>
    </div>

    <div class="pd-t-100">
      <div class="btn text-c" @click="submit">提交</div>
    </div>

    <div v-show="isshow" class="model full">
      <div class="main">
        <van-picker :columns="columns" show-toolbar @confirm="onConfirm" @cancel="isshow = false"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      nameval: "",
      phoneval: "",
      isshow: false,
      columns: ["朋友", "测试", "测试"],
      text: ""
    };
  },
  created() {
    this.getupdate();
  },

  methods: {
    onConfirm(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.text = value;
      this.isshow = false;
    },
    getupdate() {
      if (this.$route.params.id) {
        let postData = this.$qs.stringify({
          urgent_id: this.$route.params.id
        });
        this.axios
          .post(this.API + "api/Lease/urgent_detail", postData)
          .then(res => {
            console.log(res.data, "user_price");
            let resdata = res.data;
            if (resdata.code == 200) {
              this.text = resdata.data.urgent_sign;
              this.nameval = resdata.data.urgent_name;
              this.phoneval = resdata.data.urgent_phone;
            } else {
              Toast(resdata.message);
            }
          });
      }
    },
    submit() {
      if (this.text == "" || this.nameval == "" || this.phoneval == "") {
        Toast("请先填写完整");
        return;
      }
      let urgent_id = "";
      urgent_id = this.$route.params.id;
      if (urgent_id == "") {
        let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
        if (userinfo) {
          let postData = this.$qs.stringify({
            users_id: userinfo.users_id,
            urgent_phone: this.phoneval,
            urgent_name: this.nameval,
            urgent_sign: this.text
          });
          this.axios
            .post(this.API + "api/Lease/Add_urgent", postData)
            .then(res => {
              console.log(res.data, "user_price");
              let resdata = res.data;
              if (resdata.code == 200) {
                Toast("添加成功");
                this.$router.go(-1);
              } else {
                Toast(resdata.message);
              }
            });
        }
        
      } else {
        let postData = this.$qs.stringify({
          urgent_id: urgent_id,
          urgent_phone: this.phoneval,
          urgent_name: this.nameval,
          urgent_sign: this.text
        });
        this.axios
          .post(this.API + "api/Lease/urgent_update", postData)
          .then(res => {
            console.log(res.data, "user_price");
            let resdata = res.data;
            if (resdata.code == 200) {
              Toast("编辑成功");
              this.$router.go(-1);
            } else {
              Toast(resdata.message);
            }
          });
      }
    }
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
.model {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.main {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
