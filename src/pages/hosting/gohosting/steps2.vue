<template>
    <div>
        <div class="flex-jc-between flex-align-items bgc pd-15" @click="showbuytime=true">
            <div class="flex-1">
                <div class="mar-b-10 fc-grey">购买时间</div>
                <div class="fc-grey" v-if="buytimetext==''">请选择购买时间</div>
                <div v-else>{{buytimetext}}</div>
            </div>
            <van-icon name="arrow" />
        </div>
        <div class="bgc pd-15">
            <div class="mar-b-10 fc-grey">购买价格</div>
            <input type="text" placeholder="请输入购买价格">
        </div>
        <div class="flex-jc-between flex-align-items bgc pd-15" @click="showcolour=true">
            <div class="flex-1">
                <div class="mar-b-10 fc-grey">外观成色</div>
                <div class="fc-grey" v-if="colourtext==''">请选择外观成色</div>
                <div v-else>{{colourtext}}</div>
            </div>
            <van-icon name="arrow" />
        </div>
        <van-field
            v-model="colourdes"
            type="textarea"
            placeholder="请输入外观成色描述"
            autosize
        />
        <div class="flex-jc-between flex-align-items bgc pd-15" @click="showstate=true">
            <div class="flex-1">
                <div class="mar-b-10 fc-grey">功能状况</div>
                <div class="fc-grey" v-if="statetext==''">请选择功能状况</div>
                <div v-else>{{statetext}}</div>
            </div>
            <van-icon name="arrow" />
        </div>

        <div class="pd-15">
                <div class="btn text-c" @click="next">下一步</div>
            </div>

        <van-popup v-model="showbuytime" position="bottom" :close-on-click-overlay="false">
            <van-picker :columns="buytimearr" show-toolbar @cancel="showbuytime = false" @confirm="onConfirmType1"/>
        </van-popup>
        <van-popup v-model="showcolour" position="bottom" :close-on-click-overlay="false">
            <van-picker :columns="colourarr" show-toolbar @cancel="showcolour = false" @confirm="onConfirmColour"/>
        </van-popup>
        <van-popup v-model="showstate" position="bottom" :close-on-click-overlay="false">
            <van-picker :columns="statearr" show-toolbar @cancel="showstate = false" @confirm="onConfirmState"/>
        </van-popup>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //品类1
            showbuytime: false,
            buytimetext: '',
            buytimearr: ['时间1', '时间2'],
            //外观成色
            showcolour: false,
            colourtext: '',
            colourarr: ['成色1', '成色2'],
            colourdes: '',
            //功能状况
            showstate: false,
            statetext: '',
            statearr: ['状况1', '状况2'],

        }
    },
    methods:{
       onConfirmType1(value, index){
            this.buytimetext = value
            this.showbuytime = false
        },
       onConfirmColour(value, index){
            this.colourtext = value
            this.showcolour = false
        },
       onConfirmState(value, index){
            this.statetext = value
            this.showstate = false
        },

        next(){
            this.$router.push({ path: '/fittingsConfirm' })
        }
    }
}
</script>

<style scoped>
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
</style>
