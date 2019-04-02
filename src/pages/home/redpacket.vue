<template>
    <div class="bgc full pd-lr-15 page" :style="bgimg">
        <div class="notice">
            <van-notice-bar :text="text" color="#fff"/>
        </div>

        <div class="box">
            <div class="fc-blue text-c title marb10">活动标题</div>
            <div class="fc-grey text-c fsz-12 marb10">2019-03-11~2019-03-12</div>
            <div class="text-c marb10">当前参加人数<span class="fc-red">12</span></div>
            <div class="btn flex-column-center bgc-blue" @click="getred">
                <span>抢红包</span>
                <!-- <div>邀请好友助力</div>
                <div class="fszs">(可获得一次抢红包机会)</div> -->
            </div>
            <div class="fc-grey fsz-12">活动说明：这是一个说明这是一个说明这是一个说明这是一个说明这是一个说明</div>
        </div>

        <van-popup v-model="show" :close-on-click-overlay="false">
            <div class="bgc model position">
                <img src="@/assets/redpacket/icon-close.png" alt="关闭" class="iconclose" @click="show=false">
                <div class="imgbox marb10 text-c"><img src="@/assets/redpacket/scu.png" class="img" style="object-fit:contain"></div>
                <div class="text-c marb10">恭喜获得xxx</div>
                <div class="fc-grey text-c fsz-12 marb10">可在个人中心查看</div>
                <div class="flex-jc-center">
                    <router-link to="/me" replace><div class="confirm flex-center">确认</div></router-link>
                </div>
            </div>
        </van-popup>

        <div class="banner full bgc position" v-if="isad">
            <div class="ad" @click="isad=false">
                <img src="@/assets/redpacket/icon-close.png" alt="关闭" class="closeimg">
            </div>
            <img @click="go" src="https://newbeeadmin.zx-xcx.com/uploads/images/20190308/ceb8b7479d1c4ffddaac0ecd4538285d.png" alt="广告" style="object-fit:contain">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
             bgimg: {
                background:
                "url(" + require("@/assets/redpacket/bg.png") + ") no-repeat top",
                backgroundSize: "100% 100%"
            },
            text: '134****4484，恭喜获得xxx。134****4484，恭喜获得xxx。',
            isad: true,
            show: false
        }
    },
    mounted(){

    },
    methods:{
        go(){
            // this.$router.push({ path: "/productDetail" });
        },
        getred(){
            this.show = true
        }
    }
}
</script>

<style scoped>
.notice {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.notice >>> .van-notice-bar {
    background-color: rgba(0,0,0,.5);
}

.marb10 {
    margin-bottom: 10px;
}
.fszs {
    font-size: 10px
}

.box {
    background-color: rgba(255,255,255,.9);
    box-shadow:0px 0px 87px 0px rgba(173,198,238,0.68);
    /* height: 300px; */
    border-radius: 10px;
    position: relative;
    top: 160px;
    box-sizing: border-box;
    padding: 10px;
}
.title {
    color: #1979F4;
    font-size: 16px;
    font-weight: bold;
    letter-spacing:8px;
}
.btn {
    height: 40px;
    color: #fff;
    border-radius: 30px;
    margin: 15px;
    box-shadow: 0px 1px 10px 0px rgba(173,198,238,0.68);
    letter-spacing:8px;
}
.banner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}
.banner .ad {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 5px;
}
.banner .closeimg {
    width: 25px;
    height: 25px;
}

.page >>> .van-popup {
    border-radius: 10px;
}
.model {
    box-sizing: border-box;
    width: 280px;
    height: 320px;
}
.model .confirm {
    height: 35px;
    width: 150px;
    color: #fff;
    border-radius: 30px;
    background-image: linear-gradient(180deg, #FB7C26 0%, #ED5533 100%);
}
.model .img {
    width: 250px;
    height: 200px;
}
.model .imgbox {
    font-size: 0;
}
.model .iconclose {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
}
</style>
