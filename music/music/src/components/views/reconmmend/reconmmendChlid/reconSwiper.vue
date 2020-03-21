<template>
    <van-swipe :autoplay="3000" class="swiper">
  <van-swipe-item v-for="(image, index) in images" :key="index">
      <a v-for="(a,index) in bannerUrl" :key="index" :href="a">
        <img v-lazy="image" />
        </a>
  </van-swipe-item>
</van-swipe>

</template>
<script>

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    name:"reconSwiper",
    data() {
        return {
      
        
        }

    },
    props:{
      images:{
          type:Array,
          default(){
              return []
          }
      },
      bannerUrl:{
          type:Array,
           default(){
              return []
          }
      }
       
    }
}
</script>
<style  scoped>
 .swiper{
     height: 145px;
     width: 100%;
 } 
 .swiper img{
     width: 100%;
 }
 
 
</style>