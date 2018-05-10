<template>
      <div class="book-list" >
              <router-link v-for="(item,index) in bookList" :key="index" :to="{path:`/bookDetail/${item.id}`}">
              <dl><dt><img src="item.img" alt=""></dt><dd>{{item.title}}</dd></dl>
              </router-link>
      </div>
</template>
<style lang="less">
@import url("../assets/variable.less");
.book-list {
}
</style>
<script type="text/ecmascript-6"></script>

