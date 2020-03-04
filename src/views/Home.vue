<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Books Manager</ion-title>
      </ion-toolbar>
    </ion-header>

    <TheBookList></TheBookList>

    <FabButtons></FabButtons>
  </div>

</template>

<script>
  import TheBookList from '@/components/TheBookList.vue'
  import FabButtons from '@/components/FabButtons.vue'

  export default {

    name: 'Home',
    components:{
      TheBookList,
      FabButtons
    },
    methods: {

    },
  }

</script>

<style lang="scss">

</style>
