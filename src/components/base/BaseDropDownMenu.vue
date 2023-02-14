<template>
  <div :id="id" class="crm-dropdown">
    <button type="button" @click="onClickOpen" :class="{ isActive: isOpen }">
      <div ref="TextSelected" class="dropdown-content" :v-model="text">
        {{ text }}
      </div>
      <div class="icon icon-dropdown"></div>
    </button>
    <div class="dropdown-list" v-show="isOpen">
      <div class="item__search" v-if="isInputSearch">
        <input
          ref="InputSearch"
          class="search__input"
          placeholder="Tìm kiếm"
          id="input-search"
        />
        <div class="search__icon"><div class="icon-search"></div></div>
      </div>
      <DropDownItem
        v-for="(item, index) in arrays"
        :key="index"
        :item="item"
        :closeDropdown="callToClose"
        @click="() => itemOnSelect(item)"
      >
        {{ item.text }}
      </DropDownItem>
    </div>
  </div>
</template>

<script>
import DropDownItem from "./BaseDropDownItem.vue";
export default {
  name: "BaseDropDownMenu",
  components: {
    DropDownItem,
  },
  data() {
    return {
      isOpen: false,
      data: [],
      text: "- Không chọn -",
      value: null,
    };
  },
  props: {
    url: {
      type: String,
    },
    propValue: String,
    propText: String,
    //Truyền vào màu của chữ
    color: {
      type: String,
    },

    //Truyền vào mảng
    arrays: {
      type: Array,
      default: () => [],
    },

    //Truyền vào nội dụng hiển thị ban đầu của dropdown
    dropdownContent: {
      type: String,
      required: true,
    },
    //Có tìm kiếm
    hasInputSearch: {
      type: Boolean,
      default: false,
    },
  },

  watch() {
    let TextSelected = this.$refs.TextSelected;
    console.log(TextSelected);
  },

  computed: {
    isInputSearch() {
      return this.hasInputSearch;
    },
  },
  methods: {
    /**
     * Hàm thực hiện đóng dropdown
     * Author: DHTHINH (18/08/2022)
     */
    callToClose() {
      this.isOpen = false;
    },
    /**
     * Hàm thực hiện mở đóng dropdown
     * Author: DHTHINH (18/08/2022)
     */
    onClickOpen() {
      let _this = this;
      _this.isOpen = !_this.isOpen;
      this.$nextTick(() => {
        this.focusInput();
      });
    },

    /**
     * Hàm focus vào thẻ input tìm kiếm khi mở dropdown
     * Author: DHTHINH (18/08/2022)
     */
    focusInput() {
      this.$refs.InputSearch.focus();
    },

    /**
     * Nếu click ra ngoài, drop down menu tắt
     * Author: DHTHINH (18/08/2022)
     */
    itemOnSelect(item) {
      this.text = item.text;
    },
  },
  beforeUnmount() {
    window.removeEventListener("click", this.onClick);
  },
};
</script>

<style scoped>
button {
  position: relative;
  padding: 0 8px 0 16px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.3s;
  height: 32px;
  width: 100%;
  border: 1px solid #d3d7de;
  padding-left: 16px;
  padding-right: 8px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button:focus {
  outline: 0px;
}

.crm-dropdown {
  position: relative;
  width: fit-content;
  cursor: pointer;
  background: #ffffff;
  width: 100%;
}
.dropdown-list {
  position: absolute;
  padding-bottom: 8px;
  -ms-box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.32);
  -o-box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.32);
  box-shadow: 0 -1px 8px #00000052;
  background: #fff;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  width: 100%;
  bottom: 32px;
  right: 0px;
  overflow: auto;
}
.dropdown-content {
  color: v-bind(color);
}

.item__search {
  position: relative;
  padding: 4px 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #d3d7de !important;
}

.search__input {
  flex: 1;
  width: 100%;
  border: none;
  padding: 4px 4px 4px 16px;
  height: 28px;
}

.search__input::placeholder {
  font-family: Regular;
  font-size: 13px;
}

.search__input:focus {
  outline: none;
  border: none;
}

.search__icon {
  width: 16px;
  margin-right: 8px;
  flex-shrink: 0;
}
</style>
