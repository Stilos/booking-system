import Vue from 'vue';
import Router from 'vue-router';

import LoginFormView from '@/components/Login/LoginFormView';

// import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginFormView',
      component: LoginFormView,
    },
  ],
});
