<template>
<div class="font-settings">
   <p><span class="label">字号</span> <span class="btn" :click="fontChange(true)">+</span> <span class="btn" :click="fontChange(false)">-</span></p>
   <p><span class="label">背景</span> <span class="color-btn" v-for="(c,i) in colors" :key="i" :click="colorChange(c)" style="background:c"></span> 
</template>
<style lang="less">
.font-settings{
    display: flex;
    justify-content:flex-start;
    align-items: center;
    .btn{
        padding: 0.4rem 0.5333rem;
        margin-right: 0.4rem;
    }
    .color-btn{
        padding: 0.6667rem;
        border-radius: 50%;
        margin-right: 0.4rem;
    }
    .current-color{
        border:1px solid red;
    }
    .label{
     margin: 0 0.5333rem;
    }
}
</style>
<script>
export default {
   data(){
        return{
            colors:['#e9dfc7','#e7eee5','#e7eee5','#e7eee5','#7f98bb','#1f2921']
        }
    },
    props:['currentColor','setFontSize','setBgcolor'],
    method:{
        fontChange(bool){
          this.props.setFontSize(bool)
        },
        colorChange(color){
           this.props.setBgcolor(color)
        }
    }
}
</script>

