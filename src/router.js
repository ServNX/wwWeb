import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import(/* webpackChunkName: "browse" */ './views/Browse.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () => import(/* webpackChunkName: "community" */ './views/Community.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
