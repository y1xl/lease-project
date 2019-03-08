<template>
    <div>{{query}}</div>
</template>

<script>
export default {
    data(){
        return{
            query:this.$route.query
        }
    }
}
</script>

<style scoped>

</style>
