<template>
    <div class="reconHend">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name:'reconHead'
}
</script>
<style scoped>
  .reconHend{
      width: 100%;
      height: 44px;
      background-color: #222222;
      color:#FFCD32;
      line-height: 44px;
      display: flex;
      text-align: center;
      /* border-bottom:0 1px #b4abab; */
      
  }
  .left{
      width: 50px;
      
  }
  .center{
      flex: 1;
  }
  .right{
      width: 50px;
  }
</style>