<template>
  <div>
    <div class="pd-15 bgc">请选择日期</div>
    <div id="calendar">
      <Calendar @choseDay="clickDay" :agoDayHide="nowdate"></Calendar>
    </div>
    <div class="fc-red tip pd-15">
      如当前没有您所需要的档期，请选择预租下单，我们将在24小时内
      回复是否可以满足您的需求.
    </div>
    <div class="pd-t-100">
      <div class="btn text-c">预租下单</div>
    </div>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";

export default {
  components: {
    Calendar
  },
  data() {
    return {
      value: "",
      nowdate: String(Date.now() - 86400000).slice(0, 10)
    };
  },
  created() {},
  methods: {
    clickDay(date) {
      console.log(date);
      if (this.$route.params.type == "shopping") {
        let shoppingSession = JSON.parse(
          window.sessionStorage.getItem("shoppingSession")
        );
        shoppingSession.getdate = date;
        window.sessionStorage.setItem(
          "shoppingSession",
          JSON.stringify(shoppingSession)
        );
      }
      if (this.$route.params.type == "refund") {
        let refundSession = JSON.parse(
          window.sessionStorage.getItem("refundSession")
        );
        refundSession.backdate = date;
        window.sessionStorage.setItem(
          "refundSession",
          JSON.stringify(refundSession)
        );
      }
      if (this.$route.params.type == "appointmentExpress") {
        let appointmentExpress = JSON.parse(
          window.sessionStorage.getItem("appointmentExpress")
        );
        appointmentExpress.date = date;
        window.sessionStorage.setItem(
          "appointmentExpress",
          JSON.stringify(appointmentExpress)
        );
      }
      if (this.$route.params.type == "hostCancel") {
        let hostCancelSession = JSON.parse(
          window.sessionStorage.getItem("hostCancelSession")
        );
        hostCancelSession.date = date;
        window.sessionStorage.setItem(
          "hostCancelSession",
          JSON.stringify(hostCancelSession)
        );
      }
      if (this.$route.params.type == "platformDeli") {
        let platformDeliSession = JSON.parse(
          window.sessionStorage.getItem("platformDeliSession")
        );
        platformDeliSession.date = date;
        window.sessionStorage.setItem(
          "platformDeliSession",
          JSON.stringify(platformDeliSession)
        );
      }
      if (this.$route.params.type == "sceneDeli") {
        let sceneDeliSession = JSON.parse(
          window.sessionStorage.getItem("sceneDeliSession")
        );
        sceneDeliSession.date = date;
        window.sessionStorage.setItem(
          "sceneDeliSession",
          JSON.stringify(sceneDeliSession)
        );
      }
      if (this.$route.params.type == "postDeli") {
        let postDeliSession = JSON.parse(
          window.sessionStorage.getItem("postDeliSession")
        );
        postDeliSession.date = date;
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

<style>
#calendar .wh_content_all {
  background-color: #fff;
}
#calendar .wh_jiantou1 {
  border-color: #000;
}
#calendar .wh_jiantou2 {
  border-color: #000;
}
#calendar .wh_top_changge li {
  color: #000;
}
#calendar .wh_content_item {
  color: #000;
}
#calendar .wh_content_item .wh_chose_day {
  background-color: #50abf9;
  color: #fff;
}
</style>

<style scoped>
.tip {
  font-size: 12px;
}
.pd-t-100 {
  padding: 0 15px;
  padding-top: 100px;
  padding-bottom: 15px;
}
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
</style>
