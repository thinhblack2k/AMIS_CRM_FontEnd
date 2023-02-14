<template>
  <div class="crm-textfield" :class="{ leftLabel: leftLabel, topLabel: topLabel }">
    <label :class="{ haveLabel: isHaveLabel }" :for="idInput">{{
      labelContent
    }}</label>
    <div class="absoluted">
      <div v-if="isIconSearchFunction" class="icon-search"></div>
      <div class="icon-success"></div>
      <input
        :class="{inputborder: isBorder, inputError: error, 'padding-left-32': isIconSearchFunction}"
        :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"
        :id="idInput"
        :type="typeInput"
        :placeholder="placeholder"
        :readonly="readOnly"
        :ref="InputFocus"
      />
    </div>
    <span v-if="error" class="error-msg">{{error}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props: {
    modelValue: String,
    // Chỉ định placeholder cho thẻ input
    placeholder: {
      type: String,
      required: true,
    },
    //id của thẻ input
    idInput: {
      type: String,
    },

    // Chỉ định attribute chỉ đọc cho thẻ input
    readOnly: {
      type: Boolean,
      default: false,
    },
    // Chỉ định nội dung thẻ label
    labelContent: {
      type: String,
    },
    // Label nằm ngang hàng với thẻ input
    leftLabel: {
      type: Boolean,
    },
    // Label nằm bên trên thẻ input
    topLabel: {
      type: Boolean,
    },
    // thêm icon tìm kiếm vào thẻ input
    isIconSearch: {
      type: Boolean,
    },
    // thiết lập chiều rộng cho input
    width: {
      type: String,
      default: "auto",
    },
    //Thiết lập màu nền cho input
    backgroundColor: {
      type: String,
      default: "rgb(240, 242, 244)",
    },
    backgroundColorHover: {
      type: String,
      default: "#fff",
    },
    //Có border không
    hasBorder: {
      type: Boolean,
      default: true,
    },
    borderColor: {
      type: String,
      default: "#d3d7de"
    },
    typeInput: {
      type: String,
      default: "search"
    },
    error: {
      type: String,
    },
    InputFocus: {
      type: String
    }
  },
  computed: {
    // Kiểm tra props truyền vào có label không ?
    isHaveLabel() {
      return this.labelContent ? true : false;
    },
    // Kiểm trả props truyền vào có icon search không ?
    isIconSearchFunction() {
      return this.isIconSearch ? true : false;
    },
    // Kiểm tra xem có border không
    isBorder() {
      return this.hasBorder ? true : false;
    },
  },
  methods: {
    
  }
};
</script>

<style scoped>
.crm-textfield {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}
.crm-textfield .topLabel {
  flex-direction: column;
}
.crm-textfield .leftLabel {
  align-items: center;
}
.crm-textfield input {
  height: 32px;
  padding: 6px 32px 6px 16px;
  border-radius: 4px;
  border: 0;
  outline: none;
  background-color: v-bind(backgroundColor);
  width: v-bind(width);
}
.crm-textfield input:hover {
  background-color: v-bind(backgroundColorHover);
}
.crm-textfield input:focus {
  border: 1px solid #4262f0;
}

.crm-textfield input {
  border: 1px solid v-bind(borderColor);
  border-radius: 4px;
}

.crm-textfield input[type="search"]::-webkit-search-cancel-button{
  -webkit-appearance: inherit;
  cursor: pointer;
  height: 16px;
  width: 16px;
  border-radius: 50em;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -80px -16px;
  opacity: 0;
  right: 3px;
  position: absolute;
}
.crm-textfield input[type="search"]::-webkit-search-cancel-button {
  opacity: 1;
  pointer-events: all;
}

.crm-textfield input[type="search"]::-webkit-search-cancel-button:hover {
  background-color: #d3d7de;
}

/* .inputborder {
  border: solid 1px v-bind(borderColor);
  border-radius: 4px;
} */
.crm-textfield input::placeholder {
  font-size: 13px;
}

.crm-textfield:hover {
  border-color: #7c869c;
}
.crm-textfield input[readonly] {
  background-color: #e2e4e9;
}

.crm-textfield input[readonly]::placeholder {
  color: #586074;
}

.crm-textfield input[readonly]:focus {
  border: 1px solid #d3d7de;
}

.crm-textfield input[readonly]:hover {
  border: 1px solid #d3d7de;
}

.crm-textfield label {
  display: none;
}

.leftLabel label.haveLabel {
  margin-right: 16px;
  display: initial;
}

.topLabel label.haveLabel {
  margin-bottom: 8px;
  display: initial;
}

.absoluted {
  position: relative;
  width: 100%;
}

.icon-search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
}
.padding-left-32 {
  padding-left: 32px !important;
}

.error-msg {
  box-sizing: border-box;
  color: red;
  margin-left: 10px;
  height: 28px;
  padding-top: 8px;
  font-size: 13px;
  font-family: Regular;
  display: block;
}


.error > input {
  border-color: #ec4141;
}

.error .error-msg {
  display: initial;
}

.success input {
  border-color: #31b491 !important;
}

.icon-success {
  display: none;
}

.success .icon-success {
  display: block;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}
.inputError {
  border-color: #ec4141 !important;
}
.inputError:focus {
  border-color: #ec4141 !important;
}
.inputError:hover {
  border-color: #ec4141 !important;
}
</style>
