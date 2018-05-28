<template>
     <section class="detail-content">
         <header class="detail-header">
          <a href="javascript:history.go(-1)"><svg class="icon"><title>返回</title><use xlink:href="#icon-arrow-1"></use></svg></a>
          <h1 class="header-back-title">{{currentBook.bName}}</h1>
         </header>
          <img  class="book-cover-blur" :src="'//qidian.qpic.cn/qdbimg/349573/' + currentBook.bid + '/150'" alt="">
           <div class="book-info">
              <div class="book-cover">
                <img :src="'//qidian.qpic.cn/qdbimg/349573/' + currentBook.bid + '/150'" alt="">
              </div>
              <div class="info">
                  <p class="book-title">{{currentBook.bName}}</p>
                  <p class="author">{{currentBook.bAuth}}</p>
                  <p class="go-read"> <router-link :to="{path:`/reader/${currentBook.bid}`}">免费阅读</router-link></p>
              </div>
            </div>
            <div class="summary">
                {{currentBook.desc}}
            </div>
     </section>
</template>
<style lang="less">
@import url("../assets/variable.less");
.detail-content{
    position: relative;
}
.book-info {
  display: flex;
  justify-content: flex-start;
  .info {
    padding: 0 0.2667rem;
    flex: 1;
    .book-title {
      font-size: 0.4667rem;
      color: #33373d;
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: 0.1333rem;
    }
    .author {
      font-size: 0.4267rem;
      margin-bottom: 0.1333rem;
    }
    .go-read {
      margin-top: 1.2rem;
      a {
        display: block;
        width: 2.2667rem;
        border-radius: 3px;
        height: 0.8rem;
        background: #ed424b;
        color: #fff;
        text-align: center;
        line-height: 0.8rem;
        font-size: 0.38rem;
      }
    }
  }
}
.summary {
  font-size: 0.38rem;
  line-height: 1.5;
  padding: 0.2rem;
}
.book-cover{
    width: 2.5067rem;
    margin-left: 0.2667rem;
    img {
    width: 100%;
    height: auto;
  }
}
.book-cover-blur {
  position: absolute;
  top: calc(50% - 87.5vw);
  width: 100%;
  height: 175vw;
  opacity: calc(.1 + .05);
  filter: blur(calc(17px + 1px));
}
.detail-header {
  text-align: center;
  position: relative;
  font-size: 0.2667rem;
  font-weight: normal;
  a {
    position: absolute;
    margin-left: 0.1333rem;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .header-back-title {
    display: inline-block;
  }
}
</style>

<script>
import bookList from "../mock";

export default {
  data() {
    return {
      currentBook: bookList
    };
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
      this.currentBook = res[0];
    });
  }
};
</script>
