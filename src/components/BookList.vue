<template>
    <div :class='desc ? "book-list-desc":"book-list"'>
        <router-link v-for="(item,index) in bookList" :key="index" :to="{path:`/bookDetail/${item.id}`}">
            <dl v-if="!desc"><dt><img :src="'//qidian.qpic.cn/qdbimg/349573/' + item.bid + '/150'" alt="" class="book-cover" ></dt>
                <dd><span>{{item.bName}}</span><br/><span class="miro-text">{{item.bAuth}}</span></dd>
            </dl>
            <div v-else>
                <li class="book-li">
                        <img :src="'//qidian.qpic.cn/qdbimg/349573/' + item.bid + '/150'"  class="book-cover" :alt="item.bName">
                        <div class="book-cell">
                            <h4 class="book-title">{{item.bName}}</h4>
                            <p class="book-desc">{{item.desc}}</p>
                            <div class="book-meta">
                                <div class="book-meta-l">
                                    <span class="book-author" role="option"> 作者：{{item.bAuth}} </span>
                                </div>
                                <div class="book-meta-r">
                                    <span class="tag-small-group origin-right">
                              <em class="tag-small gray">游戏</em><em class="tag-small red">连载</em><em class="tag-small blue">57.34万字</em>
                          </span>
                                </div>
                            </div>
                        </div>
                </li>
            </div>
        </router-link>
    </div>
</template>
<style lang="less">
@import url("../assets/variable.less");
/* public */
.book-cover {
  width: 100%;
  height: auto;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.tag-small-group {
  .tag-small {
    padding: 0.0233rem 0.1333rem;
    margin: 0 0.03rem;
    border: 1px solid #969ba3;
    border-radius: 5px;
      &.gray {
        color: #969ba3;
        border-color: #969ba3;
      }
      &.red {
        color: #ed424b;
        border-color:  #ed424b;
      }
      &.blue {
        color: #4284ed;
        border-color: #4284ed;
      }

  }
}
.gray {
  color: #969ba3;
}
.red {
  color: #ed424b;
}
.blue {
  color: #4284ed;
}
/* -- */
.book-list {
  min-height: 3.6rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
  font-size: 0.3733rem;
  &::-webkit-scrollbar {
    display: none;
  }
  > a {
    display: inline-block;
    vertical-align: top;
    width: 1.76rem;
    height: 100%;
    white-space: normal;
    padding: 0.16rem;
  }
  dl {
    display: block;
    height: 100%;
    dd {
      padding-top: 0.08rem;
      color: @theme-stroke-1;
      > span {
        display: inline-block;
        overflow: hidden;
        max-height: 0.8533rem;
      }
      .miro-text {
        font-size: 0.32rem;
        color: @theme-stroke-4;
      }
    }
  }
}

.book-list-desc {
  .book-li {
    height: 3.2rem 0;
    padding: 0.16rem;
    height: 3.2rem;
    img {
      width: 1.76rem;
      float: left;
    }
    > div {
      height: 100%;
      padding: 0 0.16rem;
      color: #969ba3;
    }
  }
  .book-cell {
    overflow: hidden;
  }
  .book-title {
    line-height: 1.5;
    font-size: 0.4267rem;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
    text-overflow: ellipsis;
  }
  .book-desc {
    font-size: 0.3733rem;
    overflow: hidden;
    line-height: 1.4;
    display: -webkit-box;
    margin: 0.14rem 0;
    height: 0.9533rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .book-meta {
    font-size: 0.32rem;
    line-height: 1.8;
    overflow: hidden;
    .book-meta-l {
      float: left;
      .book-author {
        display: block;
        overflow: hidden;
        max-width: 3.7333rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .book-meta-r {
      position: relative;
      float: right;
      .book-meta-r .tag-small-group {
        position: absolute;
        top: -0.375rem;
        right: 0;
        white-space: nowrap;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: {
    bookList: {
      required: false
    },
    desc: {
      default: false
    }
  }
};
</script>
