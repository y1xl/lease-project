<template>
  <div>
    <div class="header text-c">
      <div class="mar-b-10 fsz18">
        <span v-if="data.order_status==6">租赁中</span>
        <span v-if="data.order_status==4">订单关闭</span>
        <span v-if="data.order_status==8">检测中</span>
        <span v-if="data.order_status==9">售后中</span>
        <span v-if="data.order_status==10">退押金中</span>
        <span v-if="data.order_status==1">待付款</span>
        <span v-if="data.order_status==5">待收货</span>
        <span v-if="data.order_status==7">退租中</span>
      </div>
      <!-- <div class="fc-blue fsz13">29分钟36秒的支付时间</div>
      <div class="fsz13 fc-grey">取消订单原因</div> -->
    </div>

    <div class="pd-lr-15">
      <div class="bgc main">
        <div class="goods flexbox box-sizing">
          <div class="flex-1">
            <div class="mar-b-10">{{data.goods_name}}</div>
            <div class="spec mar-b-10">
              <span v-for="(item,index) in data.spec" :key="index">{{item[0]}}</span>
            </div>
          </div>
          <img :src="data.gd_img" alt>
        </div>

        <div v-if="!data.express_no==''">
          <div class="title position">
            快递信息
            <div class="l dot"></div>
            <div class="r dot"></div>
          </div>
          <div class="mar-b-10 fsz13">{{data.express_company}} 运单号：{{data.express_no}}</div>
          <div class="flex-align-items mar-b-10" @click="showlogistics=true">
            <div class="flex-1">
              <div class="fc-blue mar-b-10">订单已发货</div>
              <div class="fsz12">2018-11-11</div>
            </div>
            <van-icon name="arrow" />
          </div>
        </div>

        <div>
          <div class="title position">
            租赁信息
            <div class="l dot"></div>
            <div class="r dot"></div>
          </div>
          <div class="info">
            <div class="flexbox">
              <span>订单号</span>
              <span class="flex-1">{{data.order_no}}</span>
            </div>
            <div class="flexbox">
              <span>下单时间</span>
              <span class="flex-1">{{data.create_time}}</span>
            </div>
            <div class="flexbox">
              <span>租期</span>
              <span class="flex-1">{{data.rent_time}}天</span>
            </div>
            <div class="flexbox" >
              <span>期望收到的日期</span>
              <span class="flex-1">{{data.qwsh_time}}</span>
            </div>
            <!-- <div class="flexbox">
              <span>预约期望档期</span>
              <span class="flex-1">{{data.qwsh_time}}</span>
            </div> -->
            <div class="flexbox">
              <span>取货方式</span>
              <span class="flex-1">
                {{data.delivery_way}}
              </span>
            </div>

            <template v-if="data.delivery_way=='快递'||data.delivery_way=='平台配送'">
            <div class="flexbox" >
              <span>收货地址</span>
              <span class="flex-1">
                {{data.province+data.city+data.district+data.order_address}}
              </span>
            </div>
            <div class="flexbox">
              <span>收货人</span>
              <span class="flex-1">
                
              </span>
            </div>
            <div class="flexbox">
              <span>收货人手机号码</span>
              <span class="flex-1">
                
              </span>
            </div>
            <div class="flexbox">
              <span>收货时间</span>
              <span class="flex-1">
                {{data.sh_time}}
              </span>
            </div>
            </template>
            
            <div class="flexbox" v-if="data.delivery_way=='平台配送'">
              <span>配送时间段</span>
              <span class="flex-1">
                {{data.timelist}}
              </span>
            </div>

            <template v-if="data.delivery_way=='自取'">
            <div class="flexbox">
              <span>自取地点</span>
              <span class="flex-1">
                深圳市龙华新区龙华街道九方A座
                1001号
              </span>
            </div>
            <div class="flexbox">
              <span>自取时间</span>
              <span class="flex-1"></span>
            </div>
            <div class="flexbox">
              <span>时间点</span>
              <span class="flex-1"></span>
            </div>
            <div class="flexbox">
              <span>联系人</span>
              <span class="flex-1">{{data.order_name}}</span>
            </div>
            <div class="flexbox">
              <span>手机号码</span>
              <span class="flex-1">{{data.order_phone}}</span>
            </div>
            <div class="flexbox">
              <span>取货时间</span>
              <span class="flex-1">
                {{data.order_delivery_time}}
              </span>
            </div> 
            </template>
          </div>
        </div>

        <div>
          <div class="title flex-jc-between position">
            <span>应付总金额</span>
            <span class="fc-red">¥{{data.total_price||0}}</span>
            <div class="l dot"></div>
            <div class="r dot"></div>
          </div>
          <div class="info">
            <!-- 租转售 -->
            <!-- <div class="flexbox">
              <span>商品价格</span>
              <span class="flex-1">¥1000.00</span>
            </div>
            <div class="flexbox">
              <span>租金抵扣</span>
              <span class="flex-1">¥1000.00</span>
            </div> -->
            <!-- 租转售  end-->
            <div class="flexbox">
              <span>押金</span>
              <span class="flex-1">¥{{data.order_rent||0}}</span>
            </div>
            <div class="flexbox">
              <span>租金</span>
              <span class="flex-1">¥{{data.rental||0}}</span>
            </div>
            <!-- <div class="flexbox">
              <span>享受优惠</span>
              <span class="flex-1">-¥50.00</span>
            </div> -->
            <div class="flexbox">
              <span>保险费</span>
              <span class="flex-1">¥{{data.order_safe||0}}</span>
            </div>
            <div class="flexbox">
              <span>优惠券</span>
              <span class="flex-1">-¥{{data.vouchers||0}}</span>
            </div>
            <div class="flexbox" v-if="data.delivery_way=='平台配送'">
              <span>配送运费</span>
              <span class="flex-1">-¥{{data.way_price||0}}</span>
            </div>
            <div class="flexbox" v-if="data.delivery_way=='快递'">
              <span>快递费</span>
              <span class="flex-1">-¥{{data.way_price||0}}</span>
            </div>
            <!-- <div class="flexbox">
              <span>已收定金</span>
              <span class="flex-1">-¥50.00</span>
            </div> -->
            <div class="flexbox">
              <span>免押额度</span>
              <span class="flex-1">-¥{{data.order_credit_rent||0}}</span>
            </div>
          </div>
        </div>
        <!-- 售后中 -->
        <!-- <div>
          <div class="title position">
            协商信息
            <div class="l dot"></div>
            <div class="r dot"></div>
          </div>
          <div>平台:边角有磨损、裂痕</div>
          <div class="imglist flex-jc-between">
            <img @click="onImagePreview()" src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt>
            <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt>
            <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt>
          </div>
          <div class="reason">我 :理由理由理由理由理由理由理由理由</div>
        </div> -->
        <!-- 租转售 -->
        <!-- <div>
          <div class="title position">
            订单信息
            <div class="l dot"></div>
            <div class="r dot"></div>
          </div>
          <div class="info">
            <div class="flexbox">
              <span>到货时间</span>
              <span class="flex-1">1-3天</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <van-popup v-model="showlogistics" >
      <div class="text-c pd-15">
        快递信息
        <div class="fr"><van-icon name="close" @click="showlogistics=false"/></div>
      </div>
      <!-- <div class='progress position'>
        <div v-for="(item,index) in wuliu" :key="index">
          <div class='time text-c'>
            <div>07:45</div>
          </div>
          <div class='sdot'></div>
          <div>[深圳] 快件已到达深圳快件已到达深圳</div>
        </div>
      </div> -->
      <div class="express">
          <div class="item flex-align-items">
              <span>11:00</span>
              <span class="flex-1">快件已到达深圳快件已到达深圳</span>
          </div>
          <div class="item flex-align-items">
              <span>11:00</span>
              <span class="flex-1">快件已到达深圳快件已到达深圳深圳</span>
          </div>
      </div>
    </van-popup>

    <div class="height"></div>

    <div class="tools bgc border-t">
      <div class="flex-center border-blue fc-blue" v-if="data.order_status==1">
        <router-link v-bind="{to: '/pay/'+data.order_id}">支付</router-link>
      </div>
      <div class="flex-center border-blue fc-blue" v-if="data.order_status==5" @click="onConfirmGoods(data.order_id)">确认收货</div>
      <div class="flex-center border" v-if="data.order_status==4" @click="del(data.order_id)">删除订单</div>
      <div class="flex-center border" v-if="data.order_status==6"><router-link :to="`/relet/${data.order_id}`">续租</router-link></div>
      <div class="flex-center border" @click="goshopping(data.order_id)" v-if="data.order_status==6">购买</div>
      <div class="flex-center border" @click="gorefund(data.order_id)" v-if="data.order_status==6">退租</div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { Toast } from 'vant';
export default {
  data(){
    return {
      showlogistics:false,
      data:''
    }
  },
  created(){
    this.getdata()
  },
  methods:{
    onImagePreview(){
      ImagePreview([
        'http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg',
      ]);
    },
    getdata(){
      let postData = this.$qs.stringify({
          users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_id:this.$route.params.id,
      })
      this.axios.post(this.API + "api/Lease_Order/orderDetails",postData)
      .then(res => {
          console.log(res.data, "data")
          let resdata = res.data
          if (resdata.code == 200) {
              this.data = resdata.data[0]
          } else {
              Toast(resdata.message)
          }
      });
    },
    goshopping(){
      window.sessionStorage.removeItem('shoppingSession');
      this.$router.push({ path: "/shopping" });
    },
    gorefund(){
      window.sessionStorage.removeItem('refundSession');
      this.$router.push({ path: "/refund" });
    },
  }
};
</script>

<style scoped>
.fsz18 {
  font-size: 18px;
}
.fsz13 {
  font-size: 13px;
}
.fsz12 {
  font-size: 12px;
}
.fsz16 {
  font-size: 16px;
}
.height {
  height: 55px;
}
.header {
  padding: 15px 0;
}
.main {
  border-radius: 10px;
  padding: 15px;
}
.main .title {
  font-weight: bold;
  padding: 15px 0;
  border-top: 1px dashed #b7b7b7;
}
.dot {
  width: 14px;
  height: 14px;
  background-color: #f6f6f6;
  border-radius: 50%;
}
.title .l {
  position: absolute;
  top: -7px;
  left: -20px;
}
.title .r {
  position: absolute;
  top: -7px;
  right: -20px;
}
.goods {
  padding-bottom: 15px;
}
.goods img {
  width: 72px;
  height: 72px;
}
.spec > span {
  display: inline-block;
  background-color: #f2f1f1;
  font-size: 12px;
  padding: 1px 5px;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 8px;
}
.imglist {
  padding-top: 15px;
  font-size: 0;
}
.imglist > img {
  width: 85px;
  height: 85px;
}
.reason {
  padding-top: 15px;
}

.info div {
  padding-bottom: 10px;
}
.info div > span:nth-of-type(1) {
  width: 110px;
}

.tools {
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
}
.tools > div {
  height: 25px;
  min-width: 70px;
  border-radius: 20px;
  box-sizing: border-box;
  margin-left: 10px;
  font-size: 13px;
}

/* .progress{
  width: 285px;
  padding: 10px;
  box-sizing: border-box;
}
.progress > div {
  margin-left: 50px;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-left: 1px solid #ccc;
  position: relative;
}

.progress .time {
  position: absolute;
  left: -50px;
  top: 10px;
  font-size: 12px;
}

.progress .sdot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  left: -5px;
  overflow: hidden;
  background-color: #E0E0E0;
  display: inline-block;
} */
.express {
  width: 285px;
  box-sizing: border-box;
  padding-bottom: 10px;
}
.express .item {
  padding: 10px;
}
.express .item > span:nth-of-type(1){
    width: 50px;
}

</style>
