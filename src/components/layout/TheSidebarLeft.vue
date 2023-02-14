<template>
  <div class="sidebarleft" id="sidebar-left">
    <div class="sidebarleft__heading filter-down">
      <div class="heading">BỘ LỌC ĐÃ LƯU</div>
      <div class="layout__center"></div>
      <div class="border-icon"><div class="icon-up"></div></div>
    </div>
    <!-- <div class="count-heading">

            </div> -->
    <div class="sidebarleft__heading filter-search">
      <div class="heading">LỌC TIỀM NĂNG THEO</div>
      <div class="layout__center"></div>
      <div class="border-icon"><div class="icon-search"></div></div>
    </div>
    <div class="list-filter">
      <div
        class="filter-item"
        v-for="filter in filters"
        :key="filter.id"
        :data-tooltip-right="filter.contentFilter"
      >
        <BaseCheckboxBasic 
        :filterContent="filter.contentFilter"
        :checked="filter.checked"
        :id="filter.id"
        />
      </div>
      <div class="view-plus">
        <hr class="view__hr">
        <span class="view-text">Xem thêm</span>
        <hr class="view__hr">
      </div>
    </div>
    <div class="collapse__left" @click="hideSidebarLeft">
      <div class="icon-collapse-left"></div>
    </div>
  </div>
  <div
    class="collapse__left--hide"
    id="collapse-left-hide"
    @click="showSidebarLeft"
  >
    <div class="icon-collapse-right"></div>
  </div>
</template>

<script>
import BaseCheckboxBasic from "../base/BaseCheckboxBasic.vue";
import { ref } from "vue";
import ListFilter from "../../constants/ListFilter";
export default {
  name: "TheSidebarLeft",
  components: {
    BaseCheckboxBasic,
},
  setup() {
    const filters = ref(ListFilter);
    return {
      filters,
    };
  },
  methods: {
    /**
     * Chức năng ẩn hiện sidebar
     * Author : DHTHINH(28/07/2022)
     */

    //Hàm ẩn sidebar
    hideSidebarLeft() {
      document.getElementById("sidebar-left").style.display = "none";
      document.getElementById("collapse-left-hide").style.display = "flex";
    },
    //Hàm show sidebar
    showSidebarLeft() {
      document.getElementById("sidebar-left").style.display = "block";
      document.getElementById("collapse-left-hide").style.display = "none";
    },
  },
};
</script>

<style scoped>
.sidebarleft {
  display: block;
  border-right: solid 1px #ccc;
  position: relative;
  width: 260px;
}
.sidebarleft__heading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-left: 16px;
  margin: 8px 0px 0px;
  color: #586074;
}
.sidebarleft__heading .heading {
  font-size: 13px;
}

.potential__items {
  padding: 8px;
}
.list-filter {
  overflow: hidden;
  list-style: none;
  margin: 0px 0px 0px 0px;
  padding: 0 16px;
  color: #586074;
  height: calc(100vh - 236px);
}

.list-filter:hover {
  overflow: auto;
}


.collapse__left {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  cursor: pointer;
  box-shadow: 1px 0 4px #00000029;
  border-radius: 0 6px 6px 0;
  background-color: #fff;
  z-index: 1;
  position: absolute;
  right: -13px;
  top: calc(50% - 20px);
  width: 12px !important;
  height: 40px !important;
  padding: 12px 0 !important;
}
.collapse__left--hide {
  display: none;
  flex-direction: row-reverse;
  align-items: center;
  cursor: pointer;
  box-shadow: 1px 0 4px #00000029;
  border-radius: 0 6px 6px 0;
  background-color: #fff;
  z-index: 1;
  position: absolute;
  left: 0px;
  top: calc(50% + 50px);
  width: 12px !important;
  height: 40px !important;
  padding: 12px 0 !important;
}
.collapse__left--hide:hover {
  width: 20px !important;
}
.collapse__left:hover {
  right: -21px;
  width: 20px !important;
}

.view-plus {
  display: flex;
  font-size: 13px;
  margin: 8px 0;
}

.view-text {
  margin: 0 10px;
  flex-shrink: 0;
  color: #4262f0;
  cursor: pointer;
}

.view__hr {
  width: 100%;
  border-top: .5px solid #d3d7de!important;
  height: 1px;
}

.border-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 16px;
}
</style>