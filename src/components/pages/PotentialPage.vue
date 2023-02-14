<template>
  <TheFunction/>
  <div class="wrapper">
    <TheSidebarLeft />
    <TheContent />
    <TheSidebarRight />
  </div>
</template>

<script>
import TheFunction from "../layout/TheFunction.vue";
import TheSidebarLeft from "../layout/TheSidebarLeft.vue";
import TheContent from "../layout/TheContent.vue";
import TheSidebarRight from "../layout/TheSidebarRight.vue";
export default {
  name: "PotentialPage",
  components: {
    TheFunction,
    TheSidebarLeft,
    TheContent,
    TheSidebarRight,
},
  data() {
    return {
    }
  },
};
</script>

<style>
.wrapper {
  display: flex;
  height: calc(100vh - 140px);
}

.link-router {
  text-decoration: none;
}
</style>