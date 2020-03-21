<template>
    <div ref="wrapper" class="wrapper">
        <slot></slot>
    </div>
</template>
<script>
//导入better-scroll
import BCscroll from 'better-scroll'
export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default:1
        },
        click:{
            type:Boolean,
            default:true
        },
        data:{
            type:Array,
            default:null
        }
    },
    mounted() {
        setTimeout(()=>{
           this._initScroll
        },20)
    },
    methods: {
        _initScroll(){
            if(!this.$refs.wrapper){
                return
            }
            this.scroll = new BCscroll(this.$refs.wrapper,{
                probeType:this.probeType,
                click:this.click
            })
        },
        enable(){
            this.scroll && this.scroll.enable()
        },
        disable(){
            this.scroll && this.scroll.disable()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        }
    },
    watch: {
        data(){
            setTimeout(()=>{
           this.refresh()
            },20)
        }
    },

}
</script>
<style scoped>
.wrapper{
  
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
} 
</style>