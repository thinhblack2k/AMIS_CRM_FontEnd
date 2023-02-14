<template>
  <div class="checkbox__item">
    <BaseCheckbox :id="uuidv4()" v-on:click="handleCheckBoxItem"/>
    <label>{{ contentLabel }}</label>
     <BaseTooltip height="32px" class="show__tooltip"
      v-show="hasTooltipFunc"
      :contentTooltip="contentTooltip"/>
  </div>
</template>

<script>
import BaseCheckbox from "./BaseCheckbox.vue";
import uuidv4 from '../../constants/checkbox-id'
import BaseTooltip from "./BaseTooltip.vue";
import BaseTextField from "./BaseTextField.vue";
import { ref } from "vue";
export default {
  props: {
    hasTooltip:{
      type: Boolean,
      default: false
    },
     contentTooltip: {
      type: String,
      default: "this is default of tooltip",
    },
    contentLabel: {
      type: String,
      default: "",
    },
  },
   setup() {
    return {
      uuidv4,ref
    };
  },
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    /**
     * Kiểm tra xem có tooltip không?
     */
    hasTooltipFunc() {
      return this.hasTooltip;
    },},
  methods: {
    handleCheckBoxItem() {
        this.checked = true
      //  let value = this.$refs.txtInput;
      // console.log(value)
      // document.getElementById('focusMe').focus();

    }
  },
  components: { BaseCheckbox, BaseTooltip, BaseTextField, BaseDropDOWN },
};
</script>

<style scoped>
.checkbox__item{
  position: relative;
}
.checkbox__item:hover .show__tooltip{
  display:flex;
  position: absolute;
  top: 40px; left: 65px;
}
</style>