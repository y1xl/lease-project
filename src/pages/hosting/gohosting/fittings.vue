<template>
    <div>
        <div class="pd-15 fc-grey bgc">请选择现有的配件</div>
        <div class="pd-lr-15 bgc">
            <span class="fc-red">*</span>
            <span class="fc-grey fsz13">设备出租需包含完整配件，若配件不齐全，我们将补充完整，需由您承担相应成本</span>
        </div>

        <van-checkbox-group v-model="result">
            <div class="bgc pd-15 flex-wrap">
                <div v-for="(item, index) in list" :key="index" class="flex-align-items item">
                    <van-checkbox :name="item"></van-checkbox>
                    <span class="pdl">相机</span>
                </div>
            </div>
        </van-checkbox-group>

         <div class="pd-15">
            <div class="btn text-c" @click="next">下一步</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list: ['a', 'b', 'c'],
            result: []
        }
    },
    methods:{
        next(){
            this.$router.push({ path: '/uploadimg' })
        }
    }
}
</script>

<style scoped>
.fsz13{
    font-size: 13px
}
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
.pdl{
    padding-left: 10px
}

.item {
    width: 50%;
    box-sizing: border-box;
    padding: 10px 0;
}
</style>
