<template>
    <div>
        <div class="bgc"><van-tag type="success">推荐</van-tag></div>

        <van-radio-group v-model="radio">
            <div class="flex-align-items" :class="index===list.length-1?'':'border-b'" @click="radio = item.id" v-for="(item,index) in list" :key="index">
                <van-radio :name="item.id" checked-color="#2DBBF1"></van-radio>
                <div class="bgc item flex-align-items"> 
                    <div>
                        <div>深圳龙华九方店</div>
                        <div>深圳市龙华新区龙华街道九方A座1001号</div>
                    </div>
                    <div>距您74m</div>
                </div>
            </div>
        </van-radio-group>

        <div style="height: 42px;"></div>
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
</style>
