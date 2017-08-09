<template>
  <div id="login-form-view" class="view-container">
    <login-form-component></login-form-component>
  </div>
</template>

<script>
  import LoginFormComponent from '@/components/LoginFormComponent';

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
