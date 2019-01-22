<template>
    <div>
        <div>人脸识别</div>
        <div class="pd-15"><div class="btn text-c" @click="naxt">确定</div></div>
    </div>
</template>

<script>
export default {
    methods:{
        naxt(){
             this.$router.push({ path: '/pay' })
        }
    }
}
</script>

<style scoped>
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
</style>
