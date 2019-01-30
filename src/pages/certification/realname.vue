<template>
    <div>
        <div class="bgc mar-b-10">
            <div class="pd-15" style="padding-bottom:0">身份证拍照示例</div>
            <div class="sample flex-jc-between pd-15" >
                <div>
                    <div class="mar-b-10 position"><img src="../../assets/idcard1.png" alt=""><img src="../../assets/icon-true.png" alt="" class="icons"></div>
                    <div class="fsz12 text-c">居中清晰</div>
                </div>
                <div>
                    <div class="mar-b-10 position"><img src="../../assets/idcard2.png" alt=""><img src="../../assets/icon-false.png" alt="" class="icons"></div>
                    <div class="fsz12 text-c">边框缺失</div>
                </div>
                <div>
                    <div class="mar-b-10 position"><img src="../../assets/idcard3.png" alt=""><img src="../../assets/icon-false.png" alt="" class="icons"></div>
                    <div class="fsz12 text-c">照片模糊</div>
                </div>
                <div>
                    <div class="mar-b-10 position"><img src="../../assets/idcard4.png" alt=""><img src="../../assets/icon-false.png" alt="" class="icons"></div>
                    <div class="fsz12 text-c">闪光强烈</div>
                </div>
            </div>
        </div>

        <div class="bgc box-sizing">
            <div class="pt"></div>
            <div class="pd-lr-15">上传身份证 人像面</div>
            <div class="flex-center box">
                <van-uploader :after-read="onRead1" accept="image/png, image/jpeg" multiple>
                    <div class="upload flex-center"><img src="../../assets/icon-camera.png" alt=""></div>
                </van-uploader>
            </div>
        </div>
        <div class="bgc box-sizing">
            <div class="pd-lr-15">上传身份证 国徽面</div>
            <div class="flex-center box">
                <van-uploader :after-read="onRead2" accept="image/png, image/jpeg" multiple>
                    <div class="upload flex-center"><img src="../../assets/icon-camera.png" alt=""></div>
                </van-uploader>
            </div>
        </div>

        <div class="pd-15 border-b bgc flex-align-items fsz12">
            <div class="flex-1">
                <div class="mar-b-10 c6">姓名</div>
                <div class="mar-b-10">某某某</div>
                <div class="mar-b-10 c6">身份证</div>
                <div>1234567890123</div>
            </div>
            <div>
                <img src="../../assets/idimg1.png" alt="" class="idimg">
            </div>
        </div>
        <div class="pd-15 bgc flex-align-items fsz12">
            <div class="flex-1">
                <div class="mar-b-10 c6">签发机关</div>
                <div class="mar-b-10">xx公安局</div>
                <div class="mar-b-10 c6">有效期限</div>
                <div>2015.08.14-2025.8.25</div>
            </div>
            <div>
                <img src="../../assets/idimg2.png" alt="" class="idimg">
            </div>
        </div>

        <div class="pd-15"><div class="btn text-c" @click="submit">提交</div></div>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    data(){
        return{
            img1:null,
            img2:null,
        }
    },
    methods:{
        onRead1(file) {
            console.log(file)
            this.img1 = file.content
        },
        onRead2(file) {
            console.log(file)
            this.img2 = file.content
        },
        submit(){
            Toast("此功能未开通");
        }
    }
}
</script>

<style scoped>
.fsz12{
    font-size: 12px
}
.c6{
    color:#666
}
.pt{
    padding-top: 15px
}
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}

.sample img {
    width: 68px;
    height: 52px;
}
.sample .icons {
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%)
}

.box {
    height: 150px;
}
.upload {
    width: 226px;
    height: 113px;
    border: 1px dashed #666;
    border-radius: 6px;
}
.upload img {
    width: 28px;
    height: 24px;
}

.idimg{
    width: 140px;
    height: 100px;
}

</style>
