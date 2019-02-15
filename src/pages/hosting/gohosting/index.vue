<template>
    <div>
        <div id="nav" >
            <van-tabs v-model="active">
                <van-tab title="有硬件"></van-tab>
                <van-tab title="无硬件"></van-tab>
            </van-tabs>
        </div>

        <div v-show="active==0">

            <div class="flex-jc-between flex-align-items bgc pd-15" @click="showtype=true">
                <div class="flex-1">
                    <div class="mar-b-10 fc-grey">品类</div>
                    <div class="fc-grey" v-if="typetext==''">请选择托管品类</div>
                    <div v-else>{{typetext}}</div>
                </div>
                <van-icon name="arrow" />
            </div>
            <div class="flex-jc-between flex-align-items bgc pd-15" @click="showbrand=true">
                <div class="flex-1">
                    <div class="mar-b-10 fc-grey">品牌</div>
                    <div class="fc-grey" v-if="brandtext==''">请选择品牌</div>
                    <div v-else>{{brandtext}}</div>
                </div>
                <van-icon name="arrow" />
            </div>
            <div class="flex-jc-between flex-align-items bgc pd-15"  @click="showmodel=true">
                <div class="flex-1">
                    <div class="mar-b-10 fc-grey">型号</div>
                    <div class="fc-grey" v-if="modeltext==''">请选择型号</div>
                    <div v-else>{{modeltext}}</div>
                </div>
                <van-icon name="arrow" />
            </div>
            <div class="flex-jc-between flex-align-items bgc pd-15" @click="showcolor=true">
                <div class="flex-1">
                    <div class="mar-b-10 fc-grey">颜色</div>
                    <div class="fc-grey" v-if="colortext==''">请选择颜色</div>
                    <div v-else>{{colortext}}</div>
                </div>
                <van-icon name="arrow" />
            </div>
            <div class="flex-jc-between flex-align-items bgc pd-15" @click="shownum=true">
                <div class="flex-1">
                    <div class="mar-b-10 fc-grey">数量</div>
                    <div class="fc-grey" v-if="numtext==''">请选择数量</div>
                    <div v-else>{{numtext}}</div>
                </div>
                <van-icon name="arrow" />
            </div>

            <div class="pd-15">
                <div class="btn text-c" @click="next">下一步</div>
            </div>

            <van-popup v-model="showtype" position="bottom" :close-on-click-overlay="false">
                <van-picker :columns="typearr" show-toolbar @cancel="showtype = false" @confirm="onConfirmType"/>
            </van-popup>
            <van-popup v-model="showbrand" position="bottom" :close-on-click-overlay="false">
                <van-picker :columns="brandarr" show-toolbar @cancel="showbrand = false" @confirm="onConfirmBrand" value-key='brand_name'/>
            </van-popup>
            <van-popup v-model="showmodel" position="bottom" :close-on-click-overlay="false">
                <van-picker :columns="modelarr" show-toolbar @cancel="showmodel = false" @confirm="onConfirmModel"/>
            </van-popup>
            <van-popup v-model="showcolor" position="bottom" :close-on-click-overlay="false">
                <van-picker :columns="colorarr" show-toolbar @cancel="showcolor = false" @confirm="onConfirmColor"/>
            </van-popup>
            <van-popup v-model="shownum" position="bottom" :close-on-click-overlay="false">
                <van-picker :columns="numarr" show-toolbar @cancel="shownum = false" @confirm="onConfirmNum"/>
            </van-popup>

        </div>

        <div v-show="active==1">

            <div class="flex-jc-between flex-align-items bgc pd-15" @click="showtype1=true">
                <div class="flex-1">
                    <div class="mar-b-10 fc-grey">品类</div>
                    <div class="fc-grey" v-if="typetext1==''">请选择托管品类</div>
                    <div v-else>{{typetext1}}</div>
                </div>
                <van-icon name="arrow" />
            </div>

            <div class="describe bgc">
                <div class="fc-grey">为了用户能达到更高的回报率，我们提供渠道底价销售的政策；</div> 
                <div class="fc-grey">支持信用卡、花呗、消费分期等支付方式，没钱照样可以享受托管收益。</div> 
            </div>
            
            <div class="box bgc">
                <div class="mar-b-10">热租型号</div>
                <div class="list">
                    <div class="goods">
                        <div style="font-size: 0;"><img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt=""></div>
                        <div class="main">
                            <div>商品1</div>
                            <div class="fc-grey fsz12">预计收益 60%</div>
                        </div>
                    </div>
                    <div class="goods">
                        <div style="font-size: 0;"><img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt=""></div>
                        <div class="main">
                            <div>商品1</div>
                            <div class="fc-grey fsz12">预计收益 60%</div>
                        </div>
                    </div>
                    <div class="goods">
                        <div style="font-size: 0;"><img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt=""></div>
                        <div class="main">
                            <div>商品1</div>
                            <div class="fc-grey fsz12">预计收益 60%</div>
                        </div>
                    </div>
                </div>
            </div>

            <van-popup v-model="showtype1" position="bottom" :close-on-click-overlay="false">
                <van-picker :columns="typearr1" show-toolbar @cancel="showtype1 = false" @confirm="onConfirmType1"/>
            </van-popup>
        </div>

    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    data(){
        return{
            active:0,
            //品类
            showtype: false,
            typetext: '',
            typearr: ['品类1', '相机'],
            //品类1
            showtype1: false,
            typetext1: '',
            typearr1: ['品类1', '相机'],
            //品牌
            showbrand: false,
            brandtext: '',
            brandarr: [],
            //型号
            showmodel: false,
            modeltext: '',
            modelarr: ['型号1', '型号2'],
            //颜色
            showcolor: false,
            colortext: '',
            colorarr: ['颜色1', '颜色2'],
            //数量
            shownum: false,
            numtext: '',
            numarr: ['数量1', '数量2'],
            gohostingSession: ''
        }
    },
    created(){
        let gohostingSession = JSON.parse(window.sessionStorage.getItem("gohostingSession"));
        if(gohostingSession){
            this.typetext = gohostingSession.typetext
            this.brandtext = gohostingSession.brandtext
            this.modeltext = gohostingSession.modeltext
            this.colortext = gohostingSession.colortext
            this.numtext = gohostingSession.numtext
            this.gohostingSession = gohostingSession
        }

        this.getbrand()
    },
    methods:{
        onConfirmType(value, index){
            this.typetext = value
            this.showtype = false
        },
        onConfirmType1(value, index){
            this.typetext1 = value
            this.showtype1 = false
        },
        onConfirmBrand(value, index){
            this.brandtext = value.brand_name
            this.showbrand = false
        },
        onConfirmModel(value, index){
            this.modeltext = value
            this.showmodel = false
        },
        onConfirmColor(value, index){
            this.colortext = value
            this.showcolor = false
        },
        onConfirmNum(value, index){
            this.numtext = value
            this.shownum = false
        },

        getbrand(){
            this.axios.post(this.API + "api/Lease/brand_select")
            .then(res => {
                console.log(res.data, "data")
                let resdata = res.data
                if (resdata.code == 200) {
                    this.brandarr = resdata.data
                } else {
                    Toast(resdata.message)
                }
            })
        },

        next(){
            if(this.typetext==''||this.brandtext==''||this.modeltext==''||this.colortext==''||this.numtext==''){
                Toast("请先填写完整");
                return
            }

            let gohostingSession = {
                typetext: this.typetext,
                brandtext:this.brandtext,
                modeltext:this.modeltext,
                colortext:this.colortext,
                numtext:this.numtext,

                datetext: this.gohostingSession.datetext||'',
                colourtext:this.gohostingSession.colourtext||'',
                colourdes: this.gohostingSession.colourdes||'',
                statetext: this.gohostingSession.statetext||'',
                priceval: this.gohostingSession.priceval||'',

                fittings: this.gohostingSession.fittings||[],

                serialnumval:this.gohostingSession.serialnumval||'',
                telval:this.gohostingSession.telval||'',
            }
            window.sessionStorage.setItem("gohostingSession", JSON.stringify(gohostingSession));
            this.$router.push({ path: '/steps2' })
        }
    }
}
</script>

<style>
#nav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
</style>

<style scoped>
.fsz12 {
    font-size: 12px
}
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}

.describe{
    padding: 30px 15px;
}

.box {
    padding: 0 15px 0px 15px;
}
.list > div:nth-of-type(odd){
    margin-right: 15px;
}

.goods{
    display: inline-block;
    box-shadow: 0px 1px 7px 1px #DAD7D7;
    box-sizing: border-box;
    margin-bottom: 15px;
}
.goods img {
    width: 135px;
    height: 135px;
}
.goods .main{
    padding: 10px;
    box-sizing: border-box;
}
</style>
