<template>
    <div>
        <van-radio-group v-model="radio" >
            <div v-for="(item,index) in list" :key="index" class="card">
                <van-swipe-cell :right-width="65" :on-close="onClose">
                    <div 
                        class="bgc flex-align-items item" 
                        >
                        <van-radio :name="item.id" checked-color="#2DBBF1"></van-radio>
                        <div class="flex-1 left">
                            <div class="mar-b-10">曾小姐 123456789</div>
                            <div><van-tag plain type="danger">默认</van-tag> 深圳深圳深圳深圳深圳深圳深圳</div>
                        </div>
                        <img src="../../assets/icon-editor.png" alt="编辑" class="editorimg">
                    </div>
                    <div slot="right" class="del">删除</div>
                </van-swipe-cell>
            </div>
        </van-radio-group>
        
        <div class="height"></div>
        <div class="add"><router-link to="/addaddress"><div class="btn text-c">新增地址</div></router-link></div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    data(){
        return{
            list:[{id:1,},{id:2}],
            radio:1
        }
    },
    methods:{
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
}
</script>

<style scoped>
.height {
    height: 85px;
}
.add {
    width: 100%;
    position: fixed;
    bottom:0;
    left: 0;
    padding: 15px;
    box-sizing: border-box;
}
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
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

.card {
    margin: 15px;
    border-radius: 8px;
    overflow: hidden;
}
.card .item{
    padding: 10px;
}
.card .left {
    padding: 0 10px;
}
.editorimg {
    width: 20px;
    height: 20px;
}
</style>
