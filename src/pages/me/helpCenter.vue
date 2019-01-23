<template>
  <div>
    <div class="bgc box">
      <van-cell title="常见问题" is-link to="CommonProblem"/>
      <van-cell title="租赁规则" is-link to="rules"/>
      <van-cell title="在线客服" is-link/>
      <van-cell title="电话客服" is-link @click="show=true"/>
    </div>

    <van-popup v-model="show">
      <div class="text-c mask_box">
        <div class="tel">4000001456</div>
        <div class="flex-jc-around">
          <div class="btn" @click="show=false">取消</div>
          <div class="btn1">拨打</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.box {
  border-radius: 10px;
  overflow: hidden;
  margin: 15px;
}
.mask_box {
  width: 250px;
  overflow: hidden;
  border-radius: 10px;
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
