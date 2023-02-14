<template>
  <div class="container">
    <TheMenu />
    <router-view> </router-view>
  </div>
</template>

<script>
import TheMenu from "./components/layout/TheMenu.vue";
export default {
  name: "App",
  components: {
    TheMenu,
},
  created() {
    // var _this = this;
    // this.showLoading(true);
    // setTimeout(() => {
    //   _this.showLoading(false);
    // }, 1000);
  }
};
</script>

<style>
@import url("./style/font.css");
@import url("./style/icons.css");
@import url("./style/tooltip.css");
.container {
  display: flex;
  flex-direction: column;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Regular;
  font-size: 13px;
  overflow: hidden;
}
.mgr-8 {
  margin-right: 8px;
}
::-webkit-scrollbar{
  width: 8px;
  height: 8px;
  background-color: rgb(240 242 244) !important;
}
::-webkit-scrollbar-track {
  background-color: rgb(240 242 244) !important;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #99a1b2 !important;
}

::-webkit-scrollbar-thumb {
  background-color: #c5c9d3 !important;
  border-radius: 10px;
  border: 1px solid transparent;
  /* -webkit-background-clip: content-box; */
}

::-webkit-scrollbar-thumb:active {
  background-color: #7c869c !important;
}
::-webkit-scrollbar::before{
  box-sizing:border-box;
}
</style>
