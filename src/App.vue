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

$blue: rgba(92, 158, 173, 1);
$purple: rgba(75, 63, 114, 1);
$yellow: rgba(255, 200, 87, 1);
$white: rgba(254, 250, 224, 1);
$lime: rgba(252, 246, 177, 1);

html,body{
  width: 100%;
  height:100%;
}

body{
  background: $lime;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

#app{
  display: flex;
}
</style>
