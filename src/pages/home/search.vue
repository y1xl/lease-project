<template>
    <div>
        <van-search placeholder="请输入搜索关键词"  @search="onSearch" v-model="value"/>

        <div class="bgc list">

            <div class="fl_pro_list mar-b-10" v-for="(item, index) in flprolist" :key="index">
              <div class="img_box">
                <img class="sy_img" :src="item.imgurl">
              </div>
              <div class="f14 pro_name">{{item.name1}}</div>
              <div class="com_like">
                <van-rate v-model="item.rate" disabled disabled-color="#FFB10E"/>
                <span class="f12">4.9</span>
                <div>
                  <img class="chat" src="../../assets/chat.png">
                  <span class="f12">999+</span>
                </div>
              </div>
              <div class="zj">
                <span class="f14">租金：</span>
                <span class="price">¥{{item.price1}}</span>
                <span class="f12">/日</span>
              </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:'',
            flprolist: [
                {
                imgurl:
                    "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
                price1: "3.08",
                name1: "Canon/佳能 PowerShot SX720 HS ",
                rate: 4.9
                },
                {
                imgurl:
                    "https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
                price1: "1111111",
                name1: "Canon/佳能 PowerShot SX720 HS "
                },
                {
                imgurl:
                    "https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
                price1: "3.08",
                name1: "Canon/佳能 PowerShot SX720 HS "
                }
            ],
        }
    },
    methods:{
        onSearch(){
            console.log(this.value)
        }
    }
}
</script>

<style scoped>
.list {
    padding-top: 15px
}
/*分类 所有产品*/
.fl_pro_list {
  width: 100%;
  padding:0 10px;
  box-sizing:border-box
}

.img_box {
  width: 100%;
  height: 150px;
}

.sy_img {
  width: 300px;
  height: 150px;
  border-radius: 10px;
}

.pro_name {
  margin-top: 5px;
  line-height: 30px;
}
.com_like {
  display: flex;
  line-height: 22px;
}
.zj {
  line-height: 30px;
}
.chat {
  width: 16px;
  height: 14px;
  padding-left:15px;
  vertical-align: middle;
}
</style>
