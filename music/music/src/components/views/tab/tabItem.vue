<template>
    <tab class="tab">
       <router-link tag="div" class="tab-item" to="/reconmmend">
       <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
       <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/sort">
       <span class="tab-link">排行
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
       <span class="tab-link">搜索</span>
    </router-link>

        
       
    </tab>
</template>
<script>
import tab from './tab'
export default {
    name:"tabItem",
    data() {
        return {
          
           
        }
    },
    components:{
        tab
    },
    methods: {
        tabClick(index){
            this.currenIndex = index
          
        }
    },
}
</script>
<style  scoped>
.tab div{
    flex:1;
    color: rgba(255,255,255,0.5);
    font-size: 14px;
}

.router-link-active span{
    border-bottom: 2px solid #ffcd32;
     padding-bottom: 5px;
}

</style>