import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { AUTH_TOKEN } from '../apollo/vue-apollo';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        redirect: '/profile'
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

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (!to.meta.isPublic && !token) next({ name: 'login' });
    else next();
});

export default router;
