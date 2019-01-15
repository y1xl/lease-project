<template>
    <div>首页</div>
</template>

<script>
import { Toast } from 'vant'
export default{

    data() {
        return {
            lat: '',
            lag: ''
        }
    },

    created() {
        this.getLocation()
    },

    methods: {
        getLocation(){ 
            if (window.navigator.geolocation){ 
                window.navigator.geolocation.getCurrentPosition((position)=>{
                    var lat = position.coords.latitude; //纬度 
                    var lag = position.coords.longitude; //经度 
                    this.lat = lat,
                    this.lag = lag
                })
            }else{ 
                Toast('浏览器不支持地理定位') 
            } 
        },
    }
}
</script>

<style scoped>

</style>