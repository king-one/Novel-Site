<template>
<div class="reader">
       <top-menus></top-menus>
       <div class="reader-content">
           <div class="chapter"  v-show="!loading" :style="{'background':currentColor,'fontSize':currentFontSize + 'rem'}">
               <p v-for="(p,i) in content" :key="i">
                   {{p}}
               </p>
           </div>
       </div>
       <div class="dic-bg">
           <!-- <dictionnary v-show="showDic" :bookId="$route.params.id"></dictionnary> -->
       </div>
       <div class="pre" @ckick="pageUp()"></div>
       <div class="next" @ckick="pageNext()"></div>
       <font-settings :set-font-size="setFontSize" :set-bgcolor="setBgcolor" :current-color='currentColor'  v-show="showFont" ></font-settings>
       <bottom-menus :handle-font-settings="handleFontSettings"></bottom-menus>
       <loading v-show="loading"></loading>
</div>
</template>
<style lang="less">
.chapter {
  color: #555;
  letter-spacing: 0.3ex;
  line-height: 1.5;
  padding: 0.24rem;
}
</style>
<script  type="text/ecmascript-6">
import Loading from "./Loading";
import BottomMenus from "./BottomMenus";
import FontSettings from "./FontSettings";
import TopMenus from "./TopMenus";
import bookContent from "../mock/bookContent";
export default {
  data() {
    return {
      content: [],
      loading: false,
      showFont: true,
      showDicPanel: false,
      currentColor: "#e9dfc7",
      currentFontSize: 0.5
    };
  },
  components: {
    BottomMenus,
    FontSettings,
    TopMenus,
    Loading
  },
  created() {
    this.content = bookContent.content.split("-");
  },
  mounteds: {},
  methods: {
    pageNext: function() {},
    pageUp: function() {},
    setFontSize: function(bool) {
      let cfs = this.currentFontSize;
      if (cfs < 0.4 && bool || cfs > 0.6 && !bool) return;
      this.currentFontSize = bool ? cfs * 0.8 : cfs * 1.2;
    },
    setBgcolor: function(color) {
      this.currentColor = color;
    },
    handleFontSettings: function() {
      this.showFont = !this.showFont;
    }
  }
};
</script>

