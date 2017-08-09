<template>
<div id='partners-view' class="view-container">
  <h1>Partners</h1>
  <partners-component></partners-component>
</div>
</template>

<script>
  import PartnersComponent from '@/components/PartnersComponent';

  export default {
    name: 'PartnersView',
    components: {
      PartnersComponent,
    },
  };
</script>

<style lang="scss">
@import './static/styles.scss';

#partners-view{
  align-items: center;
  color: $white;
}
  
</style>
