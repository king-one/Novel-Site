<template>
<div class=bottom-menus>
    <dl>
        <dt></dt>
        <dd>目录</dd>
    </dl>
     <dl>
        <dt></dt>
        <dd>显示</dd>
    </dl>
     <dl>
        <dt></dt>
        <dd>夜间</dd>
    </dl>
</div>
</template>
<style lang="less">
.bottom-menus{
    display: flex;
    justify-content:flex-start;
    align-items: center;
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
