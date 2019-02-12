<template>
    <div>
        <div class="pd-15 fc-grey bgc">请上传产品照片</div>
        
        <div class="box bgc flex-jc-between">
            <div>
                <div class="uploadimg bgc flex-center" v-if="fileimg1==''">
                    <van-uploader :after-read="onRead1" accept="image/png, image/jpeg" multiple>
                        <img src="../../../assets/tg_camera.png" alt="">
                    </van-uploader>
                </div>
                <div class="fileimg" v-else><img :src="fileimg1.content" alt=""></div>

                <div class="text-c btext">上传包含产品配件的全家福</div>
            </div>
            <div>
                <div class="uploadimg bgc flex-center" v-if="fileimg2==''">
                    <van-uploader :after-read="onRead2" accept="image/png, image/jpeg" multiple>
                        <img src="../../../assets/tg_camera.png" alt="">
                    </van-uploader>
                </div>
                <div class="fileimg" v-else><img :src="fileimg2.content" alt=""></div>

                <div class="text-c btext">上传可以看清型号的照片</div>
            </div>
        </div>
        <div class="fc-grey pd-lr-15 bgc">(配件分开摆放整齐，清晰可见)</div>

        <div class="bgc pd-15">
            <div class="mar-b-10 fc-grey">序列号</div>
            <input type="text" placeholder="请填写产品序列号" v-model.trim="serialnumval">
        </div>
        <div class="bgc pd-15">
            <div class="mar-b-10 fc-grey">联系方式</div>
            <input type="text" placeholder="请填写联系方式" v-model.trim="telval">
        </div>

        <div class="pd-15"><div class="btn text-c" @click="onshowmodel">提交</div></div>

        <div class="model" v-if="showmodel">
            <div class="main bgc position">
                <div class="closeimg" @click="showmodel=false"><van-icon name="close" /></div>
                <div class="flex-jc-between pd"><span class="fc-grey">品类</span><span>相机</span></div>
                <div class="flex-jc-between pd"><span class="fc-grey">品牌</span><span>相机</span></div>
                <div class="flex-jc-between pd"><span class="fc-grey">型号</span><span>x5</span></div>
                <div class="flex-jc-between pd"><span class="fc-grey">颜色</span><span>黑</span></div>
                <div class="flex-jc-between pd"><span class="fc-grey">数量</span><span>1</span></div>
                <div class="flex-jc-between pd">
                    <span class="fc-grey">含配件</span>
                    <span class="flex-1 fittings">相机、镜头、电池、说明书、说明书、电池</span>
                </div>
                <div class="flex-jc-between pd"><span class="fc-grey">购买时间</span><span>2018-11-11</span></div>
                <div class="flex-jc-between pd"><span class="fc-grey">购买价格</span><span>￥1000</span></div>
                <div class="flex-jc-between pd"><span class="fc-grey">外观成色</span><span>95新</span></div>
                <div class="flex-jc-between pd"><span class="fc-grey">功能状况</span><span>好</span></div>
                <div class="flex-jc-between pd"><span class="fc-grey">联系方式</span><span>{{gohostingSession.telval}}</span></div>
                <div class="imglist flex-jc-between pd">
                    <img :src="fileimg1.content" alt="">
                    <img :src="fileimg2.content" alt="">
                </div>
                <div class="flex-jc-between pd"><span class="fc-grey">托管费率</span><span>20%</span></div>
                <div class="pd">审核结果将在48小时内通知您</div>
                <div class="pd flex-align-items ">
                    <van-checkbox checked-color="#2DBBF1" v-model="isconsent"></van-checkbox>
                    <div class="pdl10">我已阅读并同意<router-link to="" class="fc-blue">《托管合约》</router-link></div>
                </div>
            </div>

            <div class="btn text-c" @click="submit">确认提交</div>
        </div>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    data(){
        return{
            fileimg1:'',
            fileimg2:'',
            serialnumval:'',
            telval:'',
            isconsent: true,
            showmodel: false,
            gohostingSession: ''
        }
    },
    created(){
        let gohostingSession = JSON.parse(window.sessionStorage.getItem("gohostingSession"));
        if(gohostingSession){
            this.serialnumval = gohostingSession.serialnumval
            this.telval = gohostingSession.telval
        }
    },
    methods:{
        onRead1(file) {
            console.log(file)
            this.fileimg1 = file
        },
        onRead2(file) {
            console.log(file)
            this.fileimg2 = file
        },

        onshowmodel(){
            if(this.serialnumval==''||this.telval==''){
                Toast("请先填写完整");
                return
            }

            let gohostingSession = JSON.parse(window.sessionStorage.getItem("gohostingSession"));
            gohostingSession.serialnumval = this.serialnumval
            gohostingSession.telval = this.telval
            window.sessionStorage.setItem("gohostingSession", JSON.stringify(gohostingSession));

            console.log(gohostingSession) 
            this.gohostingSession = gohostingSession
            this.showmodel = true
        },

        submit(){
            if(this.isconsent){
                Toast("此功能未开通");
                this.$router.replace({ path: '/gsuccessful' })
            }else{
                Toast("您还未同意合约");
            }
            
        }
    }
}
</script>

<style scoped>
.pdl10{
    padding-left: 10px
}
.pd{
    padding: 10px;
}
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
.uploadimg{
    width: 140px;
    height: 100px;
    border-radius: 8px;
    border-bottom: 4px solid #4ea9f9;
    box-shadow: 0px 0px 2px 0px #4ea9f9;
}
.uploadimg img {
    width: 43px;
    height: 34px;
}
.fileimg img {
    width: 140px;
    height: 100px;
}
.btext{
    font-size: 11px;
    padding: 10px 0;
}
.box{
    padding: 0 15px;
}

.model {
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    padding: 10px;
    box-sizing: border-box;
}
.model .main {
    border-radius: 5px;
    margin-bottom: 20px;
}
.main .closeimg {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
}
.main > div {
    box-sizing: border-box;
}
.main .imglist > img {
    width: 130px;
    height: 100px;
    border-radius: 5px;
}
.fittings{
    padding-left: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>
