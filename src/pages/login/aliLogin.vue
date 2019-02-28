<template>
    <div>
        {{query}}
    </div>
</template>

<script>
import { Toast,Dialog } from "vant";
export default {
    data(){
        return{
            query:this.$route.query
        }
    },
    created(){
        this.getali()
    },
    methods:{
        //{ "state": "7209fe525991a66918c8a7ead26b1f15", "app_id": "2018101261703006", "source": "alipay_wallet", "userOutputs": "auth_user", "scope": "auth_user", "auth_code": "7c70fb4954664a8497d07d762021UE65" }
        getali(){
            Toast.loading({ mask: true, message: "加载中..." });
            let postData = this.$qs.stringify({
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                auth_code: '7c70fb4954664a8497d07d762021UE65',
                state: '7209fe525991a66918c8a7ead26b1f15'
            });
            this.axios.post(this.API + "api/Order/aliLogin",postData).then(res => {
                console.log(res.data, "getali");
                let resdata = res.data;
                if (resdata.code == 200) {
                    Toast.clear();

                } else {
                    Toast.clear();
                    Toast(resdata.message);
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
