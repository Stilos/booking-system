<template>
  <div id="app">
    <header-component></header-component>
    <router-view class="app-content-view" v-bind:class="[menuVisible ? 'menuOpened' : menuWasOpened ? 'menuClosed': '']" :key="menuVisible" ></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
  
  import EventBus from '@/bus/EventBus';
  import HeaderComponent from '@/components/HeaderComponent';
  import FooterComponent from '@/components/FooterComponent';

  export default {
    name: 'app',
    data() {
      return {
        menuVisible: false,
        menuWasOpened: false,
      };
    },
    components: {
      EventBus,
      HeaderComponent,
      FooterComponent,
    },
    created() {
      EventBus.$on('navigationMenu_toggle', this.toggleMenuFunction);
    },
    methods: {
      toggleMenuFunction() {
        this.menuVisible = !this.menuVisible;
        this.menuWasOpened = true;
      },
    },
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
    overflow: hidden;

    .view-container{
      width: 100%;
      margin-top: 60px;
      flex-direction: column;
    }
  }
  .app-content-view{
    transition: 1s all ease;
  }
  
  .app-content-view.menuOpened{
    animation: slide-in 1s forwards;
  }

 .app-content-view.menuClosed{
    animation: slide-out 1s;
  }

  @keyframes slide-in {
      0% { 
        margin-left: 0; 
        margin-right: 0;
      }
      100% { 
        margin-left: 50vw;
        margin-right: -50vw;
      }
  }

  @keyframes slide-out {
      0% { 
        margin-left: 50vw; 
        margin-right: -50vw;
      }
      100% { 
        margin-left: 0; 
        margin-right: 0;  
      }
  }

  @media screen and (min-width: 600px){
     @keyframes slide-in {
      0% { 
        margin-left: 0; 
        margin-right: 0;
      }
      100% { 
        margin-left: 30vw;
        margin-right: -30vw; 
      }
    }

    @keyframes slide-out {
      0% { 
        margin-left: 30vw; 
        margin-right: -30vw;
      }
      100% { 
        margin-left: 0; 
        margin-right: 0;  
      }
    }
  }

  @media screen and (min-width: 1024px){
     @keyframes slide-in {
      0% { 
        margin-left: 0; 
        margin-right: 0;
      }
      100% { 
        margin-left: 300px;
        margin-right: -300px; 
      }
    }

    @keyframes slide-out {
     0% { 
        margin-left: 300px; 
        margin-right: -300px;
      }
      100% { 
        margin-left: 0; 
        margin-right: 0;  
      }
    }
  }
</style>
