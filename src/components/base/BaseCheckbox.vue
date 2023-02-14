<template>
  <div class="base__checkbox" style="position: relative">
    <input ref="test-input" type="checkbox" :checked="checked" :id="id"
    @click="handleCheckBoxAll" />
    <label :for="id"></label>
  </div>
</template>

<script>

export default {
  props: {
    id: String,
    contentLabel: String,
     checked: {
      type: Boolean,
      default: false,
    },
    // Đối tượng object có chức năng checkAll hay không ?
    checkboxAll: {
      type: Boolean,
    },
  },
  methods: {
    handleCheckBoxAll() {
      // 1. Nếu cần checkAll
      if (this.checkboxAll) {
        this.$emit('checkAll')
      } else {
        this.$emit('checkboxItem', this.id)
      }
    },
  },
  computed: {
    /**
     * Kiểm tra xem có tooltip không?
     */
    hasTooltipFunc() {
      return this.hasTooltip;
    },
  },
};
</script>

<style scoped>
.base__checkbox > input {
  display: none;
}
.base__checkbox > label {
  box-sizing: border-box;
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #7c869c;
  cursor: pointer;
  border-radius: 4px;
}
.base__checkbox > label:hover {
  border-color: #2b4eee;
}
.base__checkbox > label::before {
  content: "";
  display: none;
}
input[type="checkbox"]:checked + label {
  display: flex;
  justify-content: center;
  color: #fff;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background: transparent url(../../assets/Resource/img/icon_collection.svg) no-repeat -176px -16px;
  border: none;
}
</style>