<template>
  <div id="header-component">
    <h1>(~(~(~(~(~_~)~)~(~_~)~)</h1>
    <navigation-menu></navigation-menu>
  </div>
</template>

<script>
import NavigationMenu from './MenuComponent';

export default {
  name: 'HeaderComponent',
  components: {
    NavigationMenu,
  },
};
</script>

<style scoped lang="scss">
@import './static/styles.scss';

  #header-component{
    width: 100%;
    height: 60px;
    position: fixed;
    background: $white;
    justify-content: space-between;

    h1{
      margin: 10px 0;
      padding: 0;
      font-size: 40px;
    }
  }


</style>
