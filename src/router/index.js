import Vue from 'vue';
import Router from 'vue-router';

import LoginFormComponent from '@/components/Login/LoginFormComponent';

// import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginFormComponent',
      component: LoginFormComponent,
    },
  ],
});
