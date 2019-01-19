<template>
    <div>
        <div class="textarea bgc"><textarea name="" id="" rows="6" placeholder="输入否认的理由"></textarea></div>
        <div class="bgc imglist">
            <img @click="onImagePreview(index)" :src="item.content" alt="" v-for="(item,index) in imgarr" :key="index">
            <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
                <van-icon name="photograph"/>
            </van-uploader>
        </div>

        <div class="pd-15"><div class="btn text-c" @click="submit">提交</div></div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    data(){
        return{
            imgarr:[],
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
