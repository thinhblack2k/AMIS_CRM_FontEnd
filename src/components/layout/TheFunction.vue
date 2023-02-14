<template>
  <!-- Menu 1 -->
  <div v-if="!changeUI" class="function">
    <div class="function__left">
      <h1 class="function__title mgr-8">Tiềm năng của tôi</h1>
      <div class="icon icon-dropdown" style="cursor: pointer"></div>
      <div class="function__edit">Sửa</div>
      <div class="icon-refresh"></div>
    </div>
    <div class="layout__center"></div>
    <div class="function__right">
      <BaseTextField
        style="margin-right: 10px"
        placeholder="Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, Mã số thuế"
        :isIconSearch="true"
        width="240px"
        backgroundColor="#fff"
        backgroundColorHover="#fff"
        :hasBorder="true"
        borderColor="#d3d7de"
        data-tooltip-left="Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, Mã số thuế"
      />
      <router-link to="/AddPage" class="link-router">
        <BaseButton
          class="mgr-8"
          buttonContent="Thêm"
          backgroundColor="#4262F0"
          color="#fff"
          :hasIcon="true"
          :hasDownWhite="true"
        />
      </router-link>
      <BaseButton
        class="mgr-8"
        backgroundColor="#fff"
        backgroundColorHover="#f0f2f4"
        borderColor="#d3d7de"
        :hasContent="false"
        width="36px"
        :hasOutLined="true"
      >
        <div class="icon-future"></div>
      </BaseButton>
      <BaseButton
        class="mgr-8"
        backgroundColor="#fff"
        backgroundColorHover="#f0f2f4"
        :hasContent="false"
        borderColor="#d3d7de"
        :hasOutLined="true"
      >
        <div class="icon-threecol" style="margin-right: 4px"></div>
        <div class="icon-dropdown"></div>
      </BaseButton>
    </div>
  </div>

  <!-- Menu 2 -->
  <div v-if="changeUI" class="function">
    <div class="layout__center">
      <div class="total-choose">Đã chọn 1</div>
      <div
        class="function__edit"
        style="margin-right: 16px"
        @click="onClickUnchecked"
      >
        Bỏ chọn
      </div>
      <BaseButton
        :hasIcon="false"
        buttonContent="Gắn thẻ"
        :hasOutLined="true"
        :hasDownBlack="true"
        borderColorOther="#d3d7de"
        borderColor="#d3d7de"
        backgroundColorHover="#f0f2f4"
        class="mgr-8"
        ><div class="icon-tag"></div
      ></BaseButton>
      <BaseButton
        :hasIcon="false"
        buttonContent="Cập nhật thông tin"
        :hasOutLined="true"
        borderColorOther="#d3d7de"
        borderColor="#d3d7de"
        backgroundColorHover="#f0f2f4"
        class="mgr-8"
        ><div class="icon-pen"></div
      ></BaseButton>
      <BaseButton
        :hasIcon="false"
        buttonContent="Chọn chiến dịch"
        :hasOutLined="true"
        borderColorOther="#d3d7de"
        borderColor="#d3d7de"
        backgroundColorHover="#f0f2f4"
        class="mgr-8"
        ><div class="icon-chooset"></div
      ></BaseButton>
      <BaseButton
        :hasIcon="false"
        buttonContent="Chuyển đổi"
        :hasOutLined="true"
        borderColorOther="#d3d7de"
        borderColor="#d3d7de"
        backgroundColorHover="#f0f2f4"
        class="mgr-8"
        ><div class="icon-exchange-multi"></div
      ></BaseButton>
      <div class="show-menu" @click="onClickShowMenu">
        <button class="button-more"></button>
        <div :hidden="!showMore" class="show-more__lists">
          <div class="show-more__item">
            <ButtonBasic
              content="Xuất khẩu"
              iconLeft="ic-export"
              @click="exportExcel"
            />
            <ButtonBasic
              @click="showModal"
              content="Xóa"
              iconLeft="icon-delete-look-red"
            />
          </div>
          <div class="show-more__item"></div>
          <div class="show-more__item"></div>
        </div>
      </div>
    </div>
    <div class="function__right">
      <BaseTextField
        style="margin-right: 10px"
        placeholder="Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, Mã số thuế"
        :isIconSearch="true"
        width="240px"
        backgroundColor="#fff"
        backgroundColorHover="#fff"
        :hasBorder="true"
        borderColor="#d3d7de"
        data-tooltip-left="Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, Mã số thuế"
      />
    </div>
  </div>
  <BaseToastMessage
    toastContent="Tính năng này tạm thời không hoạt động"
    backgroundColor="#F07D42"
    :hasShow="isShow"
  >
    <div class="icon-warning"></div>
  </BaseToastMessage>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
import ButtonBasic from "../base/ButtonBasic.vue";
import BaseTextField from "../base/BaseTextField.vue";
import { URL_LEADS_API } from "@/constants/url";
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import BaseToastMessage from "../base/BaseToastMessage.vue";

export default {
  name: "TheFunction",
  components: {
    BaseButton,
    BaseTextField,
    ButtonBasic,
    BaseToastMessage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    let showMore = false;
    return {
      showMore,
      ...mapState(["changeCheckBox", "leadsIDNeedDelete", "isShowModal"]),
      isShow: false,
    };
  },

  computed: {
    /**
     * Nếu 1 trong các hàng dữ liệu được chọn thì phần chức năng sẽ thay đổi giao diện
     * Author: DHTHINH (25/08/2022)
     */
    changeUI() {
      return this.$store.state.moduleA.changeCheckBox;
    },
  },
  methods: {
    ...mapMutations(["showModal", "hiddenModal", "unSelectedCheckBox"]),

    /**
     * Hàm bỏ chọn tất cả
     * Author: DHTHINH (20/08/2022)
     */
    onClickUnchecked() {
      let _this = this;
      _this.unSelectedCheckBox();
    },

    /**
     * Hiển thị thêm các chức năng tại button có kí hiệu 3 chấm
     * Author: DHTHINH (17/08/2022)
     */
    onClickShowMenu() {
      this.showMore = !this.showMore;
    },
    /**
     * hàm delete dữ liệu lên api
     * Author: DHTHINH (17/08/2022)
     */
    async deleteLeadsByID(listID) {
      const response = await fetch(URL_LEADS_API, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(listID),
      });
      return response.json();
    },

    /**
     * hàm export excel
     * Author: DHTHINH (17/08/2022)
     */
    exportExcel() {
      let _this = this;
        _this.isShow = false;
        setTimeout(() => {
          _this.isShow = true;
        }, 100);
        axios({
          url: "http://localhost:53822/api/v1/Export",
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "DSKhachHangTiemNang.xlsx");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    },
  },
};
</script>

<style>
.function {
  display: flex;
  background-color: #e2e4e9;
  align-items: center;
  border-bottom: 1px solid #d3d7de;
  z-index: 10;
  height: 56px;
  position: sticky;
  top: 84px;
}

.function {
  width: 100%;
  z-index: 20;
}

.function__left {
  display: flex;
  align-items: center;
}

.function__title {
  cursor: pointer;
  margin-left: 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.428571429;
  color: #1f2229;
  font-family: Bold;
}

.function__edit {
  cursor: pointer;
  margin-left: 16px;
  color: #5973eb;
  font-size: 13px;
}

.layout__center {
  flex: 1;
  display: flex;
  align-items: center;
}

.function__right {
  display: flex;
  margin-right: 8px;
}

.link-router {
  text-decoration: none;
}

.total-choose {
  font-size: 13px;
  margin-left: 16px;
}

.show-menu {
  margin-right: 8px;
  position: relative;
}

.show-more__lists {
  padding: 8px 0;
  position: absolute;
  transform-origin: left top;
  max-width: 280px;
  overflow: auto;
  border-radius: 4px;
  outline: 0;
  max-height: calc(100vh - 48px);
  min-width: 79px !important;
  min-height: 48px !important;
  box-shadow: 0 2px 6px #00000052;
  background: #fff;
}
.button-more {
  width: 36px;
  text-transform: none !important;
  font-weight: 500 !important;
  border: 1px solid #d3d7de !important;
  min-width: 34px;
  height: 32px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #e2e4e9;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  color: #1f2229;
  font-size: 13px;
  line-height: 13px;
  font-family: Regular;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  position: relative;
  -ms-box-sizing: border;
  -o-box-sizing: border;
  box-sizing: border;
}

.button-more:hover {
  background-color: #f0f2f4;
}

.button-more::before {
  content: "";
  width: 16px;
  height: 16px;
  display: inline-block;
  background: transparent url("../../assets/Resource/img/icon_collection.svg")
    no-repeat -48px 0;
}
</style>