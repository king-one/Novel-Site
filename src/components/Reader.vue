<template>
<div class="reader">
       <top-menus></top-menus>
       <div class="reader-content">
           <div class="chapter"  v-show="!loading">
               <p v-for="(p,i) in content" :key="i">
                   {{p}}
               </p>
           </div>
       </div>
       <div class="dic-bg">
           <dictionnary v-show="showDic" :bookId="$route.params.id"></dictionnary>
       </div>
       <div class="pre" :ckick="pageUp()"></div>
       <div class="next" :ckick="pageNext()"></div>
       <font-settings></font-settings>
       <bottom-menus></bottom-menus>
       <loading v-show="loading"></loading>
</div>
</template>
<style lang="less">


</style>
<script>
export default {
    
}
</script>

