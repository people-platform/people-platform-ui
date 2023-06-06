import {createRouter, createWebHistory} from 'vue-router'
import WorkbenchMain from '../views/workbench/main.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/workbench',
            name: 'workbench',
            component: WorkbenchMain,
            children: [
                {
                    path: 'app',
                    name: 'workbench-app',
                    component: () => import('../views/workbench/app.vue')
                }
            ]
        }
    ]
})

export default router
