<template>
    <div>
        <div class="gedanul">
           <gedan-item v-for="(item,index) in limit" :key="index" :list = item></gedan-item>
        </div>
    </div>
</template>
<script>
import gedanItem from './gedanItem'
export default {
    name:"gedan",
    props:{
       limit:{
           type:Array,
           default(){
               return[]
           }
       }
    },
    components:{
        gedanItem,
        
    }
}
</script>
<style scoped>
.gedanul{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
     background-color:#222222;

}



</style>