<template>
    <div>
        <!-- <div>人脸识别</div> -->
        <!-- <div class="pd-15"><div class="btn text-c" @click="naxt">确定</div></div> -->
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    created(){
        this.getFaceToken()
    },
    methods:{
        // getFaceToken(){
        //     Toast.loading({ mask: true, message: "加载中..." });
        //     let postData = this.$qs.stringify({
        //         api_key: '7WdSJGAzhmEuggj4EvL1RIC0Y9SzOS5n',
        //         api_secret: 'CRSZvoqeeSWt1mM-hyt1BFgX67FOUOmF',
        //         return_url: this.API+'dist/#/pay/'+this.$route.params.orderid,//https://newbee.zx-app.cn/dist/#/pay/12
        //         notify_url: this.API,
        //         biz_no: this.$route.params.orderid,
        //         comparison_type: 1,
        //         idcard_mode: 2,
        //         procedure_type: 'video',
        //     });
        //     this.axios
        //     .post("https://api.megvii.com/faceid/lite/get_token", postData)
        //     .then(res => {
        //         console.log(res.data, "token");
        //         let resdata = res.data;
        //         Toast.clear();
        //         if(resdata.error_message){
        //             Toast('出错了')
        //         }else{
        //             this.goFace(resdata.token)
        //         }
                
        //     });
        // },
        getFaceToken(){
            let postData = this.$qs.stringify({
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                order_id : this.$route.params.orderid
            });
            this.axios.post(this.API + "api/Order/GetFaceToken", postData)
            .then(res => {
                console.log(res.data, "token");
                let resdata = res.data;
                if (resdata.code == 200) {
                   this.goFace(resdata.data.token)
                } else {
                    Toast(resdata.message);
                }
            });
        },
        goFace(token){
            if(token){
                window.location.href = 'https://api.megvii.com/faceid/lite/do?token='+token
            }
        },
        naxt(){
            this.$router.replace({ path: '/pay/'+this.$route.params.orderid })
        }
    }
}
</script>

<style scoped>
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
</style>
