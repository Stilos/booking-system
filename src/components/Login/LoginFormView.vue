<template>
  <div id="login-form-view">
    <header-component></header-component>
    <login-form-component></login-form-component>
  </div>
</template>

<script>
  import HeaderComponent from '../Header/HeaderComponent';
  import LoginFormComponent from './LoginFormComponent';

  export default {
    name: 'LoginFormView',
    components: {
      HeaderComponent,
      LoginFormComponent,
    },
  };
</script>

<style lang="scss">
  #login-form-view{
    width: 100%;
    justify-content: center;
  }
</style>
