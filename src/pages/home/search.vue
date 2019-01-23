<template>
    <div>
        <van-search placeholder="请输入搜索关键词"  @search="onSearch" v-model="value"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:''
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

</style>
