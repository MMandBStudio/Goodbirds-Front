import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Register from '@/components/Register';
import PageNotFound from '@/components/PageNotFound';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound,
        },
    ],
});
