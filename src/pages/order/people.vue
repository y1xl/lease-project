<template>
    <div>
        <div class="bgc pd-15">自取联系人</div>
        <div class="nav bgc">
            <div :class="{ 'fc-blue selected': selected==0 }" @click="selected=0">本人</div>
            <div :class="{ 'fc-blue selected': selected==1 }" @click="selected=1">朋友代取</div>
        </div>

        <div class="bgc">
            <div class="border-b inputbox pd-15">
                <span>姓名</span>
                <input type="text" v-model="nameval">
            </div>
            <div class="inputbox pd-15">
                <span>手机号码</span>
                <input type="number" v-model="phoneval" maxlength="11">
            </div>
        </div>

        <div class="pd-t-100"><div class="btn text-c" @click="onbtn">确认</div></div>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
    data(){
        return{
            selected:0,
            nameval:'',
            phoneval:'',
        }
    },
    methods:{
        onbtn(){
            if(this.nameval==''||this.phoneval==''){
                Toast('不能为空') 
                return
            }
            if(this.phoneval.length!=11){
                Toast('手机号格式不正确') 
                return
            }
            let people = {
                name:this.nameval,
                phone:this.phoneval
            }
            window.sessionStorage.setItem("people", JSON.stringify(people));
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.nav {
    padding: 15px;
}
.nav > div {
  width: 103px;
  height: 37px;
  line-height: 37px;
  /* color: #666; */
  display: inline-block;
  box-shadow: 0 1px 7px 1px #E8E9EA;
  margin-left: 10px;
  border-radius: 20px;
  text-align: center;
}
.nav .selected {
    box-shadow: 0 1px 7px 1px #DEF4FD;
}
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

.inputbox > span{
    width: 60px;
    display: inline-block;
}
</style>
