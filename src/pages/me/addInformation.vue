<template>
  <div>
    <div class="add_address">
      <div class="add_addresscon bgc">
        <div class="me" style="margin-top: 15px;">
          <van-cell-group>
            <van-field v-model="nameval" placeholder="姓名"/>
          </van-cell-group>

          <van-cell-group>
            <van-field v-model="phoneval" placeholder="手机号"/>
          </van-cell-group>
          <van-cell 
          :title="areaval==''?'请选择所在地区':areaval[0].name+areaval[1].name+areaval[2].name" 
          is-link 
          @click="showarea=true"
          />
          <van-cell-group>
            <van-field v-model="detailval" placeholder="请输入详细地址"/>
          </van-cell-group>
          <div class="flexbox moren">
            <van-checkbox v-model="checked" checked-color="#4EA9F9"></van-checkbox>
            <span>设为默认地址</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-jc-center">
      <div class="btn text-c" @click="submit">保存</div>
    </div>

    <van-popup v-model="showarea" position="bottom" :close-on-click-overlay="false">
      <van-area :area-list="areaList" @cancel="showarea=false" @confirm="onconfirm"/>
    </van-popup>
  </div>
</template>

<script>
import area from '@/utils/area.js'
export default {
  data() {
    return {
      nameval: "",
      phoneval: "",
      detailval: "",
      checked: false,
      showarea:false,
      areaval:'',
      areaList: area
    };
  },
  created(){

  },
  methods: {
    onconfirm(val){
      console.log(val);
      this.areaval = val
      this.showarea = false
    },
    submit(){

    }
  }
};
</script>

<style scoped>
.add_address {
  width: 100%;
}
.add_addresscon {
  width: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
}
.me {
  width: 270px;
  height: 100%;
  margin: 0 auto;
}

.moren {
  margin-left: 15px;
  height: 60px;
  line-height: 60px;
  color: #aeaeae;
}
.moren span {
  padding-left: 15px;
  font-size: 12px;
}

.btn {
  margin-top: 70px;
  width: 298px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
</style>