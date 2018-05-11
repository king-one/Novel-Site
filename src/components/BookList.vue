<template>
      <div class="book-list" >
              <router-link v-for="(item,index) in bookList" :key="index" :to="{path:`/bookDetail/${item.id}`}">
              <dl><dt><img :src="'//qidian.qpic.cn/qdbimg/349573/' + item.bid + '/150'" alt=""></dt><dd><span>{{item.bName}}</span><span>{{item.bAuth}}</span></dd></dl>
              </router-link>
      </div>
</template>
<style lang="less">
@import url("../assets/variable.less");
.book-list {
  min-height: 3.6rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
  font-size: 0.32rem;
  > a {
    display: inline-block;
    vertical-align: top;
    width: 2.2667rem;
    height: 100%;
    white-space: normal;
  }
  dl {
    display: block;
    height: 100%;
    img{
      max-width: 100%;
    }
  }
}
</style>
<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  props: ["bookList"]
};
</script>

