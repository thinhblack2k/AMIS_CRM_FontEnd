<template>
  <div class="button-basic--wrap">
    <div class="button-basic">
      <div v-if="iconLeft" :class="iconLeft"></div>
      <div class="button-basic__content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonBasic',
  props: {
    // Nội dung của button
    content: {
      type: String,
      required: true,
    },
    // Đang hỗ trợ các giá trị
    // ['ic-choose-to-routing','ic-send-email','ic-chat-gray','ic-export','ic-share-right',icon-delete-look-red]
    iconLeft: {
      type: String,
    },
  },
}
</script>

<style scoped>
/* .button-basic--wrap:hover {
    background-color:red;
} */

.button-basic {
  
  display: flex;
  height: 32px;
  align-items: center;
  padding: 5px 16px;
  border-radius: 4px;
  background-clip: padding-box;
  background-color: #fff;
  color: #1f2229;
  font-size: 13px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  user-select: none;
  transition: all 0.3s ease-in-out;
  border: none !important;
  padding-left: 16px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
}
.button-basic:hover {
  background-color: #f0f2f4;
  border-color: #d3d7de;
  border-radius: 4px;
}

.button-basic__content {
  margin-left: 8px;
}
</style>