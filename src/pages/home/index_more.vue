<template>
    <div> 
    	<div class="text-c border-b top"> 产品列表</div>
    	<div style="width: 100%;" class="text-c">
    		<img class="top_img" src="https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99"/>
    	</div>
    	<div>
			<van-list
				  v-model="loading"
				  :finished="finished"
				  @load="onLoad"
				  class="flex-wrap"
				>
			  	<div v-for="item in list" :key="item" :title="item" >
					<div class="item text-c">
					
						<img class="img" src="../../assets/tab/zhuans.png">
						
                        <div class="text-line pro_title">日本 instax 拍日本 instax 拍</div>
                        <div>
                            <span class="price">¥3.08</span>/日
                        </div>
					</div>
					
				</div>
				<div class="text-c f14 no_more"><span >没有更多了</span></div> 
			</van-list>
			
			
    	</div>
    </div>
</template>

<script>
export default{
    data() {
	    return {
	      list: [],
	      loading: false,
	      finished: false
	    };
  	},
   	methods: {
	    onLoad() {
	      // 异步更新数据
	      setTimeout(() => {
	        for (let i = 0; i < 10; i++) {
	          this.list.push(this.list.length + 1);
	        }
	        // 加载状态结束
	        this.loading = false;
	
	        // 数据全部加载完成
	        if (this.list.length >= 10) {
	          this.finished = true;
	        }
	      }, 500);
	    }
  	}
}
</script>

<style scoped>
.f12 {
  font-size: 12px;
}
.f14 {
  font-size: 14px;
}
.top {
	position: fixed;
	top: 0;
	z-index: 99;
	background: #fff;
	width: 100%;
	height: 44px;
	line-height: 44px;
}
.top_img{
	margin-top: 57px;
	width: 305px;
	height: 116px;
	border-radius: 10px;
}

.item{
	width: 139px;
	height: 200px;
	background: #f7f7f7;
	margin: 13px 0 0 13px;
	
}
.img{
	width: 111px;
	height: 111px;
}

.price {
  font-size: 14px;
  color: #f21e1e;
}
.no_more{
	width: 100%;
	color:#cecece;
	padding: 12px 0;
}
</style>