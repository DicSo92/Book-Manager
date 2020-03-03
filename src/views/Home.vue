<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Books Manager</ion-title>
      </ion-toolbar>
    </ion-header>

    <books></books>

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button size="large" color="warning" @click="openModal">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>

</template>

<script>
  import modal from '@/components/modal.vue'
  import books from '@/components/books.vue'


  export default {

    name: 'Home',
    components:{
      books
    },
    methods: {
      openModal() {
        return this.$ionic.modalController
                .create({
                  component: modal,
                })
                .then(m => m.present())
      },
    },
  }

</script>

<style lang="scss">

</style>
