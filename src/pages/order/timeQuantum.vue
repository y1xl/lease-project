<template>
    <div>
        <div class="list">
            <div class="border item flex-center">11:00-13:00</div>
            <div class="border item flex-center">11:00-13:00</div>
            <div class="border item flex-center">11:00-13:00</div>
            <div class="border item flex-center">11:00-13:00</div>
        </div>
        <div class="pd-t-100"><div class="btn text-c">确认</div></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
.pd-t-100{
    padding: 0 15px;
    padding-top: 100px;
}
.list{
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    padding-right: 5px;
}
.item {
    margin-right: 10px;
    margin-bottom: 10px;
    width: 87px;
    height: 30px;
    border-radius: 5px;
    font-size: 12px;
}
</style>
