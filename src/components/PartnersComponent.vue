<template>
  <div id="partners-component">
    <section class="partner" v-for="partner in partnersArray" :key="partner.id">
      <img :src="'/assets/img/' + partner.img">
      <h2>{{ partner.name }}</h2>
      <p>{{ partner.text }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PartnersComponent',
  data() {
    return {
      baseUrl: window.location.origin,
      partnersArray: [
        { name: 'a', id: 'a', text: 'aaaaaa', img: '1.png' },
        { name: 's', id: 's', text: 'ssssss', img: '2.jpg' },
        { name: 'd', id: 'd', text: 'dddddd', img: '3.png' },
        { name: 'f', id: 'f', text: 'ffffff', img: '4.png' },
        { name: 'a', id: 'a', text: 'aaaaaa', img: '1.png' },
        { name: 's', id: 's', text: 'ssssss', img: '4.png' },
        { name: 'd', id: 'd', text: 'dddddd', img: '3.png' },
        { name: 'f', id: 'f', text: 'ffffff', img: '2.jpg' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import './static/styles.scss';

  #partners-component{
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1500px;
  }

  .partner{
    width: 80%;
    max-width: 300px;
    height: 400px;
    margin: 10px;
    background: $white;
    color: $dark-blue;
    font-weight: bold;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover{
      box-shadow: 0 0 0px 10px $white;
    }
  }

  @media screen and(min-width: 600px){
    .partner{
      width: 45%;
    }
  }

  @media screen and(min-width: 900px){
    .partner{
      width: 30%;
    }
  }

  @media screen and(min-width: 1200px){
    .partner{
      width: 20%;
    }
  }
  
</style>
