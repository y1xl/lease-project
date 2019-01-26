<template>
  <div>
    <van-radio-group v-model="radio" @change="onchoose">
      <div v-for="(item,index) in list" :key="index" class="card">
        <van-swipe-cell :right-width="65" :on-close="onClose">
          <div class="bgc flex-align-items item">
            <van-radio :name="index" checked-color="#2DBBF1"></van-radio>
            <div class="flex-1 left">
              <div class="mar-b-10">{{item.name}} {{item.phone}}</div>
              <div>
                <van-tag plain type="danger" v-if="item.default">默认</van-tag>
                {{item.address}}
              </div>
            </div>
            <img src="../../assets/icon-editor.png" alt="编辑" class="editorimg">
          </div>
          <div slot="right" class="del">删除</div>
        </van-swipe-cell>
      </div>
    </van-radio-group>

    <div class="height"></div>
    <div class="add">
      <router-link to="/addaddress">
        <div class="btn text-c">新增地址</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "曾小姐",
          phone: "123456789",
          address: "深圳市龙华新区龙华街道九方A座1001号",
          default: true
        },
        { id: 2, name: "曾小姐", phone: "123", address: "深圳市" }
      ],
      radio: -1
    };
  },
  methods: {
    // 删除
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "确定删除吗？"
          }).then(() => {
            instance.close();
          });
          break;
      }
    },

    onchoose(val) {
      // console.log(val)
      if (this.$route.params.type == "shopping") {
        let shoppingSession = JSON.parse(
          window.sessionStorage.getItem("shoppingSession")
        );
        shoppingSession.getaddress = this.list[val];
        window.sessionStorage.setItem(
          "shoppingSession",
          JSON.stringify(shoppingSession)
        );
      }
      if (this.$route.params.type == "refund") {
        let refundSession = JSON.parse(
          window.sessionStorage.getItem("refundSession")
        );
        refundSession.getaddress = this.list[val];
        window.sessionStorage.setItem(
          "refundSession",
          JSON.stringify(refundSession)
        );
      }
      if (this.$route.params.type == "appointmentExpress") {
        let appointmentExpress = JSON.parse(
          window.sessionStorage.getItem("appointmentExpress")
        );
        appointmentExpress.getaddress = this.list[val];
        window.sessionStorage.setItem(
          "appointmentExpress",
          JSON.stringify(appointmentExpress)
        );
      }
      if (this.$route.params.type == "buy") {
        let buySession = JSON.parse(
          window.sessionStorage.getItem("buySession")
        );
        buySession.getaddress = this.list[val];
        window.sessionStorage.setItem("buySession", JSON.stringify(buySession));
      }
      if (this.$route.params.type == "hostCancel") {
        let hostCancelSession = JSON.parse(
          window.sessionStorage.getItem("hostCancelSession")
        );
        hostCancelSession.getaddress = this.list[val];
        window.sessionStorage.setItem(
          "hostCancelSession",
          JSON.stringify(hostCancelSession)
        );
      }
      if (this.$route.params.type == "postDeli") {
        let postDeliSession = JSON.parse(
          window.sessionStorage.getItem("postDeliSession")
        );
        postDeliSession.getaddress = this.list[val];
        window.sessionStorage.setItem(
          "postDeliSession",
          JSON.stringify(postDeliSession)
        );
      }
      if (this.$route.params.type == "preBuy") {
        let prebuySession = JSON.parse(
          window.sessionStorage.getItem("prebuySession")
        );
        prebuySession.getaddress = this.list[val];
        window.sessionStorage.setItem(
          "prebuySession",
          JSON.stringify(prebuySession)
        );
      }
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.height {
  height: 85px;
}
.add {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 15px;
  box-sizing: border-box;
}
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}

.del {
  background-color: #d2d2d2;
  color: #fff;
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  margin: 15px;
  border-radius: 8px;
  overflow: hidden;
}
.card .item {
  padding: 10px;
}
.card .left {
  padding: 0 10px;
}
.editorimg {
  width: 20px;
  height: 20px;
}
</style>
