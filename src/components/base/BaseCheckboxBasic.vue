<template>
  <div class="base-checkbox">
    <input type="checkbox" class="checkbox" :id="id" @click="handleCheckBoxAll"/>
    <label v-if="isLable" class="title-checkbox" :for="id">{{filterContent}}</label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  components: {},
  props: {
    id: {
      type: String,
    },
    filterContent: {
      type: String,
      default: "CheckBox",
    },
    //thiết lập trạng thái ban đầu có checked không
    checked: {
      type: Boolean,
      default: false,
    },
    //có lable không
    hasLable: {
      type: Boolean,
      default: true,
    },
    // Đối tượng object có chức năng checkAll hay không ?
    checkboxAll: {
      type: Boolean,
    },
  },
  computed: {
    // Có lable hay không
    isLable() {
      return this.hasLable ? true : false;
    }
  },
  methods: {
    /**
     * Thiết lập trang trạng thái checkbox
     * Author: DHTHINH (18/07/2022)
     */
    handleCheckBoxAll() {
      if (this.checkboxAll) {
        this.$emit('checkAll')
      } else {
        this.$emit('checkboxItem', this.id)
      }
    },
  }
};
</script>

<style scoped>
.base-checkbox {
  display: flex;
  padding: 8px 0px;
}

.base-checkbox span {
  cursor: pointer;
}

.checkbox {
  appearance: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin: 0px;
  border: 1px solid #7c869c;
}

.checkbox:hover {
  border: 1px solid #2b4eee;;
}

.checkbox:checked {
  color: #fff;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background: transparent url(../../assets/Resource/img/icon_collection.svg)
    no-repeat -176px -16px;
  border: none;
}

.title-checkbox {
  cursor: pointer;
  font-family: Regular;
  font-size: 13px;
  padding-left: 8px;
  flex: 1;
}
</style>