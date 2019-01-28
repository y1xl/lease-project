<template>
  <div>
    <div class="bgc box">
      <div class="pd-15 border-b">
        <span style=" margin-right: 10px">原密码</span>
        <input type="text" maxlength="11" placeholder="请输入原密码">
      </div>
      <div class="pd-15">
        <span style=" margin-right: 10px">新密码</span>
        <input type="text" maxlength="11" placeholder="请输入新密码">
      </div>
    </div>
    <div class="flex-jc-center">
      <div class="btn text-c">确定修改</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  margin: 15px;
  border-radius: 10px;
}
.btn {
  width: 298px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
</style>