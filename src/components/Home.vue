<template>
  <div class="container">
   <header>
   <div class="header-top">易看小说</div>
   <nav>
       <ul class="book-menu">
        	<li v-for="(item,index) in navList" :key="index"><a href="item.link"  :class="index === 0 ? 'active' :null">{{item.tittle}}</a></li>
        </ul>
   </nav>
   </header>
   <classfiy-panel :bookList="bookList" title="热门小说"></classfiy-panel>
   <classfiy-panel :bookList="bookList" title="排行榜"></classfiy-panel>
   <classfiy-panel :bookList="bookList" title="新书抢先"></classfiy-panel>
   <classfiy-panel :bookList="bookList" title="畅销完本"></classfiy-panel>
   <loading v-if="!bookList"></loading>
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
  padding: 0.2133rem 0.3174rem ;
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
import Loading from "./Loading";
import ClassfiyPanel from "./ClassfiyPanel";
import bookList from "../mock";
export default {
  data() {
    return {
      navList: [
        {
          tittle: "玄幻",
          linkL: "/"
        },
        {
          tittle: "修真",
          linkL: "/"
        },
        {
          tittle: "都市",
          linkL: "/"
        },
        {
          tittle: "历史",
          linkL: "/"
        },
        {
          tittle: "游戏",
          linkL: "/"
        },
        {
          tittle: "分类",
          linkL: "/"
        },
        {
          tittle: "男生",
          linkL: "/"
        },
        {
          tittle: "女生",
          linkL: "/"
        },
        {
          tittle: "口味",
          linkL: "/"
        },
        {
          tittle: "排行",
          linkL: "/"
        }
      ],
      bookList: null
    };
  },
  components: {
    Loading,
    ClassfiyPanel
  },
  methods: {
    getBookList() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(bookList.data);
        }, 300);
      });
    }
  },
  created() {
    this.getBookList().then(res => {
      console.log(res)
      this.bookList = res
    });
  }
};
</script>

