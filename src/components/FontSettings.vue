<template>
<div class="font-settings">
   <p>
       <span class="label">字号</span> 
       <span class="btn" @click="fontChange(true)">-</span> <span class="btn" @click="fontChange(false)">+</span>
   </p>
   <p>
       <span class="label">背景</span>
       <span v-for="(c,i) in colors" :key="i" @click="colorChange(c)" :style="{'background':c,'border': '1px solid ' + c}"  :class="currentColor === c ? 'current-color color-btn' : 'color-btn'" ></span> 
   </p>
</div>
</template>
<style lang="less">
.font-settings {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: fixed;
  bottom: 1.3333rem;
  left: 0;
  height: 2.3333rem;
  font-size: 0.42rem;
  > p {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    > span {
      float: left;
      box-sizing: border-box;
      text-align: center;
      width: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-radius: 50%;
    }
  }
  .btn {
    margin-right: 0.4rem;
    border: 1px solid #fff;
    font-size: 0.6rem;
    text-align: center;
    font-weight: 400;
  }
  .color-btn {
    border-radius: 50%;
    margin-right: 0.4rem;
  }
  .current-color {
    border: 1px solid red !important;
  }
  .label {
    margin: 0 0.5333rem;
    width: 1rem;
  }
}
</style>
<script  type="text/ecmascript-6">
export default {
  data() {
    return {
      colors: ["#e9dfc7", "#e7eee5", "#a4a4a4", "#cdefcd", "#7f98bb", "#1f2921"]
    };
  },
  props: ["currentColor", "setFontSize", "setBgcolor"],
  created() {
    console.log(this);
  },
  methods: {
    fontChange(bool) {
      this.setFontSize(bool);
    },
    colorChange(color) {
      this.setBgcolor(color);
    }
  }
};
</script>

