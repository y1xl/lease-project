<template>
    <div>
        <router-link class="flex-jc-between pd-15 border-b bgc" to="/realname">
            <div>微信</div>
            <div class="flex-align-items fc-grey">
                <span class="fc-grey mr">已绑定</span>
            </div>
        </router-link>
        <router-link class="flex-jc-between pd-15 border-b bgc" to="/realname">
            <div>支付宝</div>
            <div class="flex-align-items fc-grey">
                <span class="fc-blue mr">去绑定</span>
                <van-icon name="arrow" />
            </div>
        </router-link>
        <router-link class="flex-jc-between pd-15 border-b bgc" to="/realname">
            <div>微博</div>
            <div class="flex-align-items fc-grey">
                <span class="fc-blue mr">去绑定</span>
                <van-icon name="arrow" />
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  margin: 15px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
