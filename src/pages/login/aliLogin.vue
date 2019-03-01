<template>
    <div class="bgc full">
        <div class="pd-15">
            <input type="number" placeholder="请输入手机号" v-model.trim="phoneval">
        </div>
        <div class="pd-15 mar-b-10 flex-jc-between">
            <input type="text" placeholder="请输入验证码" v-model.trim="codeval">
            <button class="send bgc-blue" @click="sendcode">发送</button>
        </div>

        <div class="flex-jc-center">
        <div class="btn text-c" @click="login">登录</div>
      </div>
    </div>
</template>

<script>
import { Toast,Dialog } from "vant";
export default {
    data(){
        return{
            phoneval: '',
            codeval: '',
            id: ''
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
                // users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                // state: '2bbf04412fa896e5346ea8a7d941f7f5',
                // auth_code: '3a356bacbb624d31abb791d47e63SX00'
                state: this.$route.query.state,
                auth_code: this.$route.query.auth_code
            });
            this.axios.post(this.API + "api/Order/aliLogin",postData).then(res => {
                console.log(res.data, "getali");
                let resdata = res.data;
                if (resdata.code == 200) {
                    Toast.clear();
                    this.id = resdata.data
                    Toast('授权成功');
                } else {
                    Toast.clear();
                    Dialog.alert({
                        message: '授权失败'
                    }).then(() => {
                        this.$router.replace({ path: "/login" });
                    });
                }
            })
            .catch(error => {
                Toast.clear();
                Dialog.alert({
                    message: '网络错误，授权失败'
                }).then(() => {
                    this.$router.replace({ path: "/login" });
                });
            });
        },

        sendcode(){
            if (!(/^1\d{10}$/.test(this.phoneval))) {
                Toast("手机号格式不正确");
                return;
            }
            let postData = this.$qs.stringify({
                    users_phone:this.phoneval
                })
            this.axios.post(this.API + "api/Lease/Forget_PassWord",postData)
            .then(res => {
                console.log(res.data, "sendcode");
                let resdata = res.data;
                if (resdata.code == 200) {
                    Toast('发送成功')
                } else {
                Toast(resdata.message);
                }
            })
            .catch(error => {
                Toast.clear();
                Toast('网络出错')
            });
        },

        login() {
            if (this.phoneval == "" || this.codeval == "") {
                return;
            }
            if (!(/^1\d{10}$/.test(this.phoneval))) {
                Toast("手机号格式不正确");
                return;
            }

            Toast.loading({ mask: true, message: "加载中..." });
            let postData = this.$qs.stringify({
                type: 1,
                phone: this.phoneval,
                yzm: this.codeval,
                user_auth_id: this.id 
            });
            this.axios.post(this.API + "api/Order/ThreeLogin", postData).then(res => {
                console.log(res.data, "alilogin");
                let resdata = res.data;
                if (resdata.code == 200) {
                    Toast.clear();
                    window.localStorage.setItem("userinfo", JSON.stringify(resdata.data));
                    this.$router.replace({ path: "/" });
                } else {
                    Toast.clear();
                    Toast(resdata.message);
                }
            })
            .catch(error => {
                Toast.clear();
                Toast('网络出错')
            });
        }
    }
}
</script>

<style scoped>
.btn {
  width: 298px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
.send {
    color: #fff;
    border-radius: 15px;
    line-height: 22px;
}
</style>
