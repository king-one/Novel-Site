<template>

  <div id="app">
    <svg style="display:none" xmlns="http://www.w3.org/2000/svg">
    <symbol id="icon-arrow-1" viewBox="0 0 8 16"><path d="M.146 7.646a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7v.708l7-7a.5.5 0 0 0-.708-.708l-7 7z"></path></symbol>
    </svg>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

