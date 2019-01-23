<template>
    <div class="pd-15 bgc full">
        <div class="text-c header" :style="bgimg">
            <div class="mar-b-10">提交成功！</div>
            <div>请在个人中心查询审批结果</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bgimg: {
                background: "url(" + require("../../../assets/tg_bg.png") + ") no-repeat top" ,
                backgroundSize: 'cover' 
            },
        }
    }
}
</script>

<style scoped>
.header{
    height: 200px;
}
.header > div:nth-of-type(1){
    padding-top: 150px
}
</style>
