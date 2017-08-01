<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import './static/styles.scss';

html,body{
  width: 100%;
  height:100%;
}

body{
  background: url('./assets/img/vertical-waves.png');
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

#app{
  display: flex;
}
</style>
