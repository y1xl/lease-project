<template>
    <div>
        <div class="textarea bgc"><textarea v-model.trim="contentval" name="" id="" rows="6" placeholder="输入否认的理由"></textarea></div>
        <div class="bgc imglist">
            <!-- <img @click="onImagePreview(index)" :src="item.content" alt="" v-for="(item,index) in imgarr" :key="index"> -->
            <img @click="onImagePreview()" :src="img.content" v-show="!img==''">
            <van-uploader :after-read="onRead" accept="image/png, image/jpeg" multiple v-show="showupload">
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
            img:'',
            contentval:'',
            showupload: true
        }
    },
    watch:{
        imgarr(){
            if(this.imgarr.length==3){
                this.showupload = false
            }
        }
    },
    methods:{
        //图片
        onRead(file) {
            console.log(file)
            // this.imgarr.push(file)
            this.img = file
        },
        //预览
        onImagePreview(index){
            // let arr = []
            // for(let v of this.imgarr){
            //     arr.push(v.content)
            // }
            // ImagePreview({
            //     images: arr,
            //     startPosition: index,
            // });
            ImagePreview([this.img]);
        },
        submit(){
            // if(this.contentval==''||this.imgarr.length==0){
            //     Toast('还有未填写')
            //     return
            // }
            if(this.contentval==''||!this.img){
                Toast('还有未填写')
                return
            }

            Toast.loading({ mask: true,message: '加载中...'})
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            }

            let formData = new FormData()
            // for(let v of this.imgarr){
            //     formData.append('image',v.file,v.file.name)
            // }
            formData.append('image',this.img.file,this.img.file.name)
            formData.append('order_id',this.$route.params.id)
            formData.append('content',this.contentval)

            this.axios.post(this.API + "api/Lease_Order/afterConfirmation",formData,config)
            .then(res => {
                console.log(res.data, "data")
                let resdata = res.data
                if (resdata.code == 200) {
                    Toast.clear()
                        Dialog.alert({
                            message: '操作成功'
                        }).then((e) => {
                            this.$router.go(-1);
                        });
                } else {
                    Toast.clear()
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
