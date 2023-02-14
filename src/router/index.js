//import router
import { createRouter, createWebHistory } from "vue-router"
import PotentialPage from "../components/pages/PotentialPage.vue";
import AddPage from "../components/pages/AddPage.vue";
import EditLead from "../components/pages/EditPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: PotentialPage},
        { path: "/AddPage", component: AddPage},
        { path: '/EditLead/:id', component: EditLead},
    ],
})

export default router