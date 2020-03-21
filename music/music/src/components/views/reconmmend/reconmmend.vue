<template>
    <div class="reconmmend">
        <scroll class="content" :data="sings.limit" ref="scroll">
          <recon-swiper :images="images" :bannerUrl="bannerUrl"></recon-swiper>  
          <remen></remen>
          <gedan :limit="sings.limit" ></gedan>
          <div class="loading" v-show="!sings.limit.length">
              <loading></loading>
          </div>
       </scroll>
    </div>
</template>
<script>

import {getReconmmend,getReconmmend2} from '../../../network/reconmmend'
import reconSwiper from './reconmmendChlid/reconSwiper'
import remen from './reconmmendChlid/remen'
import gedan from './reconmmendChlid/gedan'
import Scroll from '../../commen/scroll/Scroll'
import loading from '../../../common/loading/loading'
import {debounce} from '../../../debounce/index'
export default {
    name:'reconmmend',
    components:{
       reconSwiper,
       remen,
       gedan,
       Scroll,
       loading
    },
    data() {
        return {
            banners:[],
            images:[],
            bannerUrl:[],
            sings:{
                 limit:[],
                 before:1
            }
            
            
           
        }
    },
     created() {
        this.getReconmmend()
        this.getReconmmend2()
     
       
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh)
        this.$bus.$on('imageLoad',()=>{
           refresh()
            
        })
    },
    methods: {
        getReconmmend(){
           getReconmmend().then(res=>{
            //拿到banner数组
            this.banners = res.data.banners
            //console.log(this.banners);
            
            this.bannerUrl = this.banners.map(b=>{
               return b.url
            })
            //console.log(this.bannerUrl);
            
            //拿到数组中的对象的属性值 使用map方法遍历
         this.images = this.banners.map(item=>{
            return item.picUrl
         })
    
            
        })
        },
        getReconmmend2(){
            const before = this.sings.before
        getReconmmend2(before).then(res=>{
           //console.log(res);
           this.sings.limit.push(...res.data.playlists)
          // console.log(this.sings.limit);
           
           this.sings.before+=1
           //console.log(this.sings.before);
           
           
        })
        }
       
        
    },
       
    
   
}
</script>
<style scoped>
.reconmmend{
  padding-top: 88px;
  height: 100vh;
  position: relative;
}
.content{
     overflow: hidden;
     position: absolute;
     bottom:0;
     left: 0;
     right: 0;

} 
.loading{
     
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
}
</style>