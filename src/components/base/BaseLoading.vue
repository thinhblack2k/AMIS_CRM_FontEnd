<template>
  <div class="loading" :class="{showloading : hasLoading}">
        <div class="loading__content">
            <div class="loading__icon"></div>
            <div class="loading__text">Đang xử lý</div>
        </div>
    </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "BaseLoading",
  props: {
    hasLoading: {
      style: Boolean,
      default: false,
    }
  },
  data() {
    return {
      // ...mapState(["isShowLoading"]),
    };
  },
  methods: {
    
  }
};
</script>
<style scoped>
.loading {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #4545459b;
    z-index: 1001;
}

.showloading {
  display: block;
}

.loading__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.loading__icon {
    box-sizing: content-box;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border-top: 8px solid #4262F0;
    border-left: 8px solid #4262F0;
    border-bottom: 8px solid #fff;
    border-right: 8px solid #fff;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 1s linear infinite;
}

.loading__text {
    color: #fff;
}

@-moz-keyframes spin {
    from {
        -moz-transform: rotate(0deg);
    }
    to {
        -moz-transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>