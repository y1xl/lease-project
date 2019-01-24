<template>
    <div>
        <div class="pd-15 bgc">请选择日期</div>
        <div id="calendar">
            <Calendar @choseDay="clickDay" :agoDayHide="nowdate"></Calendar>
        </div>
        <div class="fc-red tip pd-15">如当前没有您所需要的档期，请选择预租下单，我们将在24小时内
回复是否可以满足您的需求.</div>
        <div class="pd-t-100"><div class="btn text-c">预租下单</div></div>
    </div>
</template>

<script>
import Calendar from 'vue-calendar-component';

export default {
    components: {
        Calendar
    },
    data(){
        return{
            value:'',
            nowdate:String(Date.now() - 86400000).slice(0,10)
        }
    },
    created(){

    },
    methods:{
        clickDay(date){
            console.log(date)
            window.sessionStorage.setItem("datechoose", date);
            this.$router.go(-1)
        }
    }
}
</script>

<style>
#calendar .wh_content_all{
    background-color: #fff;
}
#calendar .wh_jiantou1 {
    border-color: #000;
}
#calendar .wh_jiantou2 {
    border-color: #000;
}
#calendar .wh_top_changge li {
    color: #000;
}
#calendar .wh_content_item{
    color: #000;
}
#calendar .wh_content_item .wh_chose_day{
    background-color: #50ABF9;
    color: #fff;
}

</style>

<style scoped>
.tip {
    font-size:12px;
}
.pd-t-100{
    padding: 0 15px;
    padding-top: 100px;
    padding-bottom:15px;
}
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
</style>
