// Hiển thị hoặc ẩn modal và popup thông báo xóa tiềm năng
const showLoading = {
    state: () => ({
        isShowLoading: false,
    }),
    mutations: {
        showLoading(state) {
            state.isShowLoading = true
        },
        hiddenModal(state) {
            state.isShowLoading = false
        },
    },
    actions: {},
    getters: {},
}

export default showLoading