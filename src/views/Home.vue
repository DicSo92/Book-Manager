<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Books Manager</ion-title>
      </ion-toolbar>
      <ion-toolbar class="ion-text-start">
        <ion-searchbar animated position="start"
                       v-bind:value="search"
                       @input="search = $event.target.value">
        </ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <TheBookList :search="search"></TheBookList>

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
    data () {
      return {
        search: ''
      }
    },
    methods: {

    },
  }

</script>

<style lang="scss">

</style>
