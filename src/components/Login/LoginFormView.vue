<template>
  <div id="login-form-view">
    <login-form-component></login-form-component>
  </div>
</template>

<script>
  import LoginFormComponent from './LoginFormComponent';

  export default {
    name: 'LoginFormView',
    components: {
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
