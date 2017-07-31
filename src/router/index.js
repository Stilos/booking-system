import Vue from 'vue';
import Router from 'vue-router';

import LoginWiev from '@/components/Login/LoginView';

// import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginWiev',
      component: LoginWiev,
    },
  ],
});
