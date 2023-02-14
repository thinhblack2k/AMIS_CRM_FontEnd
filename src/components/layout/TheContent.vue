<template>
  <div class="content">
    <div class="main-content">
      <div class="sticky-table">
        <table>
          <thead>
            <tr>
              <th>
                <div class="sticky-setting">
                  <div title="Tùy chỉnh cột" class="sticky-setting-column">
                    <span class="icon-add-column"></span>
                  </div>
                </div>
              </th>
              <th class="text-align-right">
                <BaseCheckbox
                  checkboxAll
                  :checked="this.isCheckAll"
                  @checkAll="handleCheckAll"
                  id="iconCheckAll"
                />
              </th>
              <th class="text-align-left" :style="{ minWidth: '150px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Thẻ
              </th>
              <th class="text-align-left" :style="{ minWidth: '100px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Xưng hô
              </th>
              <th class="text-align-left" :style="{ minWidth: '180px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Họ và tên
              </th>
              <th class="text-align-left" :style="{ minWidth: '120px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Chức danh
              </th>
              <th class="text-align-left" :style="{ minWidth: '150px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                ĐT di động
              </th>
              <th class="text-align-left" :style="{ minWidth: '150px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                ĐT cơ quan
              </th>
              <th class="text-align-left" :style="{ minWidth: '180px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Email cơ quan
              </th>
              <th class="text-align-left" :style="{ minWidth: '180px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Email cá nhân
              </th>
              <th class="text-align-left" :style="{ minWidth: '300px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Tổ chức
              </th>
              <th class="text-align-left" :style="{ minWidth: '200px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Địa chỉ
              </th>
              <th class="text-align-left" :style="{ minWidth: '120px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Tỉnh/Thành phố
              </th>
              <th class="text-align-left" :style="{ minWidth: '120px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Quận/Huyện
              </th>
              <th class="text-align-left" :style="{ minWidth: '150px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Phường/Xã
              </th>
              <th class="text-align-left" :style="{ minWidth: '200px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Nguồn gốc
              </th>
              <th class="text-align-left" :style="{ minWidth: '180px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Loại hình
              </th>
              <th class="text-align-left" :style="{ minWidth: '180px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Lĩnh vực
              </th>
              <th class="text-align-left" :style="{ minWidth: '200px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Mô tả
              </th>
              <th class="text-align-left" :style="{ minWidth: '220px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Chủ sở hữu
              </th>
              <th class="text-align-left" :style="{ minWidth: '180px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Doanh thu
              </th>
              <th class="text-align-left" :style="{ minWidth: '120px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Dùng chung
              </th>
              <th class="text-align-left" :style="{ minWidth: '120px' }">
                <div class="table-filter" data-tooltip-center="sắp xếp">
                  <div class="icon-grid"></div>
                </div>
                Zalo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              ref="row"
              v-for="lead in this.leadData"
              :key="lead.LeadSourceID"
              :class="{ 'row-checked': lead.checked }"
              @dblclick="dounbleClickOnTableRow(lead.LeadID)"
              @click="clickOnRow(lead.LeadID)"
            >
              <td>
                <div class="row-edit">
                  <div class="icon-pen" @click="clickOpenEdit(lead.LeadID)"></div>
                </div>
              </td>
              <td>
                <BaseCheckbox
                  :checked="lead.checked"
                  :id="lead.LeadID"
                  @checkboxItem="handleCheckBoxItem"
                />
              </td>
              <td class="text-align-left"></td>
              <td class="text-align-left">{{ lead.SalutationName || "-" }}</td>
              <td class="text-align-left text--blue">
                <a href="#">{{ lead.LastName + " " + lead.FirstName }}</a>
              </td>
              <td class="text-align-left">{{ lead.TitleName || "-" }}</td>
              <td class="text-align-left text--blue">
                <div class="text--icon">
                  <div v-if="lead.Mobile" class="icon-telephone"></div>
                  <div>
                    <a href="#">{{ lead.Mobile || "-" }}</a>
                  </div>
                </div>
              </td>
              <td class="text-align-left text--blue">
                <div class="text--icon">
                  <div v-if="lead.OfficeMobile" class="icon-telephone"></div>
                  <div>
                    <a href="#">{{ lead.OfficeMobile || "-" }}</a>
                  </div>
                </div>
              </td>
              <td class="text-align-left text--blue">
                <a href="#">{{ lead.Email || "-" }}</a>
              </td>
              <td class="text-align-left text--blue">
                <a href="#">{{ lead.OfficeEmail || "-" }}</a>
              </td>
              <td class="text-align-left">{{ lead.CompanyName || "-" }}</td>
              <td class="text-align-left">{{ lead.Address || "-" }}</td>
              <td class="text-align-left">{{ lead.ProvinceName || "-" }}</td>
              <td class="text-align-left">{{ lead.DistrictName || "-" }}</td>
              <td class="text-align-left">{{ lead.WardName || "-" }}</td>
              <td class="text-align-left">{{ lead.LeadSourceName || "-" }}</td>
              <td class="text-align-left">
                {{ lead.BusinessTypeName || "-" }}
              </td>
              <td class="text-align-left">{{ lead.SectorName || "-" }}</td>
              <td class="text-align-left">{{ lead.Description || "-" }}</td>
              <td class="text-align-left">{{ lead.CreatedBy || "-" }}</td>
              <td class="text-align-left">
                {{ lead.AnnualRevenueName || "-" }}
              </td>
              <td class="text-align-left">{{ lead.IsPublic || "-" }}</td>
              <td class="text-align-left">{{ lead.Zalo || "-" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="navigate">
      <div class="navigate__left">
        <div class="ic-sort-setting border-icon">
          <div class="icon-sortsetting"></div>
        </div>
        Tổng số: <span class="text--bold" style="margin-left: 8px"> {{totalLead}}</span>
      </div>
      <div class="navigate__right">
        <div class="page__size">
          <BaseDropDown
            :arrays="PAGESIZE"
            dropdownContent="20 Bản ghi trên trang"
          />
        </div>
        <div class="page__list">
          <div class="page__item">
            <div class="icon-pre2"></div>
          </div>
          <div class="page__item">
            <div class="icon-pre1"></div>
          </div>
          <div class="navigate__text" style="font-weight: 500">
            <span class="text--bold">1</span>
            <span style="padding: 0 8px">đến</span>
            <span class="text--bold">20</span>
          </div>
          <div class="page__item">
            <div class="icon-next1"></div>
          </div>
          <div class="page__item">
            <div class="icon-next2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BaseLoading :hasLoading="isLoading"/>
  <BasePopup
    :id="leadSelected"
    @updateData="loadData()"
    popupContent="Bạn có chắc chắn muốn xóa Tiềm năng này không?"
  />
</template>

<script>
import PAGESIZE from "../../constants/PageSize";
import BaseDropDown from "../base/BaseDropDownMenu.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";
import { mapState, mapMutations } from "vuex";
import BasePopup from "../base/BasePopup.vue";
import BaseLoading from "../base/BaseLoading.vue"

export default {
  name: "TheContent",
  components: {
    BaseDropDown,
    BaseCheckbox,
    BasePopup,
    BaseLoading
  },

  props: {},
  //http://localhost:5245/api/v1/Leads
  //https://cukcuk.manhnv.net/api/v1/Employees
  created() {
    this.loadData();
  },
  data() {
    let leadData = [];

    return {
      total: 0,
      leads: null,
      leadData,
      leadSelected: "",
      PAGESIZE,
      isLoading: false,
      totalLead: 0,
      ...mapState(["changeCheckBox", "leadsIDNeedDelete"]),
    };
  },
  methods: {
    loadData() {
      /**
       * Hàm lấy dữ liệu tiềm năng từ api
       */
      let leadsData;

      const getLeadsData = async () => {
        try {
          this.isLoading = true;
          leadsData = await (
            await fetch("http://localhost:53822/api/v1/Leads", {
              method: "GET",
            })
          ).json();
          setTimeout(() => {
          this.isLoading = false;
          }, 1000);
          this.totalLead = leadsData.length;
          return leadsData;
        } catch (error) {
          console.log(error);
          this.isLoading = false;
        }
      };

      /**
       * Gọi hàm lấy dữ liệu và gán trường checked cho từng tiềm năng
       * Author: DHTHINH 10/08/2022
       */

      const asyncMounted = async () => {
        this.leadData = await getLeadsData();

        this.leadData = this.leadData?.map((lead) => {
          return {
            ...lead,
            checked: false,
          };
        });
      };
      asyncMounted();
    },

    /**
     * Sự kiện tích toàn bộ các hàng
     * Author: DHTHINH 10/08/2022
     */
    handleCheckAll() {
      this.isCheckAll = !this.isCheckAll;
      if (this.isCheckAll) {
        // Đánh dấu đã tích vào ít nhất một hàng tiềm năng
        this.selectedCheckBox();
        this.leadData = this.leadData.map((lead) => ({
          ...lead,
          checked: true,
        }));
      } else {
        // Đánh dấu là chưa tích vào hàng dữ liệu nào
        this.unSelectedCheckBox();
        this.leadData = this.leadData.map((lead) => ({
          ...lead,
          checked: false,
        }));
      }
    },
    /**
     * Sự kiện tích vào từng ô trên mỗi hàng
     * Author: DHTHINH (25/08/2022)
     */
    handleCheckBoxItem(idCheckbox) {
      // Chỉ số checkbox
      let index = -1;
      this.leadData = this.leadData.map((lead, i) => {
        if (lead.LeadID === idCheckbox) {
          index = i;
          return { ...lead, checked: !lead.checked };
        }
        return { ...lead };
      });
      if (this.leadData.every((lead) => lead.checked === false)) {
        // Đánh dấu là chưa tích vào hàng dữ liệu nào
        this.unSelectedCheckBox();
      }
      if (this.leadData[index].checked) {
        // Đánh dấu đã tích vào ít nhất một hàng tiềm năng
        this.selectedCheckBox();
        // Thêm id của tiềm năng cần xóa
        this.addItemLeadsID(idCheckbox);
      } else {
        // Xóa id tiềm năng khỏi danh sách cần xóa
        this.removeItemLeadsID(idCheckbox);
      }
    },
    /**
     *  Sự kiện double click vào các hàng dữ liệu thì chuyển qua chi tiết tiềm năng
     *  Author: DHTHINH (25/08/2022)
     */
    dounbleClickOnTableRow() {
      // this.$router.push({ path: `/lead/view/${leadID}` });
      // this.leadSelected = leadID;
      // alert("Tính năng này đang phát triển xin vui lòng sử dụng lại sau");
    },
    clickOnRow(leadID) {
      this.leadSelected = leadID;
      console.log(this.leadSelected);
    },
    /**
     * Lấy ra các phương thức global trong store
     */
    ...mapMutations([
      "selectedCheckBox",
      "unSelectedCheckBox",
      "addItemLeadsID",
      "removeItemLeadsID",
    ]),

    /**
     * Mở trang sửa tiềm năng
     * Author: DHTHINH (20/08/2022)
     */
    clickOpenEdit(leadID) {
      this.$router.push({ path: `/EditLead/${leadID}`});
      this.leadSelected = leadID;
    }
  },
};
</script>

<style>
@import url(../../style/table.css);
@import url(../../style/navigate.css);

.content {
  flex: 1;
  position: relative;
}
/* Track */
table::-webkit-scrollbar-track {
  margin-top: 40px;
}

/* Khi thay đổi trạng thái checked từng hàng của table */
tr.row-checked {
  background-color: #fdefe7;
}
tr.row-checked:hover {
  background-color: #fbded0 !important;
}

tr.row-checked td:nth-child(2),
tr.row-checked td:first-child {
  background-color: #fdefe7 !important;
}

tr.row-checked:hover td:nth-child(2),
tr.row-checked:hover td:first-child {
  background-color: #fbded0 !important;
}

.border-icon {
  cursor: pointer;
  position: relative;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.border-icon:hover {
  background-color: #f0f2f4;
}
</style>