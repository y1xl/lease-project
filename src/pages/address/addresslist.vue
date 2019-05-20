<template>
  <div>
    <van-radio-group v-model="radio" @change="onchoose">
      <div v-show="list.length==0" class="fc-grey text-c pd-15 fsz-12">没有更多了</div>
      
      <div v-for="(item,index) in list" :key="index" class="card">

        <van-swipe-cell :right-width="65" @click="isdel(index,item.ads_id,$event)">
          <div class="bgc flex-align-items item">
            <van-radio :name="index" checked-color="#2DBBF1"></van-radio>
            <div class="flex-1 left" @click="radio=index">
              <div class="mar-b-10">{{item.ads_user||''}} {{item.ads_phone||''}}</div>
              <div>
                <van-tag plain type="danger" v-if="item.ads_state==2">默认</van-tag>
                {{item.ads_province+item.ads_city+item.ads_district+item.ads_address}}
              </div>
            </div>
            <router-link :to="`/addaddress/${item.ads_id}`">
              <img src="../../assets/icon-editor.png" alt="编辑" class="editorimg">
            </router-link>
          </div>
          <div slot="right" class="del bgc-red">删除</div>
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
import { Dialog, Toast } from "vant";
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      list: [],
      radio: -1,
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    ...mapActions('myhosting', ['setgetaddress']),
    // 删除
    isdel(i,id,e){
      // console.log(i,id,e)
      if(e!='right'){
        return
      }
      Dialog.confirm({
        message: "确定删除吗？"
      }).then(e => {
        if (e == "confirm") {
          this.del(i,id);
        }
      });
    },
    del(i,id) {
      Toast.loading({ mask: true, message: "加载中...",duration:0 });
      let postData = {
        ads_id: id
      }
      this.axios.post("api/Lease/ads_detele", postData).then(res => {
        console.log(res.data, "del");
        let resdata = res.data;
        if (resdata.code == 200) {
          Toast.clear();
          this.list.splice(i, 1)
        } else {
          Toast.clear();
          Toast(resdata.message||'操作失败');
        }
      });
    },

    getlist() {
      Toast.loading({ mask: true, message: "加载中..." });
      let postData = {
        users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id
      };
      this.axios.post("api/Lease/ads_select", postData).then(res => {
        Toast.clear();
        console.log(res.data, "list");
        let resdata = res.data;
        if (resdata.code == 200) {
          this.list = resdata.data;
        } else {
          Toast.clear();
          Toast(resdata.message);
        }
      });
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
      if (this.$route.params.type == "platformDeli"||this.$route.params.type == "postDeli") {
        this.setgetaddress(this.list[val])
      }
      if (this.$route.params.type == "prebuy") {
        let prebuySession = JSON.parse(
          window.sessionStorage.getItem("prebuySession")
        );
        prebuySession.getaddress = this.list[val];
        window.sessionStorage.setItem(
          "prebuySession",
          JSON.stringify(prebuySession)
        );
      }
      if (this.$route.params.type == "friendbuy") {
        let friendbuySession = JSON.parse(
          window.sessionStorage.getItem("friendbuySession")
        );
        friendbuySession.getaddress = this.list[val];
        window.sessionStorage.setItem(
          "friendbuySession",
          JSON.stringify(friendbuySession)
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
