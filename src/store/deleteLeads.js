// Xóa 1 hay nhiều tiềm năng theo id

const deleteLeads = {
    state: () => ({
        leadsIDNeedDelete: [],
    }),
    mutations: {
        addItemLeadsID(state, id) {
            state.leadsIDNeedDelete.push(id)
        },
        removeItemLeadsID(state, id) {
            state.leadsIDNeedDelete = state.leadsIDNeedDelete.filter(
                leadID => leadID !== id
            )
        },
    },
    actions: {},
    getters: {},
}

export default deleteLeads