<template>
    <div>
         <div id="bigtabbar">
         <slot></slot>
         </div>
    </div>
</template>
<script>
export default {
    name:'tab'
}
</script>
<style scoped>
  #bigtabbar{
     display: flex;
     height: 44px;
     background-color:#222222;
     position: fixed;
     top: 44px;
     left: 0;
     right: 0;
      text-align: center;
    line-height: 44px;
 }
</style>