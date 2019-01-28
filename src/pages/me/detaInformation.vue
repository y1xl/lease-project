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
        <div class="bri_day">
          <van-cell
            is-link
            center
            :value="datetext==''?'':`${datetext[0]}年${datetext[1]}月${datetext[2]}日`"
            @click="showdate=true"
          >
            <template slot="title">
              <div>生日</div>
            </template>
          </van-cell>
        </div>
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

      dateval: new Date(),
      datetext: "",
      showdate: false,
      startDate: new Date("1899/01/01 00:00"),
      endDate: new Date()
    };
  },
  created() {
    let meSession = JSON.parse(window.sessionStorage.getItem("meSession"));
    if (meSession) {
      this.users_name = meSession.users_name;
      this.areaval = meSession.users_city;
      this.datetext = meSession.users_birthday;
      let users_id = meSession.users_id;
      let sex_id = meSession.users_sex;
      if (sex_id == 0) {
        this.sexval = this.sexList[0].val;
      } else {
        this.sexval = this.sexList[1].val;
      }
    }
    // this.submit();
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
      this.datetext = [val.getFullYear(), val.getMonth() + 1, val.getDate()];

      this.showdate = false;
    },

    submit() {
      let meSession = JSON.parse(window.sessionStorage.getItem("meSession"));
      if (meSession) {
        let users_id = meSession.users_id;

        let users_birthday = `${this.datetext[0]}年${this.datetext[1]}月${
          this.datetext[2]
        }日`;
        let users_city =
          this.areaval[0].name + this.areaval[1].name + this.areaval[2].name;
        let sex_id = "";
        if (this.sexval == "男") {
          sex_id = 0;
        } else {
          sex_id = 1;
        }

        let postData = this.$qs.stringify({
          users_id: users_id,
          users_name: this.users_name,
          users_birthday: users_birthday,
          users_city: users_city,
          users_sex: sex_id
        });
        this.axios
          .post(this.API + "api/Lease/users_update", postData)
          .then(res => {
            console.log(res.data, "users_detail");
            let resdata = res.data;
            if (resdata.code == 200) {
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