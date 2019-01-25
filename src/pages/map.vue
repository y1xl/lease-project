<template>
  <div class="amap-page-container" >
    <el-amap
      vid="amap"
      :center="center"
      :zoom="zoom"
      class="amap"
    >
      <el-amap-marker vid="component-marker" ></el-amap-marker>
    </el-amap>

    <div class="bottom">
      <div class="bgc pd-15">
        <p class="mar-b-10">龙华区油松店</p>
        <p class="fsz12 fc-grey">广东省深圳市龙华新区油松路158号油富商城门店</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 16,
      center:[121.406051,31.179695],
    };
  },

  methods: {

  }
};
</script>

<style>
.fsz12{
  font-size: 12px
}
.amap-page-container{
    width: 100%;
    height:100vh;
}
.bottom {
  z-index: 100;
  width: 100%;
  position: fixed;
  bottom:20px;
  left:0;
  box-sizing: border-box;
  padding: 0 10px;
}

</style>