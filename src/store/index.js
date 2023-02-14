import { createStore } from 'vuex'
import moduleA from './checkBoxChange'
import deleteLeads from './deleteLeads'
import showModal from './showModal'
// Tạo mới một store instance
const store = createStore({
    modules: {
        moduleA,
        deleteLeads,
        showModal,
    },
})

export default store