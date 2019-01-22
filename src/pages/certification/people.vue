<template>
  <div class="pd-15">
    <van-radio-group v-model="radio">
        <div
            class="card bgc mar-b-10 flex-align-items"
            v-for="(item,index) in list"
            :key="index"
        >
            <van-radio :name="item.id" checked-color="#2DBBF1"></van-radio>
            <div class="flex-1 left" @click="radio = item.id">
                <div>关系:朋友</div>
                <div>联系人电话:18888888888</div>
                <div>联系人姓名:xxx</div>
            </div>
            <div class="tools">
                <img src="../../assets/icon-editor.png" alt="编辑">
                <img src="../../assets/icon-del.png" alt="删除" @click="del(item.id,$event)">
            </div>
        </div>
    </van-radio-group>

    <router-link class="add bgc flex-center" to="/addPeople">
      <van-icon name="add-o"/>
      <span>新增紧急联系人</span>
    </router-link>
  </div>
</template>

<script>
import { Dialog } from "vant";

export default {
  data() {
    return {
      radio: 1,
      list: [{ id: 1 }, { id: 2 }]
    };
  },
  methods: {
    del(id, e) {
      Dialog.confirm({
        title: "",
        message: "是否删除?"
      })
        .then(() => {
          // on confirm
          console.log(id, e);
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style scoped>
.card {
  padding: 10px;
  height: 135px;
  box-sizing: border-box;
}
.card .tools > img {
  width: 22px;
  height: 22px;
}
.card .left {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
.tools {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.add {
  border-radius: 5px;
  height: 64px;
  color: #2dbbf1;
  border-radius: 5px;
}
.add > span {
  margin-left: 10px;
}
</style>
