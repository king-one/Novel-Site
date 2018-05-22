<template>
   <div class = 'load-div'>
          <div class= 'cube-grid' v-html="setCube">
          </div>
        </div>
</template>
<style lang="less">
@import url("../assets/variable.less");
/*
  * Spinner positions
  * 1 2 3
  * 4 5 6
  * 7 8 9
  */
.load-div {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
}
.cube-grid {
  width:0.8rem;
  height:0.8rem;
  top: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  .sk-cube {
    width: 33%;
    height: 33%;
    background-color:@theme-primary-2;
    float: left;
    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    &:nth-child(1) {
      animation-delay: 0.2s;
    }
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
    &:nth-child(4) {
      animation-delay: 0.1s;
    }
    &:nth-child(5) {
      animation-delay: 0.2s;
    }
    &:nth-child(6) {
      animation-delay: 0.3s;
    }
    &:nth-child(7) {
      animation-delay: 0s;
    }
    &:nth-child(8) {
      animation-delay: 0.1s;
    }
    &:nth-child(9) {
      animation-delay: 0.2s;
    }
  }
}
@keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
}
</style>

<script type="text/ecmascript-6">
export default {
  computed: {
    setCube() {
      let cubs = "";
      for (var i = 0; i < 9; i++) {
        cubs += "<div class= 'sk-cube'></div>";
      }
      return cubs;
    }
  }
};
</script>
