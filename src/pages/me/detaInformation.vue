<template>
  <div>
    <div class="myinfor">
      <div class="me bgc">
        <van-cell center>
          <template slot="title">
            <span>昵称</span>
            <input type="text" v-model="users_name">
          </template>
        </van-cell>

        <van-cell is-link center :value="sexval" @click="showsex=true">
          <template slot="title">
            <div>性别</div>
          </template>
        </van-cell>

        <van-cell
          is-link
          center
          :value="areaval==''?'请选择所在地区':areaval[0].name+areaval[1].name+areaval[2].name"
          @click="showarea=true"
        >
          <template slot="title">
            <div>位置</div>
          </template>
        </van-cell>
        <div class="border-b dz_detail">
          <span>详细地址</span>
          <input type="text" placeholder="请输入" v-model="detailval">
        </div>

        <van-cell is-link center :value="datetext==''?'':datetext" @click="showdate=true">
          <template slot="title">
            <div>生日</div>
          </template>
        </van-cell>
      </div>
    </div>

    <div class="pd-15">
      <div class="btn text-c" @click="submit">提交</div>
    </div>

    <van-popup v-model="showarea" position="bottom" :close-on-click-overlay="false">
      <van-area :area-list="areaList" @cancel="showarea=false" @confirm="onconfirmArea"/>
    </van-popup>

    <van-popup v-model="showsex" position="bottom" :close-on-click-overlay="false">
      <van-picker
        value-key="val"
        :columns="sexList"
        show-toolbar
        @cancel="showsex = false"
        @confirm="onConfirmSex"
      />
    </van-popup>

    <van-popup v-model="showdate" position="bottom" :close-on-click-overlay="false">
      <van-datetime-picker
        v-model="dateval"
        type="date"
        :min-date="startDate"
        :max-date="endDate"
        @cancel="showdate = false"
        @confirm="onConfirmDate"
      />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import area from "@/utils/area.js";
export default {
  data() {
    return {
      users_name: "",

      showarea: false,
      areaval: "",
      areaList: area,

      showsex: false,
      sexval: "",
      sex_id: "",
      sexList: [{ id: 0, val: "男" }, { id: 1, val: "女" }],
      detailval: "",
      dateval: new Date(),
      datetext: "",
      showdate: false,
      startDate: new Date("1899/01/01 00:00"),
      endDate: new Date()
    };
  },
  created() {
    this.getuser();
  },

  methods: {
    onconfirmArea(val) {
      console.log(val);
      this.areaval = val;
      this.showarea = false;
    },
    onConfirmSex(val) {
      console.log(val);
      this.sexval = val.val;

      this.showsex = false;
    },
    onConfirmDate(val) {
      console.log(val.getFullYear(), val.getMonth() + 1, val.getDate());
      this.dateval = val;
      let datet = [val.getFullYear(), val.getMonth() + 1, val.getDate()];
      console.log(datet);
      this.datetext = `${datet[0]}年${datet[1]}月${datet[2]}日`;
      this.showdate = false;
    },
    getuser() {
      let postData = this.$qs.stringify({
        users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id
      });
      this.axios
        .post(this.API + "api/Lease/users_detail", postData)
        .then(res => {
          console.log(res.data, "users_detail");
          let resdata = res.data;
          if (resdata.code == 200) {
            this.users_name = resdata.data.users_name;
            this.users_id = resdata.data.users_id;
            this.datetext = resdata.data.users_birthday;
            this.detailval = resdata.data.users_address;
            let sex_id = resdata.data.users_sex;
            if (sex_id == 0) {
              this.sexval = this.sexList[0].val;
            } else {
              this.sexval = this.sexList[1].val;
            }
            let users_province = "";
            this.areaval = [
              { name: resdata.data.users_province },
              { name: resdata.data.users_city },
              { name: resdata.data.users_district }
            ];
          } else {
            Toast(resdata.message);
          }
        });
    },
    submit() {
      let sex_id = "";
      if (this.sexval == "男") {
        sex_id = 0;
      } else {
        sex_id = 1;
      }

      let postData = this.$qs.stringify({
        users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
        users_name: this.users_name,
        users_sex: sex_id,
        users_birthday: this.datetext,
        users_province: this.areaval[0].name,
        users_city: this.areaval[1].name,
        users_district: this.areaval[2].name,
        users_address: this.detailval || ""
      });
      this.axios
        .post(this.API + "api/Lease/users_update", postData)
        .then(res => {
          console.log(res.data, "users_update");
          let resdata = res.data;
          if (resdata.code == 200) {
            this.$router.go(-1);
            Toast("提交成功");
          } else {
            Toast(resdata.message);
          }
        });
    }
  }
};
</script>

<style scoped>
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
.myinfor {
  margin: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.me {
  width: 300px;
  height: 100%;
}
.tx {
  padding: 10px 0;
  font-size: 12px;
}
.dz_detail {
  padding: 10px;
  font-size: 13px;
}
.dz_detail input {
  width: 75%;
  text-align: right;
  padding-right: 10px;
  color: grey;
}
.dz_detail input::placeholder {
  text-align: right;
}
.head_img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
}
.head_img > img {
  width: 45px;
  height: 45px;
}
</style>