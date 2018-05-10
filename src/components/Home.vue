<template>
  <div class="container">
   <header>
   <div class="header-top">易看小说</div>
   <nav>
       <ul class="book-menu">
        	<li><a href="/yc"  class="active">玄幻</a></li>
          <li><a href="/ycmm">修真</a></li>
          <li><a href="/book" >都市</a></li>
          <li><a href="/category" >历史</a></li>
          <li><a href="/free" >游戏</a></li>
          <li><a href="/taste" >分类</a></li>
          <li><a href="/taste" >男生</a></li>
          <li><a href="/taste" >女生</a></li>
          <li><a href="/taste" >口味</a></li>
          <li><a href="/rank">排行</a></li>
        </ul>
   </nav>
   </header>
  </div>
</template>
<style lang="less">
@import url("../assets/variable.less");
.container {
  font-size: 0.4rem;
}
header {
  .header-top {
    color: @theme-stroke-10;
    padding-left: 0.3174rem;
    height: 1.0667rem;
    line-height: 1.0667rem;
    background: @theme-primary-3;
  }
  .book-menu {
    height: 100%;
    padding: 0.3174rem;
    overflow: hidden;
    li {
      width: 20%;
      float: left;
    }
    a.active {
      background: @theme-primary-3;
      border-radius: 3px;
      color: #fff;
    }
    a {
      color: @theme-stroke-2;
      width: 1.6rem;
      height: 0.64rem;
      line-height: 0.64rem;
      display: block;
      text-align: center;
      margin: 4px auto;
    }
  }
}
.book-classify {
  padding: 0.3174rem;
  .classify-title {
    height: 0.8rem;
    line-height: 0.8rem;
    position: relative;
    text-indent: 0.8ex;
    &::before {
      position: absolute;
      display: inline-block;
      box-sizing: border-box;
      width: 0;
      left: 0;
      top: 1ex;
      height: 2ex;
      content: "";
      border-left: 2px solid @theme-primary-2;
    }
  }
}
</style>
<script type="text/ecmascript-6">
import {bookList} from "../mock"
export default {
  data() {
    return {
      bookList: [
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        },
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        },
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        },
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        },
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        },
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        },
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        },
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        },
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        },
        {
          id:"12345",
          title: "荒野直播之独闯天涯",
          author: "逆流的沙"
        }
      ]
    };
  }
};
</script>

