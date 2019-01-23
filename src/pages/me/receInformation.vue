<template>
  <div>
    <div class="addresslist">

      <div class="hang bgc" v-for="(address,index) in addresslist" :key="index">
        <van-swipe-cell :right-width="65" :on-close="onClose">
          <van-cell is-link center to="/AddInformation">
            <template slot="title">
              <div>
                <span>曲文</span>
                <span>13845684586</span>
                <span class="moren" style>默认</span>
              </div>
              <div>广东省 深圳市 龙华区 水榭春天B201</div>
            </template>

            <template slot="right-icon">
              <img src="../../assets/bj.png" alt="图标" class="left_img">
            </template>
          </van-cell>
          <div slot="right" class="del">删除</div>
        </van-swipe-cell>
      </div>

    </div>
    <div class="btn text-c" @click="addAddress">添加</div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      addresslist: [{}, {}]
    };
  },
  methods: {
    addAddress() {
      this.$router.push({ path: "/AddInformation" });
    },
    // 删除
        onClose(clickPosition, instance) {
            switch (clickPosition) {
                case 'left':
                case 'cell':
                case 'outside':
                    instance.close();
                break;
                case 'right':
                    Dialog.confirm({
                        message: '确定删除吗？'
                    }).then(() => {
                        instance.close();
                    });
                break;
            }
        },
  }
};
</script>

<style>
.hang .van-cell {
  border-radius: 5px;
}
</style>

<style scoped>
.addresslist {
  width: 100%;
  margin-top: 12px;
  margin-left: 4%;
}
.hang {
  width: 92%;
  margin-top: 10px;
  line-height: 35px;
  border-radius: 5px;
}

.moren {
  padding: 2px 5px;
  color: #fff;
  font-size: 10px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  box-shadow: 0px 0px 6px 0px rgba(79, 171, 249, 0.36);
  border-radius: 4px;
}
.left_img {
  width: 12px;
  height: 12px;
  padding-right: 5px;
}
.btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  color: #fff;
}
.del {
    background-color: #d2d2d2;
    color: #fff;
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
