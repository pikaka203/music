<template>
  <div id="app">
     <headd class="pad"></headd>
     <tab-item class="tabitem"></tab-item>
     <router-view></router-view>
  </div>
</template>

<script>

import Headd from 'components/views/reconmmend/reconmmendChlid/Headd'
import tabItem from 'components/views/tab/tabItem'
export default {
  name: 'App',
  components: {
     Headd,
     tabItem
  }
}
</script>

<style>
.pad{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tabitem{
   z-index: 10;
}
 @import'./assets/css/quanju.css';
 @import'./assets/css/base.css';
 @import './assets/css/react.css';
 
</style>
