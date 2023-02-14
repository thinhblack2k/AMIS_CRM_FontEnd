<template>
  <div class="crm-popup" :hidden="!this.$store.state.showModal.isShowModal">
    <div class="popup__container">
      <div class="popup__header">
        <div class="popup__title">{{ popupTitle }}</div>
        <div class="popup__center"></div>
        <div class="popup__close"><div class="icon-close"></div></div>
      </div>
      <div class="popup__content">
        {{ popupContent }}
      </div>
      <div class="popup__footer">
        <div class="popup__center"></div>
        <div class="popup__button">
          <BaseButton
            buttonContent="Hủy"
            @click="hiddenModal"
            :hasIcon="false"
            backgroundColor="#e2e4e9"
            backgroundColorHover="#d3d7de"
            color="#1f2229"
            width="64px"
          />
        </div>
        <div class="popup__button">
          <BaseButton
            buttonContent="Đồng ý"
            :hasIcon="false"
            backgroundColor="#ec4243"
            backgroundColorHover="#ea2e2e"
            color="#fff"
            @click="onClickDelete"
          />
        </div>
      </div>
    </div>
  </div>
  <BaseToastMessage
      toastContent="Xóa thành công"
      backgroundColor="#31B491"
      :hasShow="isShow"
    >
      <div class="icon-accept"></div>
    </BaseToastMessage>
</template>
<script>
import BaseButton from "./BaseButton.vue";
import BaseToastMessage from "./BaseToastMessage.vue"
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  props: {
    id: String,
    popupContent: {
      type: String,
      default: "nội dung thông báo",
    },
    popupTitle: {
      type: String,
      default: "Thông báo",
    },
  },
  components: { 
    BaseButton,
    BaseToastMessage,
  },
  methods: {
    ...mapMutations(["showModal", "hiddenModal", "unSelectedCheckBox"]),

    /**
     * hàm xác nhận xóa
     * Author: DHTHINH (16/08/2022)
    */
    onClickDelete() {
      try {
        axios
          .delete(`http://localhost:53822/api/v1/Leads/${this.id}`)
          .then(() => {
            // Hiển thị toast message thêm mới thành công
            this.$emit("updateData");
            // Ẩn model xác nhận xóa đi
            this.hiddenModal();
            this.unSelectedCheckBox();
            setTimeout(() => {
              this.isShow = true;
            }, 100)
            this.isShow = false;
          })
          .catch(function (err) {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
    btnDeletePopup() {
      this.$emit("popupDelete");
    },
    btnCancelPopup() {
      this.$emit("cancelPopup");
    },
  },
  data() {
    return {
      ...mapState(["isShowModal"]),
      isShow: false,
    };
  },
};
</script>
<style>
.crm-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.16);
  z-index: 1000 !important;
}

.popup__container {
  display: flex;
  flex-direction: column;
  position: fixed;
  min-width: 432px;
  height: auto;
  position: absolute;
  background-color: #ffffff;
  top: 24%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  box-shadow: 10px 10px 8px rgba(31, 34, 41, 0.16);
}

.popup__header {
  margin-top: 16px;
  height: 19px;
  display: flex;
  padding: 0 16px;
}

.popup__title {
  color: #1f2229;
  font-family: Regular;
  font-weight: bold;
}

.popup__center {
  flex: 1;
}

.popup__close {
  width: 16px;
  height: 16px;
}

.popup__content {
  padding: 0 16px;
  margin-top: 16px;
}

.popup__footer {
  display: flex;
  padding: 0 16px;
  margin-bottom: 16px;
  margin-top: 16px;
}

.popup__button {
  margin-left: 8px;
}
</style>