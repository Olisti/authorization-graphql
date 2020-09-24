import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@views/login/_index.vue'),
        meta: {
            isPublic: true
        }
    },
    {
        path: '/profile',
        name: 'profile-info',
        // TIP: используем ленивую загрузку маршрутов
        component: () => import(/* webpackChunkName: "profile-info" */ '@views/profile-info/_index.vue'),
        meta: {
            title: 'Your profile'
        }
    },
    {
        path: '/profile/edit',
        name: 'profile-edit',
        component: () => import(/* webpackChunkName: "profile-edit" */ '@views/profile-edit/_index.vue'),
        meta: {
            title: 'Profile edit'
        }
    },
    {
        path: '*',
        name: 'not-found',
        component: () => import(/* webpackChunkName: "not-found" */ '@views/not-found/_index.vue'),
        meta: {
            title: 'Page not found'
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
