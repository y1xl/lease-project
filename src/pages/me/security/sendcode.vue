<template>
    <div class="full bgc">
        <div class="pd-15">验证码已发送至{{phone}}</div>
        <div class="pd-15 mar-b-10 flex-jc-between">
            <input type="text" placeholder="请输入验证码">
            <button class="send bgc-blue">重新发送</button>
        </div>

        <div class="flex-jc-center">
        <div class="btn text-c" @click="next">下一步</div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            phone: this.$route.params.phone
        }
    },
    methods:{
        next(){
            if(this.$route.params.type=='phone'){
                this.$router.push({ path: "/newphone" });
            }
            if(this.$route.params.type=='password'){
                this.$router.push({ path: "/newpassword" });
            }
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
