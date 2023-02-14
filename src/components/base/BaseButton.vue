<template>
  <div :class="{ disabled: isDisabled }">
    <button class="crm-button" :class="{ buttonoutlined: isOutLined }">
      <div class="crm-button__icon">
        <div :class="{ iconaddwhite: isIcon }"></div>
        <slot></slot>
      </div>
      <div v-if="isContent" class="crm-button__content">
        {{ buttonContent }}
      </div>
      <div v-if="hasDownWhite" class="crm-button__down">
        <div class="icon-down"></div>
      </div>
      <div v-if="hasDownBlack" class="crm-button__down">
        <div class="icon-dropdown"></div>
      </div>
    </button>
  </div>
</template>


<script>
export default {
  props: {
    //Thiết lập chiều rộng cho button
    width: {
      type: String,
    },
    //Thiết lập chiều cao cho  button
    height: {
      type: String,
      default: "32px",
    },
    // thiết lập nội dung button
    buttonContent: {
      type: String,
      required: true,
    },
    // thiết lập màu nền
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
    // thiết lập màu khi hover vào
    backgroundColorHover: {
      type: String,
      default: "#2B4EEE",
    },

    //màu của border giữa 2 nút
    borderColorOther: {
      type: String,
      default: "#fff",
    },

    //Thiết lập màu chữ
    color: {
      type: String,
      default: "#000",
    },
    //Thiết lập màu khi hover
    colorHover: {
      type: String,
      default: "#fff",
    },

    //thiết lập màu cho border
    borderColor: {
      type: String,
      default: "#fff",
    },

    // button có icon không
    hasIcon: {
      type: Boolean,
      default: false,
    },

    // button có nội dung không
    hasContent: {
      type: Boolean,
      default: true,
    },

    // button có dropdown trắng không
    hasDownWhite: {
      type: Boolean,
      default: false,
    },

    // button có dropdown đen không
    hasDownBlack: {
      type: Boolean,
      default: false,
    },

    // button có thuộc tính disabled không
    disabled: {
      type: Boolean,
      default: false,
    },

    // Có phải dạng button outlined không
    hasOutLined: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isIcon() {
      return this.hasIcon;
    },

    isDisabled() {
      return this.disabled;
    },

    isContent() {
      return this.hasContent;
    },

    isOutLined() {
      return this.hasOutLined;
    },
  },
};
</script>

<style scoped>
.crm-button {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border: 0;
  border-radius: 4px;
  color: v-bind(color);
  background-color: v-bind(backgroundColor);
  min-height: 32px;
  width: v-bind(width);
  height: v-bind(height);
}

.crm-button:hover {
  background-color: v-bind(backgroundColorHover);
  /* color: v-bind(colorHover); */
}

.crm-button__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
}

.crm-button__content {
  display: flex;
  padding-right: 16px;
}

.crm-button__down {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 8px;
  border-left: solid 1px v-bind(borderColorOther);
}

.buttonoutlined {
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  border-style: solid;
  border-width: 1px;
  border-color: v-bind(borderColor);
}

.disabled {
  background-color: rgba(66, 98, 240, 0.6);
  pointer-events: none;
}
</style>