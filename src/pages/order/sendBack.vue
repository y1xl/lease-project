<template>
    <div>
        <van-cell title="选择退租时间" is-link center :value="datetext" @click="go('/calendar/refund')"></van-cell>    
        <van-cell center :border="false">
            <div class="bgc flex-align-items" slot="title">
                <span>快递单号</span>
                <input type="text" placeholder="请输入(必须是顺丰)" class="pdl" v-model.trim="numval">
            </div>
        </van-cell>  

        <div class="pd-t-100"><div class="btn text-c" @click="express">确定</div></div>  
    </div>
</template>

<script>
import { Toast,Dialog } from 'vant';
export default {
    data(){
        return{
            datetext:'',
            numval:'',
        }
    },
    created() {
        let refundSession = JSON.parse(window.sessionStorage.getItem("refundSession"));
        if(refundSession){
            this.datetext = refundSession.backdate
            this.numval = refundSession.numval
        }
    },
    methods:{
        go(url){
            let refundSession = JSON.parse(window.sessionStorage.getItem("refundSession"));
            refundSession.numval=this.numval
            refundSession.backdate=this.datetext,
            window.sessionStorage.setItem("refundSession", JSON.stringify(refundSession));
            this.$router.push({ path: url });
        },
        //快递
        express(){
            if(this.datetext==''||this.numval==''){
                Toast('还有未填写')
                return
            }

            Toast.loading({ mask: true,message: '加载中...'})
            let postData = this.$qs.stringify({
                order_id: this.$route.params.id,
                time: this.datetext,
                express_no: this.numval
            });
            this.axios.post(this.API + "api/Lease_Order/surrender", postData)
            .then(res => {
            console.log(res.data, "express");
            let resdata = res.data;
            if (resdata.code == 200) {
                Toast.clear()
                Dialog.alert({
                    message: '操作成功'
                }).then((e) => {
                    this.$router.go(-2);
                });
            } else {
                Toast.clear()
                Toast(resdata.message);
            }
            });
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
</style>
