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
              <div>{{item.store_name}}</div>
              <div class="fsz12">{{item.store_province+item.store_city+item.store_district+(item.store_Address||'')}}</div>
            </div>
            <div class="right fsz12">距您{{item.juli}}m</div>
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
      list: [ ],
      radio: 0
    };
  },
  created(){
    this.getlist()
  },
  methods: {
    getlist(){
      let postData = this.$qs.stringify({
          lat: JSON.parse(window.localStorage.getItem("center")).lat,
          lng: JSON.parse(window.localStorage.getItem("center")).lng,
          goods_id:this.$route.params.id,
          page:1
      })
      this.axios.post(this.API + "api/Order/GetSelfShop",postData)
        .then(res => {
            console.log(res.data, "list")
            let resdata = res.data
            if (resdata.code == 200) {
                this.list = resdata.data
            } else {
                Toast(resdata.message)
            }
        });
    },
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
