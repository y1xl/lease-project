<template>
  <div>
    <div class="bgc box">
      <van-cell :title="item.help_name" is-link :to="`/CommonProblem?id=${item.help_id}`" v-for="(item,index) in list" :key="index"/>
      <!-- <van-cell title="租赁规则" is-link to="rules"/> -->
      <van-cell title="在线客服" is-link/>
      <a href="tel:400-0000-688">
        <van-cell title="电话客服" is-link/>
      </a>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list:[]
    };
  },
  created(){
    this.getdata()
  },
  methods:{
    getdata() {
      this.axios.post(this.API + "api/Lease/help").then(res => {
        console.log(res.data, "help");
        let resdata = res.data;
        if (resdata.code == 200) {
          this.list = resdata.data
        } else {
          Toast(resdata.message);
        }
      });
    },
  }
};
</script>

<style scoped>
.box {
  border-radius: 10px;
  overflow: hidden;
  margin: 15px;
}

.tel {
  font-size: 16px;
  padding: 50px 0;
}
.btn,
.btn1 {
  padding: 20px 0;
}
.btn1 {
  color: #4ea9f9;
}
</style>
