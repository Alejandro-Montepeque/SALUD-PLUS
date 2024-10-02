import { createRouter, createWebHistory } from "vue-router";

import Login from './views/Login.vue';
import Register from './views/Register.vue'
import Recovery from './views/RecoveryPassword.vue'

const routes = [
    {
        path: '/login',
        name:'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/recovery-password',
        name: 'Recovery',
        component: Recovery
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router