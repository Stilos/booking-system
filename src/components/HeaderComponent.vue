<template>
  <div id="header-component">
    <h1>(~(~(~(~(~_~)~)~(~_~)~)</h1>
    <menu-component></menu-component>
  </div>
</template>

<script>
import MenuComponent from '@/components/MenuComponent';

export default {
  name: 'HeaderComponent',
  components: {
    MenuComponent,
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
