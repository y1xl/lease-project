<template>
    <div>

    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    created(){
        this.getFaceToken()
    },
    methods:{
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
            })
            .catch(error => {
                Toast('网络出错')
            });
        },
        goFace(token){
            if(token){
                window.location.href = 'https://api.megvii.com/faceid/lite/do?token='+token
            }
        },
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
