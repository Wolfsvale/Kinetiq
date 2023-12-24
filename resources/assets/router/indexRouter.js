import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../vue/modules/tracker/displayTracker.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../vue/modules/tracker/displayTracker.vue')
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
