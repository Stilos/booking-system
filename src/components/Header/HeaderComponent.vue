<template>
  <div id="header-component">
    <h1>Booking</h1>
    <i class="fa fa-bars" aria-hidden="true"></i>
    <nav class="navigation-menu">
      <ul>
        <li>Menu Item</li>
        <li>Menu Item</li>
        <li>Menu Item</li>
        <li>Menu Item</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss">
@import './static/styles.scss';

  #header-component{
    width: 100%;
    height: 60px;
    position: fixed;
    background: $white;
    justify-content: space-between;


    i{
      font-size: 40px;
      margin-top: 10px;
      margin-right: 10px;
    }

    h1{
      margin: 10px 0;
      padding: 0;
      font-size: 40px;
    }

    .navigation-menu{
      display: none;
    }
  }


</style>
