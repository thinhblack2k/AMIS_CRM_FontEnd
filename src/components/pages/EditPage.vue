<template>
  <div class="function set-height">
    <div class="function__left">
      <h1 class="function__title" style="margin-right: 16px">Sửa tiềm năng</h1>
      <div class="function__edit" style="padding-top: 4px">Sửa bố cục</div>
    </div>
    <div class="layout__center"></div>
    <div class="function__right">
      <router-link class="link-router" to="/">
        <BaseButton
          class="mgr-8"
          :hasContent="true"
          buttonContent="Hủy bỏ"
          color="#000"
          backgroundColor="#fff"
          backgroundColorHover="#f0f2f4"
          borderColor="#d3d7de"
          :hasOutLined="true"
        />
      </router-link>
      <BaseButton
        class="mgr-8"
        :hasContent="true"
        buttonContent="Lưu và thêm"
        color="#4262F0"
        :hasOutLined="true"
        backgroundColor="#fff"
        borderColor="#4262F0"
        backgroundColorHover="#f0f2f4"
        @click="btnSaveAndAdd"
      />
      <BaseButton
        class="mgr-8"
        :hasContent="true"
        buttonContent="Lưu"
        color="#fff"
        backgroundColor="#4262F0"
        :hasOutLined="false"
        @click="btnSave"
      />
    </div>
  </div>
  <div class="potential-content">
    <div class="image-potential">
      <div class="image__title">Ảnh tiềm năng</div>
      <div class="image__content">
        <div class="icon__avatar"></div>
      </div>
    </div>
    <div class="main__potential">
      <div class="main__title">Thông tin chung</div>
      <div class="main__content">
        <div class="content__col" style="margin-right: 80px">
          <div class="content__row">
            <div class="content__title">Xưng hô</div>
            <div class="content__input">
              <BaseDropDownMenu
                ref="SalutationName"
                :propText="text"
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                :arrays="ListVocative"
                color="#1f2229"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">
              Tên <span style="color: red"> *</span>
            </div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                ref="FirstName"
                :error="error['FirstName']"
                v-model="FirstName"
                idInput="txtFirstName"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Phòng ban</div>
            <BaseDropDownMenu
              ref="DepartmentName"
              dropdownContent="-Không chọn-"
              :hasInputSearch="true"
              :arrays="ListDepartment"
              color="#1f2229"
            />
          </div>
          <div class="content__row">
            <div class="content__title">ĐT di động</div>
            <div class="content__input">
              <BaseTextField
                ref="Mobile"
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                idInput="txtMobile"
                v-model="Mobile"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Email cơ quan</div>
            <div class="content__input">
              <BaseTextField
                ref="OfficeEmail"
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                idInput="txtOfficeEmail"
                v-model="OfficeEmail"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Mã số thuế</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                ref="TaxCode"
                idInput="txtTaxCode"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Nguồn gốc</div>
            <div class="content__input">
              <BaseDropDownMenu
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
                ref="LeadSourceName"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Zalo</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                ref="Zalo"
                idInput="txtZalo"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Phân loại Khách hàng</div>
            <div class="content__input">
              <BaseDropDownMenu
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
                ref="LeadTypeName"
                idInput="txtLeadTypeName"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Loại học bổng</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Điểm HSKK</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Điểm HSK</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title" style="padding-bottom: 45px">
              Chia sẻ cá nhân
            </div>
            <div class="content__input">
              <BaseTextArea placeholder="" />
            </div>
          </div>
        </div>
        <div class="content__col">
          <div class="content__row">
            <div class="content__title">Họ và tên</div>
            <div class="content__input">
              <BaseTextField
                ref="FullName"
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                :readOnly="true"
                :modelValue="LastName + Space + FirstName"
                idInput="txtFullName"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Họ và đệm</div>
            <div class="content__input">
              <BaseTextField
                ref="LastName"
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                v-model="LastName"
                idInput="txtLastName"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Chức danh</div>
            <div class="content__input">
              <BaseDropDownMenu
                ref="TitleName"
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">ĐT cơ quan</div>
            <div class="content__input">
              <BaseTextField
                ref="OfficeMobile"
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                idInput="txtOfficeMobile"
                v-model="OfficeMobile"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Email cá nhân</div>
            <div class="content__input">
              <BaseTextField
                ref="Email"
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                :error="error['Email']"
                idInput="txtEmail"
                v-model="Email"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Tổ chức</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                ref="CompanyName"
                idInput="txtCompanyName"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Mã ngân sách</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Quy mô</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Học vấn hiện tại</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Trường học</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Hình thức mong muốn</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title" style="padding-bottom: 45px">Hồ sơ</div>
            <div class="content__input">
              <BaseTextArea placeholder="" />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Thời gian dự định du học</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">
              Test chuyển đổi <span style="color: red"> *</span>
            </div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                idInput="TestChange"
                ref="TestChange"
                :error="error['TestChange']"
                v-model="TestChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__potential">
      <div class="main__title">Thông tin tổ chức</div>
      <div class="main__content">
        <div class="content__col" style="margin-right: 80px">
          <div class="content__row">
            <div class="content__title">Tài khoản ngân hàng</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                :typeInput="date"
                ref="BankAccount"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Ngày thành lập</div>
            <div class="content__input">
              <BaseDatePicker backgroundColor="#fff" ref="EstablishDay" />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Lĩnh vực</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                ref="SectorName"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Doanh thu/ Ngân sách</div>
            <div class="content__input">
              <BaseDropDownMenu
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
                ref="AnnualRevenueName"
              />
            </div>
          </div>
        </div>
        <div class="content__col">
          <div class="content__row">
            <div class="content__title">Mở tại ngân hàng</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                ref="BankName"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Loại hình</div>
            <div class="content__input">
              <BaseDropDownMenu
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
                ref="BusinessTypeName"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Ngành nghề</div>
            <div class="content__input">
              <BaseDropDownMenu
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
                ref="IndustryName"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__potential">
      <div class="main__title">Thông tin địa chỉ</div>
      <div class="main__content">
        <div class="content__col" style="margin-right: 80px">
          <div class="content__row">
            <div class="content__title">Quốc gia</div>
            <div class="content__input">
              <BaseDropDownMenu
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Quận/huyện</div>
            <div class="content__input">
              <BaseDropDownMenu
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Số nhà, Đường phố</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                ref="Address"
                :error="error.address"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title" style="padding-bottom: 45px">
              Địa chỉ
            </div>
            <div class="content__input">
              <BaseTextArea textContent="" placeholder="" />
            </div>
          </div>
        </div>
        <div class="content__col">
          <div class="content__row">
            <div class="content__title">Tỉnh/Thành phố</div>
            <div class="content__input">
              <BaseDropDownMenu
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Phường/Xã</div>
            <div class="content__input">
              <BaseDropDownMenu
                dropdownContent="-Không chọn-"
                :hasInputSearch="true"
                color="#1f2229"
              />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Mã vùng</div>
            <div class="content__input">
              <BaseTextField
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__potential">
      <div class="main__title">Thông tin mô tả</div>
      <div class="main__content">
        <div class="content__col">
          <div class="content__row">
            <div class="content__title" style="padding-bottom: 45px">Mô tả</div>
            <div class="content__input">
              <BaseTextArea textContent="" placeholder="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__potential">
      <div class="main__title">Thông tin hệ thống</div>
      <div class="main__content">
        <div class="content__col">
          <div class="content__row">
            <div class="content__title">Dùng chung</div>
            <div class="content__input">
              <BaseCheckbox filterContent="" />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Mã tiềm năng</div>
            <div class="content__input">
              <BaseTextField
                placeholder="Mã tự sinh"
                backgroundColor="#fff"
                :hasBorder="true"
                width="100%"
                ref="LeadCode"
                idInput="txtLeadCode"
                v-model="LeadCode"
              />
            </div>
          </div>
        </div>
        <div class="content__col"></div>
      </div>
    </div>
    <BasePopup :hasShowPopup="false" popupContent="" />
  </div>
  <BaseToastMessage
    toastContent="Sửa thành công"
    backgroundColor="#31B491"
    :hasShow="isShowMessenger"
  >
    <div class="icon-accept"></div>
  </BaseToastMessage>
</template>

<script>
import { ref } from "vue";
import LIST_DEPARTMENT from "../../constants/ContentDropdown/ListDepartment";
import LIST_VOCATIVE from "../../constants/ContentDropdown/ListVocative";
import BaseButton from "../base/BaseButton.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";
import BaseDatePicker from "../base/BaseDatePicker.vue";
import BaseDropDownMenu from "../base/BaseDropDownMenu.vue";
import BaseTextArea from "../base/BaseTextArea.vue";
import BaseTextField from "../base/BaseTextField.vue";
import BasePopup from "../base/BasePopup.vue";
import axios from "axios";

export default {
  name: "TheFunction",
  components: {
    BaseButton,
    BaseDropDownMenu,
    BaseTextField,
    BaseTextArea,
    BaseDatePicker,
    BaseCheckbox,
    BasePopup,
  },
  data() {
    return {
      LeadID: "",
      LeadCode: "",
      FirstName: "",
      LastName: "",
      Email: "",
      OfficeEmail: "",
      Mobile: "",
      OfficeMobile: "",
      CompanyName: "",
      SalutationName: "",
      TitleName: "",
      TestChange: "",
      error: {
        FirstName: "",
        LastName: "",
        Email: "",
        OfficeEmail: "",
        LeadCode: "",
        TestChange: "",
      },
      Space: " ",
      isShowMessenger: false,
    };
  },
  created() {
    this.leadID = this.$route.params.id;
    axios
      .get(`http://localhost:53822/api/v1/Leads/${this.leadID}`)
      .then((res) => {
        this.lead = res.data;
        console.log(this.lead);
        this.LeadID = this.lead.LeadID;
        this.LeadCode = this.lead.LeadCode;
        this.FirstName = this.lead.FirstName;
        this.LastName = this.lead.LastName;
        this.Mobile = this.lead.Mobile;
        this.OfficeMobile = this.lead.Mobile;
        this.Email = this.lead.Email;
        this.OfficeEmail = this.lead.OfficeEmail;
        this.CompanyName = this.lead.CompanyName;
        this.$refs.SalutationName.text = this.lead.SalutationName;
        this.$refs.TitleName.text = this.lead.TitleName;
        this.$refs.DepartmentName.text = this.lead.DepartmentName;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  setup() {
    const ListVocative = ref(LIST_VOCATIVE);
    const ListDepartment = ref(LIST_DEPARTMENT);

    return {
      ListVocative,
      ListDepartment,
    };
  },
  /**
   * created (setup)
   */
  methods: {
    /**
     * Hàm khi nhấn vào nút thêm mới tiền năng
     * Author : DHTHINH(12/08/2022)
     */
    btnSaveAndAdd() {
      this.leadID = this.$route.params.id;
      let isValid = this.vailidateForm();
      console.log(this.$refs.SalutationName);
      if (isValid == true) {
        try {
          //lấy thông tin thêm mới
          let lastName = this.LastName;
          let firstName = this.FirstName;
          let leadCode = this.LeadCode;
          let phoneNumber = this.Mobile;
          let officeMobile = this.OfficeMobile;
          let email = this.Email;
          let SalutationName = this.$refs.SalutationName.text;
          if (SalutationName == "- Không chọn -") {
            SalutationName = "";
          }
          let DepartmentName = this.$refs.DepartmentName.text;
          if (DepartmentName == "- Không chọn -") {
            DepartmentName = "";
          }
          let TitleName = this.$refs.TitleName.text;
          if (TitleName == "- Không chọn -") {
            TitleName = "";
          }
          
          // Tạo object chứa các thông tin thêm mới
          let lead = {
            LeadCode: leadCode,
            FirstName: firstName,
            LastName: lastName,
            LeadName: firstName,
            Mobile: phoneNumber,
            OfficeMobile: officeMobile,
            Email: email,
            SalutationName: SalutationName,
            DepartmentName: DepartmentName,
            TitleName: TitleName,
          };

          var _this = this;
          this.isShowMessenger = false;
          _this.isLoading = true;
          // Gọi Api thêm mới tiềm năng
          axios
            .put(`http://localhost:53822/api/v1/Leads/${this.leadID}`, lead)
            .then(function () {
              // Hiển thị toast message thêm mới thành công
              setTimeout(() => {
                _this.isLoading = false;
              }, 500);
              setTimeout(() => {
                _this.isShowMessenger = true;
              }, 500);
              // clear dữ liệu
              _this.clearContent();
              _this.$router.push({ path: `/AddPage` });
              //Gọi API lấy mã tiềm năng mới
              console.log(_this.setLeadCode());
              
            })
            .catch(function (err) {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Thêm mới không thành công");
      }
    },

    /**
     * Khi click vào nút Lưu sẽ thêm mới tiềm năng và chuyển ra màn hình chính
     * Author: DHTHINH(18/08/2022)
     */
    btnSave() {
      this.leadID = this.$route.params.id;
      let isValid = this.vailidateForm();
      console.log(this.$refs.SalutationName);
      if (isValid == true) {
        try {
          //lấy thông tin thêm mới
          let lastName = this.LastName;
          let firstName = this.FirstName;
          let leadCode = this.LeadCode;
          let phoneNumber = this.Mobile;
          let officeMobile = this.OfficeMobile;
          let email = this.Email;
          let SalutationName = this.$refs.SalutationName.text;
          if (SalutationName == "- Không chọn -") {
            SalutationName = "";
          }
          let DepartmentName = this.$refs.DepartmentName.text;
          if (DepartmentName == "- Không chọn -") {
            DepartmentName = "";
          }
          let TitleName = this.$refs.TitleName.text;
          if (TitleName == "- Không chọn -") {
            TitleName = "";
          }
          
          // Tạo object chứa các thông tin thêm mới
          let lead = {
            LeadCode: leadCode,
            FirstName: firstName,
            LastName: lastName,
            LeadName: firstName,
            Mobile: phoneNumber,
            OfficeMobile: officeMobile,
            Email: email,
            SalutationName: SalutationName,
            DepartmentName: DepartmentName,
            TitleName: TitleName,
          };

          var _this = this;
          this.isShowMessenger = false;
          _this.isLoading = true;
          // Gọi Api thêm mới tiềm năng
          axios
            .put(`http://localhost:53822/api/v1/Leads/${this.leadID}`, lead)
            .then(function () {
              // Hiển thị toast message sửa thành công
              setTimeout(() => {
                _this.isLoading = false;
              }, 500);
              setTimeout(() => {
                _this.isShowMessenger = true;
              }, 500);
              // clear dữ liệu
              _this.clearContent();
              _this.$router.push({ path: `/` });
              //Gọi API lấy mã tiềm năng mới
              console.log(_this.setLeadCode());
              
            })
            .catch(function (err) {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Thêm mới không thành công");
      }
    },

    /**
     * Hàm xóa thông tin cũ trên các thẻ
     * Author: DHTHINH (24/08/2022)
     */
    clearContent() {
      let _this = this;
      _this.FirstName = "";
      _this.LastName = "";
      _this.Email = "";
      _this.OfficeEmail = "";
      _this.LeadCode = "";
      _this.TestChange = "";
      _this.Mobile = "";
      _this.OfficeMobile = "";
    },

    /**
     * Validate thông tin thêm mới
     * Author : DHTHINH(15/08/2022)
     */
    vailidateForm() {
      let isValid = true;
      //Build object thông tin nhân viên
      let Lead = {};
      Lead["FirstName"] = this.FirstName;
      Lead["TestChange"] = this.TestChange;

      //Validate những thông tin không được phép để trống thì hiện cảnh báo lỗi:
      for (const key in Lead) {
        if (key == "FirstName" || key == "TestChange") {
          if (Lead[key] == "" || Lead[key] == null) {
            this.error[key] = "Thông tin này không được phép để trống";
            isValid = false;
          } else {
            this.error[key] = "";
            isValid = true;
          }
        }
      }

      return isValid;
    },
    /**
     * Hàm gọi api lấy ra mã tiềm năng mới
     * Author: DHTHINH (15/08/2022)
     */
    setLeadCode() {
      try {
        var _this = this;
        axios
          .get("http://localhost:53822/api/v1/Leads/NewLeadCode")
          .then(function (res) {
            console.log(res);
            _this.LeadCode = res.data;
          })
          .catch(function (err) {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.set-height {
  height: 62px;
}

.potential-content {
  padding: 38px 0 0;
  grid-column-start: 1;
  grid-column-end: 5;
  font-family: Roboto;
  overflow-y: auto;
  height: calc(100vh - 125px);
}

.image-potential {
  margin: 0px 56px 40px 56px;
}

.image__title {
  margin-bottom: 16px;
  font-size: 18px;
}

.image__content {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 48px;
  height: 48px;
  background-color: #f0f2f4;
  border-radius: 50%;
  margin: 16px 0 40px 0;
}

.icon__avatar {
  content: "";
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: -50%;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -144px -848px;
}
.icon__avatar:hover {
  display: inline-block;
  width: 40px;
  height: 40px;

  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -200px -808px;
}

.main__potential {
  margin-bottom: 20px;
}

.main__title {
  margin: 0 56px 4px;
  font-size: 18px;
}

.main__content {
  display: flex;
  flex-direction: row;
  padding: 8px 56px;
}

.content__col {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.content__row {
  display: flex;
  padding: 4px 0;
  margin: 2px 0px;
  align-items: center;
}

.content__title {
  width: 160px;
  font-size: 13px;
  flex-shrink: 0;
  color: #454545;
  font-weight: 400;
}

.content__input {
  width: 100%;
}
</style>