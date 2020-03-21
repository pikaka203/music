<template>
  
       <div> 
    <recon-head>
       <div slot="left"></div>
         <div slot="center" class="center">PiKaQiu Music</div>
           <div slot="right">
             <img src="~assets/img/reconmmend/user (1).png" alt="" class="img"> 
           </div>
     </recon-head>
     </div>
    
</template>
<script>
import reconHead from 'components/views/reconmmend/reconmmendChlid/reconHead'
export default {
    name:"Head",
     components: {
    reconHead
  }
}
</script>
<style scoped>
.img{
   width: 20px;
   height: 20px;
   padding-top: 12px; 
  
 }
</style>