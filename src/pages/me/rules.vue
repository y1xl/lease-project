<template>
  <div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames">
        <van-collapse-item name="2">
          <div slot="title">如何获取免押额度？</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames1">
        <van-collapse-item name="2">
          <div slot="title">运费怎样计算？</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames2">
        <van-collapse-item name="2">
          <div slot="title">租赁时间是怎样计算的？</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames3">
        <van-collapse-item name="2">
          <div slot="title">如何联系客服？</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames4">
        <van-collapse-item name="2">
          <div slot="title">延期寄回怎么办？</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames5">
        <van-collapse-item name="2">
          <div slot="title">产品的磨损判定？</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      activeNames1: ["1"],
      activeNames2: ["1"],
      activeNames3: ["1"],
      activeNames4: ["1"],
      activeNames5: ["1"]
    };
  },
  methods: {}
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
