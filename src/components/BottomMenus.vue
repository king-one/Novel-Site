<template>
<div class=bottom-menus>
    <dl  @click="handleFontSettings()">
        <dt></dt>
        <dd>目录</dd>
    </dl>
     <dl @click="handleFontSettings()">
        <dt></dt>
        <dd>显示</dd>
    </dl>
     <dl  @click="handleFontSettings()">
        <dt></dt>
        <dd>夜间</dd>
    </dl>
</div>
</template>
<style lang="less">
.bottom-menus {
  display: flex;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.95);
  color: #fff;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1.3333rem;
  font-size: 0.42rem;
}
</style>
<script>
export default {
  data() {
    return {
      colors: ["#e9dfc7", "#e7eee5", "#e7eee5", "#e7eee5", "#7f98bb", "#1f2921"]
    };
  },
  props: ["handleFontSettings"],
  method: {
    handleFontSettings(bool) {
      this.props.handleFontSettings(bool);
    }
  }
};
</script>
