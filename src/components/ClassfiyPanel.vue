<template>
    <section class="book-classify">
     <div class="book-hot">
        <h2 class="classify-title">热门小说</h2>
        <Bo
     </div>
   </section>
</template>
<style lang="less">
@import url("../assets/variable.less");
.book-list {
}
</style>
<script type="text/ecmascript-6">
import BookList from "./Common/BookList.vue";
import Loading from "./Loading/Loading.vue";
export default {
  data() {
    return {};
  },
  props: ["datalist", "title"],
  components: {
    BookList,
    Loading
  }
};
</script>
