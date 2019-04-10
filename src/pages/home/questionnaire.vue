<template>
    <div class="bgc">
        <div class="title text-c">什么？你不知道游戏机、电脑、相机可以租？</div>

        <div class="problems">
            <div class="name">1、	您的性别</div>
            <van-radio-group v-model="problems1">
            <div>
                <div class="radio"><van-radio name="男" checked-color="#2DBBF1">男</van-radio></div>
                <div class="radio"><van-radio name="女" checked-color="#2DBBF1">女</van-radio></div>
            </div>
            </van-radio-group>
        </div>
        <div class="problems">
            <div class="name">1、	您对哪些数码设备感兴趣？</div>
            <van-checkbox-group v-model="problems2">
            <div>
                <div class="checkbox"><van-checkbox name="相机" checked-color="#2DBBF1" ref="checkboxes">相机</van-checkbox></div>
                <div class="checkbox"><van-checkbox name="无人机" checked-color="#2DBBF1" ref="checkboxes">无人机</van-checkbox></div>
            </div>
            </van-checkbox-group>
        </div>
        <div class="problems">
            <div class="name">10、	你最想体验的数码产品是什么？</div>
            <div class="textarea"><textarea class="border" rows="4" v-model.trim="problems10"></textarea></div>
        </div>

        <div class="pd-15">
            <div class="btn text-c" >提交答卷</div>
        </div>
    </div>
</template>

<script>
import { Toast,Dialog } from "vant";
export default {
    data(){
        return {
            problems1:'',
            problems2:'',
            problems3:'',
            problems4:'',
            problems5:'',
            problems6:'',
            problems7:'',
            problems8:'',
            problems9:'',
            problems10:''
        }
    },
    created(){
        this.problems2 = []
    }
}
</script>

<style scoped>
.btn {
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
.title {
    font-weight: bold;
    padding: 15px 0;
}

.checkbox >>> .van-checkbox__icon--round,
.radio >>> .van-icon-circle {
    color: #e0e0e0
}
.problems {
    padding: 10px;
}
.problems .name {
    margin-bottom: 8px;
}
.radio {
    padding: 5px 10px;
}
.checkbox {
    padding: 5px 10px;
}
.textarea {
    box-sizing: border-box;
    padding: 5px;
}
.textarea textarea{
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
}
</style>
