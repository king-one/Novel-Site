<template>
    <div class="book-list">
        <router-link v-for="(item,index) in bookList" :key="index" :to="{path:`/bookDetail/${item.id}`}">
            <dl v-if="!desc"><dt><img :src="'//qidian.qpic.cn/qdbimg/349573/' + item.bid + '/150'" alt="" class="book-cover" ></dt>
                <dd><span>{{item.bName}}</span><br/><span class="miro-text">{{item.bAuth}}</span></dd>
            </dl>
            <div v-else>
                <li class="book-li">
                        <img :src="'//qidian.qpic.cn/qdbimg/349573/' + item.bid + '/150'"  class="book-cover" :alt="item.bName">
                        <div class="book-cell">
                            <h4 class="book-title">{{item.bName}}</h4>
                            <p class="book-desc">{{item.decs}}</p>
                            <div class="book-meta">
                                <div class="book-meta-l">
                                    <span class="book-author" role="option">
                                    <aria>作者：</aria>{{item.bAuth}} </span>
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
    img {
      width: 100%;
      height: auto;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
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
