<template>
   
         <div class="item">
                <div class="img">
                    <img v-lazy="list.coverImgUrl" alt="" 
                    style="width:60px;height:60px" 
                    @load="imageLoad"
                    class="needsclick">
                </div>
                <div class="text">
                    <h2>{{list.copywriter}}</h2>
                    <p>{{list.name}}</p>
                </div>
            </div>
        
  
</template>
<script>
export default {
    name:"gedanItem",
    data() {
        return {
            checkLoad:false
        }
    },
    props:{
        list:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods: {
        imageLoad(){
            if(!this.checkLoad){
                this.$bus.$emit('imageLoad')
            }
            this.checkLoad = true
            
        }
    },
}
</script>
<style scoped>
.item{
    height: 83px;
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
    
}
.item .img{
   width: 60px;
   height: 60px;
   /* background-color: blueviolet; */
  margin-right: 20px;
    
}
.item .text{
    width:225px;
    height: 60px;
    display: flex;
    flex-direction: column;
}
.item .text h2{
    font-size: 14px;
    color: white;
    margin: 10px 0 10px 0;
}
.item .text p{
    font-size: 14px;
    color:rgba(255,255,255,0.3);
    margin: 0;
    overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
}
</style>