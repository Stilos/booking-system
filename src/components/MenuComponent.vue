<template>
 
  <div id="navigation-menu">
    <button type="menu"  @click="toggleMenu" v-bind:class="{ 'menu-visible': menuVisible }">
      <transition 
        name="custom-classes-transition"
        :duration="500"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <i class="fa menu-trigger" v-bind:class="menuVisible ? 'fa-times' : 'fa-bars'" aria-hidden="true" :key="menuVisible"></i>
    </transition>
    </button>
    <transition-group 
    name="custom-classes-transition"
    enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutLeft">
      <button class="shutter" v-if="menuVisible" :key="1" @click="toggleMenu"></button>
      <nav class="menu-container"  v-if="menuVisible" :key="2">
        <ul>
          <li @click="navigateTo('/')">
            <i class="fa fa-home"></i>Home
          </li>
          <li @click="navigateTo('about')">
            <i class="fa fa-question"></i>About
          </li>
          <li @click="navigateTo('partners')">
            <i class="fa fa-users"></i>Partners
          </li>
          <li @click="navigateTo('contact')">
            <i class="fa fa-envelope-o"></i>Contact
          </li>
          <li @click="navigateTo('login')">
            <i class="fa fa-unlock-alt"></i>Login
          </li>
        </ul>
      </nav>
    </transition-group>
  </div>
</template>

<script>
import EventBus from '@/bus/EventBus';

export default {
  name: 'MenuComponent',
  data() {
    return {
      menuVisible: false,
    };
  },
  components: {
    EventBus,
  },
  methods: {
    toggleMenu() {
      const obj = event.target;
      obj.disabled = true;
      setTimeout(() => {
        obj.disabled = false;
      }, 900);
      this.menuVisible = !this.menuVisible;
      EventBus.$emit('navigationMenu_toggle');
    },
    navigateTo(route) {
      this.toggleMenu();
      this.$router.push(route);
    },
  },
};
</script>

<style scoped lang="scss">
  @import './static/styles.scss';

  button{
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    transition: color 1s ease;

    &.menu-visible{
      color: $orange;
    }
  }

  .shutter{
    width: 100%;
    height: 100%;
    background: rgba(126, 138, 162, .5);
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 998;
  }
  .menu-trigger{
    cursor: pointer;
    font-size: 40px;
    margin: 10px 10px 0 0;
    pointer-events: none;
  }
  .menu-container{
      position: fixed;
      left: 0;
      top: 60px;
      background: $light-gray;
      width: 50vw;
      height: 100%;
      z-index: 999;

      ul{
        flex-direction: column;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        align-items: center;

        li{
          padding: 25px;
          cursor: pointer;
          color: $white;
          font-size: 20px;
          transition: all .5s ease;
          justify-content: center;
          align-items: center;

          &:hover{
            color: $orange;
          }

          &:first-of-type{
            padding-top: 50px;
          }

          i{
            display: flex;
            font-size: 25px;
            margin-right: 10px;
          }
        }
      }
  }

  @media screen and (min-width: 600px){
    .menu-container{
      width: 30vw;
    }
  }
  @media screen and (min-width: 1024px){
    .menu-container{
      width: 300px;
    }
  }
</style>
