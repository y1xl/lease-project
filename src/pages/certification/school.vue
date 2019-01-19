<template>
    <div>
        <div class="bgc box">
            <div class="pd-15 border-b">
                <span class="w">姓名</span>
                <input type="text" placeholder="请输入" v-model="nameval">
            </div>
            <div class="pd-15">
                <span class="w">身份证</span>
                <input type="text" placeholder="请输入" v-model="phoneval">
            </div>
        </div>
        <div class="pd-t-100"><div class="btn text-c">提交</div></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nameval:'',
            phoneval:''
        }
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

.box {
    border-radius: 10px;
    overflow: hidden;
    margin: 15px;
}
.box .w {
    width: 50px;
    display: inline-block;
}
</style>
