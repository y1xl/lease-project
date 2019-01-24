<template>
  <div class="amap-page-container" >
    <el-amap
      vid="amapDemo"
      :center="center"
      :zoom="zoom"
      class="amap-demo"
    ></el-amap>
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
.amap-page-container{
    width: 100%;
    height:100vh;
}
.amap-demo {
  height: 300px;
}
</style>