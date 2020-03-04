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
      <form @submit.prevent="addBook">
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Author Name *</ion-label>
          <ion-input type="text" name="author" @input="author = $event.target.value"></ion-input>
        </ion-item>
        <span class="error" v-if="this.authorError">Author is required</span>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Book Title *</ion-label>
          <ion-input type="text" name="title"></ion-input>
        </ion-item>
        <span class="error" v-if="this.titleError">Book title is required</span>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Description</ion-label>
          <ion-input type="text" name="description"></ion-input>
        </ion-item>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Images *</ion-label>
          <ion-input type="url" name="imageUrl"></ion-input>
        </ion-item>
        <span class="error" v-if="this.imageUrlError">Image is required</span>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Number of Pages</ion-label>
          <ion-input type="number" name="nbPages"></ion-input>
        </ion-item>
        <div class="ion-padding">
          <ion-button expand="block" color="secondary" type="submit">ADD</ion-button>
        </div>
      </form>
    </ion-content>

  </div>
</template>

<script>
  export default {
    name: 'modal',
    data () {
      return {
        author: '',
        title: '',
        description: '',
        imageUrl: '',
        nbPages: '',

        authorError: false,
        titleError: false,
        imageUrlError: false
      }
    },
    computed: {

    },
    methods : {
      status(validation) {
        return {
          error: validation.$error,
          dirty: validation.$dirty
        }
      },
      dismissModal(){
        this.$ionic.modalController.dismiss()
      },
      addBook() {
        if (this.author.length < 1) this.authorError = true
        if (this.title.length < 1) this.titleError = true
        if (this.imageUrl.length < 1) this.imageUrlError = true

        if (!this.author.length < 1 && !this.title.length < 1 && !this.imageUrl.length < 1) {
          this.$bus.$emit('addBook')
          this.$ionic.modalController.dismiss()
        }
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
  .error {
    color: crimson;
  }
</style>
