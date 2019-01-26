<template>
  <div>
    <div class="bgc box">
      <van-cell title="常见问题" is-link to="CommonProblem"/>
      <van-cell title="租赁规则" is-link to="rules"/>
      <van-cell title="在线客服" is-link/>
      <a href="tel:400-0000-688">
        <van-cell title="电话客服" is-link/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
