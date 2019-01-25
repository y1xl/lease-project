<template>
  <div>
    <div class="bgc tag">
      <van-tag type="success">推荐</van-tag>
    </div>
    <div class="bgc list">
      <van-radio-group v-model="radio">
        <div
          class="flex-align-items card"
          :class="index===list.length-1?'':'border-b'"
          @click="radio = index"
          v-for="(item,index) in list"
          :key="index"
        >
          <van-radio :name="index" checked-color="#2DBBF1"></van-radio>
          <div class="item flex-align-items flex-jc-between flex-1">
            <div class="left flex-1">
              <div>{{item.title}}</div>
              <div class="fsz12">{{item.address}}</div>
            </div>
            <div class="right fsz12">距您74m</div>
          </div>
        </div>
      </van-radio-group>
    </div>

    <div class="height"></div>
    <div class="btn text-c" @click="submit">完成</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "深圳龙华九方店",
          address: "深圳市龙华新区龙华街道九方A座1001号"
        },
        { id: 2, title: "深圳龙华九方店", address: "深圳市" }
      ],
      radio: 0
    };
  },
  methods: {
    submit() {
      if (this.$route.params.type == "shopping") {
        let shoppingSession = JSON.parse(
          window.sessionStorage.getItem("shoppingSession")
        );
        shoppingSession.getlocation = this.list[this.radio];
        window.sessionStorage.setItem(
          "shoppingSession",
          JSON.stringify(shoppingSession)
        );
      }
      if (this.$route.params.type == "buy") {
        let buySession = JSON.parse(
          window.sessionStorage.getItem("buySession")
        );
        buySession.getlocation = this.list[this.radio];
        window.sessionStorage.setItem("buySession", JSON.stringify(buySession));
      }
      if (this.$route.params.type == "sceneDeli") {
        let sceneDeliSession = JSON.parse(
          window.sessionStorage.getItem("sceneDeliSession")
        );
        sceneDeliSession.getlocation = this.list[this.radio];
        window.sessionStorage.setItem(
          "sceneDeliSession",
          JSON.stringify(sceneDeliSession)
        );
      }
      if (this.$route.params.type == "postDeli") {
        let postDeliSession = JSON.parse(
          window.sessionStorage.getItem("postDeliSession")
        );
        postDeliSession.getlocation = this.list[this.radio];
        window.sessionStorage.setItem(
          "postDeliSession",
          JSON.stringify(postDeliSession)
        );
      }
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.tag {
  padding-top: 15px;
  padding-left: 30px;
}
.height {
  height: 42px;
}
.fsz12 {
  font-size: 12px;
}
.btn {
  height: 42px;
  line-height: 42px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.card {
  padding: 10px;
}
.card .left {
  padding: 0 10px;
}
.card .right {
  max-width: 68px;
}
</style>
