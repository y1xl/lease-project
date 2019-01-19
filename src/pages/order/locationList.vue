<template>
    <div>
        <div class="bgc tag"><van-tag type="success">推荐</van-tag></div>
        <div class="bgc list">
        <van-radio-group v-model="radio">
            <div class="flex-align-items card" :class="index===list.length-1?'':'border-b'" @click="radio = item.id" v-for="(item,index) in list" :key="index">
                <van-radio :name="item.id" checked-color="#2DBBF1"></van-radio>
                <div class="item flex-align-items"> 
                    <div class="left">
                        <div>深圳龙华九方店</div>
                        <div class="fsz12">深圳市龙华新区龙华街道九方A座1001号</div>
                    </div>
                    <div class="right fsz12">距您74m</div>
                </div>
            </div>
        </van-radio-group>
        </div>

        <div class="height"></div>
        <div class="btn text-c">完成</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{id:1},{id:2}],
            radio: 1,
        }
    },

}
</script>

<style scoped>
.tag{
    padding-top: 15px;
    padding-left: 30px;
}
.height{
    height: 42px;
}
.fsz12{
    font-size: 12px;
}
.btn{
    height: 42px;
    line-height: 42px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.card {
    padding: 10px;
}
.card .left {
    padding: 0 10px;
}
.card .right {
    max-width: 68px;
}
</style>
