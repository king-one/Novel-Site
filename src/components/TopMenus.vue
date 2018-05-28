<template>
<div class="top-menus">
    <a href="javasctipt:history.go(-1)">返回</a>
</div>
</template>
<style lang="less">
.top-menus {
  height: 1.3333rem;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: fixed;
  font-size: 0.42rem;
  top: 0;
  left: 0;
  > a {
    color: #fff;
    margin-left: 0.2667rem;
  }
}
</style>
<script>
export default {};
</script>

