<template>
    <section class="book-classify">
     <div class="book-hot">
        <h2 class="classify-title">{{title}}</h2>
        <book-list :bookList="bookList"></book-list>
     </div>
   </section>
</template>
<style lang="less">
@import url("../assets/variable.less");
.book-list {
}
</style>
<script type="text/ecmascript-6">
import BookList from "./BookList"
export default {
  data() {
    return {};
  },
  props: ["bookList", "title"],
  components: {
    BookList
  }
};
</script>
