<template>
  <div class="crm-combobox">
    <input type="text" class="input combobox__input" v-model="text" />
    <button class="button combobox__button" @click="btnSelectDataOnClick">
      <i class="icon-dropdown"></i>
    </button>
    <div v-show="showListData" combobox__data>
      <div
        class="combobox__item"
        v-for="item in data"
        :key="item[this.propValue]"
        value="{{item[this.propValue]}}"
        @click="itemOnSelect(item)"
      >
        {{ item[this.propText] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCombobox",
  props: {
    url: String,
    propValue: String,
    propText: String,
  },
  methods: {
    btnSelectDataOnClick() {
      this.showListData = !this.showListData;
    },

    itemOnSelect(item) {
      this.text = item[this.propText];
      this.showListData = false;
    },
  },
  created() {
    //Thực hiện lấy dữ liệu từ API:
    fetch(this.url)
      .then((res) => res.json())
      .then((res) => {
        this.data = res;
      })
      .catch((res) => {
        console.log(res);
      });
  },

  data() {
    return {
        showListData: false,
    };
  },
};
</script>

<style scoped>
.input {
  box-sizing: border-box;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #bbbbbb;
  padding-left: 16px;
}
</style>