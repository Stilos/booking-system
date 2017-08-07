<template>
  <footer>
    <p>~-~-~-~-~-~</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang="scss">
@import './static/styles.scss';
  footer{
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: $gray;
    color: $white;
  }
</style>
