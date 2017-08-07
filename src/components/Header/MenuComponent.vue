<template>
 
  <div id="navigation-menu">
    <i class="fa fa-bars menu-trigger" aria-hidden="true" @click="toggleMenu"></i>
    <transition 
    name="custom-classes-transition"
    enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutLeft">
      <nav class="menu-container"  v-if="menuVisible">
        <ul>
          <li><i class="fa fa-home"></i>Home</li>
          <li><i class="fa fa-question"></i>About</li>
          <li><i class="fa fa-users"></i>Partners</li>
          <li><i class="fa fa-envelope-o"></i>Contact</li>
          <li><i class="fa fa-unlock-alt"></i>Login</li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
import EventBus from '../../bus/EventBus';

export default {
  name: 'navigationMenu',
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
      this.menuVisible = !this.menuVisible;
      EventBus.$emit('navigationMenu_toggle');
    },
  },
};
</script>

<style scoped lang="scss">
  @import './static/styles.scss';

  .menu-trigger{
    cursor: pointer;
    font-size: 40px;
    margin: 10px 10px 0 0;
    
  }
  .menu-container{
      position: fixed;
      left: 0;
      top: 60px;
      background: $light-gray;
      width: 50vw;
      height: 100%;

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
