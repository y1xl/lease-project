<template>
<div>
    <div class="bgc card">
        <router-link v-bind="{to: '/orderDetail'}">
            <div class="flex-jc-between"><span>订单号:11901910265079</span><span class="fc-blue">待确认</span></div>
            <div class="flexbox">
                <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt="" class="goodsimg bgc-grey">
                <div class="flex-1">
                    <div>日本 instax拍立得</div>
                    <div class="spec"><span>1件</span><span>黑色</span></div>
                    <div>实付总额:<span class="fc-red">￥123</span></div>
                </div>
            </div>
        </router-link>
        <div class="tools">
            <div class="text-c border" @click="showmodel = true">取消支付</div>
        </div>
    </div>

    <div class="model full" v-show="showmodel">
        <div class="main bgc">
            <div class="text-c position" @click="showmodel = false">
                取消订单
                x
            </div>
            <div>
                <div>请选择取消订单的原因,帮助我们改进(必选):</div>
                <van-radio-group v-model="radio">
                    <div class="flex-jc-between" @click="radio = item.id" v-for="(item,index) in canceltext" :key="index">
                        <span>{{index+1}}、{{item.text}}</span>
                        <van-radio :name="item.id" checked-color="#2DBBF1"></van-radio>
                    </div>
                </van-radio-group>
            </div>
            <div style="padding:0 10px"><div class="btn text-c">提交</div></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            radio: 1,
            canceltext: [{id:1,text:'我不想租了'},{id:2,text:'其他'}],
            showmodel: false
        }
    },
    methods:{

    }
}
</script>

<style scoped>
    .card {
        border-radius: 8px
    }
    .card .goodsimg {
        width: 80px;
        height: 80px;
    }
    .card .spec > span{
        display: inline-block;
        background-color: #F2F1F1
    }
    .card .tools > div{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        min-width: 82px;
        border-radius: 20px;
    }
   .model {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, .5);
      z-index: 100;
  }
  .model .main {
      position: fixed;
      bottom:0;
      left: 0;
      width: 100%;
  }
  .model .btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
</style>
