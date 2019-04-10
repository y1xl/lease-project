import Vue from 'vue'

Vue.filter('distance', function (value) {
    if(value < 1000){
        return value+"m"
    }else if(value > 1000){
        return (Math.round(value/100)/10).toFixed(1) + "km"
    } 
})
Vue.filter('nozero', function (value) {
    if(value.endsWith('.00') ){
        return value.split('.')[0]
    }else {
        return value
    }
})