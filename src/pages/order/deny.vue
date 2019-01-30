<template>
    <div>
        <div class="textarea bgc"><textarea v-model="contentval" name="" id="" rows="6" placeholder="输入否认的理由"></textarea></div>
        <div class="bgc imglist">
            <img @click="onImagePreview(index)" :src="item.content" alt="" v-for="(item,index) in imgarr" :key="index">
            <van-uploader :after-read="onRead" accept="image/png, image/jpeg" multiple>
                <img src="../../assets/uploadimg.png" alt="">
            </van-uploader>
        </div>

        <div class="pd-15"><div class="btn text-c" @click="submit">提交</div></div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { Toast,Dialog } from 'vant';
export default {
    data(){
        return{
            imgarr:[],
            contentval:''
        }
    },
    methods:{
        //图片
        onRead(file) {
            console.log(file)
            this.imgarr.push(file)
        },
        //预览
        onImagePreview(index){
            let arr = []
            for(let v of this.imgarr){
                arr.push(v.content)
            }
            ImagePreview({
                images: arr,
                startPosition: index,
            });
        },
        submit(){
            if(this.contentval==''||this.imgarr.length==0){
                Toast('还有未填写')
                return
            }
            let postData = this.$qs.stringify({
                // users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                order_id:this.$route.params.id,
                content: this.contentval,
                // image:
            })
            this.axios.post(this.API + "api/Lease_Order/afterConfirmation",postData)
            .then(res => {
                console.log(res.data, "data")
                let resdata = res.data
                if (resdata.code == 200) {
                        Dialog.alert({
                            message: '操作成功'
                        }).then((e) => {
                            this.$router.go(-1);
                        });
                } else {
                    Toast(resdata.message)
                }
            });
        }
    }
}
</script>

<style scoped>
.textarea {
  padding: 10px;
}
.textarea textarea{
    width: 100%;
}
.imglist{
  padding: 10px 0;
}
.imglist img {
    width: 77px;
    height: 77px;
    padding-left: 10px;
    padding-bottom: 10px;
}
.btn{
    margin-top: 76px;
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
</style>
