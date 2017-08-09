import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '@/views/HomeView';
import AboutView from '@/views/AboutView';
import PartnersView from '@/views/PartnersView';
import ContactView from '@/views/ContactView';
import LoginFormView from '@/views/LoginFormView';

// import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/partners',
      name: 'partners',
      component: PartnersView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginFormView,
    },
  ],
});
