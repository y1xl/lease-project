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

        <template v-if="info==''">
        <div class="bgc box-sizing">
            <div class="pt"></div>
            <div class="pd-lr-15">上传身份证 人像面</div>
            <div class="flex-center box">
                <van-uploader :after-read="onRead1" multiple :max-size="maxsize" @oversize="oversize1">
                    <div class="upload flex-center">
                        <img src="../../assets/icon-camera.png" alt="" class="icon" v-show="!img1" >
                        <img :src="img1" alt="" v-show="img1" style="object-fit:contain">
                    </div>
                </van-uploader>
            </div>
        </div>
        <div class="bgc box-sizing">
            <div class="pd-lr-15">上传身份证 国徽面</div>
            <div class="flex-center box">
                <van-uploader :after-read="onRead2" multiple :max-size="maxsize" @oversize="oversize2">
                    <div class="upload flex-center">
                        <img src="../../assets/icon-camera.png" alt="" class="icon" v-show="!img2" >
                        <img :src="img2" alt="" v-show="img2" style="object-fit:contain">
                    </div>
                </van-uploader>
            </div>
        </div>
        </template>

        <template v-if="info!=''">
        <div class="pd-15 border-b bgc flex-align-items fsz12" >
            <div class="flex-1">
                <div class="mar-b-10 c6">姓名</div>
                <div class="mar-b-10">{{info.realname}}</div>
                <div class="mar-b-10 c6">身份证</div>
                <div>{{info.idcard_number}}</div>
            </div>
            <div>
                <img src="../../assets/idimg1.png" alt="" class="idimg">
            </div>
        </div>
        <div class="pd-15 bgc flex-align-items fsz12">
            <div class="flex-1">
                <div class="mar-b-10 c6">签发机关</div>
                <div class="mar-b-10">{{info.issued_by}}</div>
                <div class="mar-b-10 c6">有效期限</div>
                <div>{{info.valid_date}}</div>
            </div>
            <div>
                <img src="../../assets/idimg2.png" alt="" class="idimg">
            </div>
        </div>
        </template>

        <div class="pd-15"><div class="btn text-c" @click="submit" v-if="info==''">提交</div></div>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    data(){
        return{
            img1:null,
            img2:null,
            file1:null,
            file2:null,
            maxsize: 2097152,
            info:''
        }
    },
    created(){
        this.getinfo()
    },
    methods:{
        onRead1(file) {
            console.log(file)
            if(Array.isArray(file)){
                Toast('只能单选') 
                return
            }
            this.img1 = file.content
            this.file1 = file
        },
        onRead2(file) {
            console.log(file)
            if(Array.isArray(file)){
                Toast('只能单选') 
                return
            }
            this.img2 = file.content
            this.file2 = file
        },
        oversize1(){
            Toast('文件不能超过2MB')
        },
        oversize2(){
            Toast('文件不能超过2MB')
        },

        getinfo(){
            Toast.loading({ mask: true,message: '加载中...'})
            let postData = this.$qs.stringify({
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
            })

            this.axios.post(this.API + "api/Order/GetIDCard",postData)
            .then(res => {
                console.log(res.data, "info")
                let resdata = res.data
                if (resdata.code == 200) {
                    Toast.clear()
                    this.info = resdata.data
                } else {
                    Toast.clear()
                    Toast(resdata.message)
                }
            })
        },

        submit(){
            Toast.loading({ mask: true,message: '加载中...'})
            let formData = new FormData()
            formData.append('file',this.file1.file,this.file1.file.name)
            formData.append('file1',this.file2.file,this.file2.file.name)
            formData.append('users_id',JSON.parse(window.localStorage.getItem("userinfo")).users_id)

            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            }

            this.axios.post(this.API + "api/Order/CheckIDCard",formData,config)
            .then(res => {
                console.log(res.data, "res")
                let resdata = res.data
                if (resdata.code == 200) {
                    Toast.clear()
                        // Dialog.alert({
                        //     message: '操作成功'
                        // }).then((e) => {
                        //     this.$router.go(-1);
                        // });
                    this.getinfo()
                } else {
                    Toast.clear()
                    Toast(resdata.message)
                }
            })
            .catch(error => {
                Toast.clear()
                Toast('网络出错')
            });
        },
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
.upload .icon {
    width: 28px;
    height: 24px;
}

.idimg{
    width: 140px;
    height: 100px;
}

</style>
