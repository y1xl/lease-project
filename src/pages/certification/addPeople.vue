<template>
    <div>
        <div class="flex-jc-between flex-align-items pd-15 bgc border-b" @click="isshow = true">
            <div>关系</div>
            <div class="flex-align-items fc-grey">
                <span>{{text}}</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="bgc">
            <div class="pd-15 border-b">
                <span>联系人姓名</span>
                <input type="text" placeholder="请输入" v-model="nameval">
            </div>
            <div class="pd-15">
                <span>联系人电话</span>
                <input type="text" placeholder="请输入" v-model="phoneval">
            </div>
        </div>

        <div class="pd-t-100"><div class="btn text-c">提交</div></div>

        <div v-show="isshow" class="model full">
            <div class="main"><van-picker :columns="columns" show-toolbar @confirm="onConfirm" @cancel="isshow = false"/></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nameval:'',
            phoneval:'',
            isshow: false,
            columns: ['朋友', '测试', '测试'],
            text: '请选择'
        }
    },
    created(){

    },
    methods:{
        onConfirm(value, index) {
            console.log(`当前值：${value}, 当前索引：${index}`);
            this.text = value
            this.isshow = false
        },
    }
}
</script>

<style scoped>
.pd-t-100{
    padding: 0 15px;
    padding-top: 100px;
}
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
.model {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
}
.main {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>
