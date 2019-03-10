<template>
  <div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames">
        <van-collapse-item :name="index" v-for="(item,index) in list" :key="index">
          <div slot="title">{{item.tetail_name}}</div>{{item.tetail_content}}
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      activeNames: [],
      list:[]
    };
  },
  mounted(){
    this.getdata()
  },
  methods:{
    getdata() {
      Toast.loading({ mask: true,message: '加载中...'})
      let postData = this.$qs.stringify({
          help_id: this.$route.query.id
      })
      this.axios.post(this.API + "api/Lease/help_detail",postData).then(res => {
        console.log(res.data, "help_detail");
        let resdata = res.data;
        if (resdata.code == 200) {
          Toast.clear()
          this.list = resdata.data
        } else {
          Toast.clear()
          Toast(resdata.message);
        }
      });
    },
  }
};
</script>
<style>
#pse .van-collapse-item__content {
  background-color: #f6f6f6;
}
</style>



<style scoped>
.box {
  border-radius: 5px;
  margin: 10px 15px;
  overflow: hidden;
}
</style>
