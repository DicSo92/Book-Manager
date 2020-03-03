<template>
  <div class="modal">
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Add Book</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="dismissModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" fullscreen>
      <form>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Author Name *</ion-label>
          <ion-input type="text" name="title"></ion-input>
        </ion-item>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Book Title *</ion-label>
          <ion-input  name="author"></ion-input>
        </ion-item>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Description</ion-label>
          <ion-input  name="author"></ion-input>
        </ion-item>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Images *</ion-label>
          <ion-input  name="author"></ion-input>
        </ion-item>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Pages</ion-label>
          <ion-input  name="author"></ion-input>
        </ion-item>
        <div class="ion-padding">
          <ion-button expand="block" color="secondary">ADD</ion-button>
        </div>
      </form>
    </ion-content>

  </div>
</template>

<script>
export default {
  name: 'modal',

  methods :{
    dismissModal(){
      this.$ionic.modalController.dismiss()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
