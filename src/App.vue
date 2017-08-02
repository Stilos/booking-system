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

body *{
  display: flex;
}

html,body{
  width: 100%;
  height:100%;
}

body{
  font-family: 'Arial';
  background: url('./assets/img/footer_lodyas.png');
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

#app{
  display: flex;
  width: 100%;
}
</style>
