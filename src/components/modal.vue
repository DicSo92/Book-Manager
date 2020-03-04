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
          <ion-input type="text" name="author" v-model="author" v-bind:value="author" @input="author = $event.target.value"></ion-input>
        </ion-item>
        <span class="error" v-if="this.authorError">Author is required</span>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Book Title *</ion-label>
          <ion-input type="text" name="title" v-bind:value="title" @input="title = $event.target.value"></ion-input>
        </ion-item>
        <span class="error" v-if="this.titleError">Book title is required</span>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Description</ion-label>
          <ion-textarea type="text" name="description" v-bind:value="description" @input="description = $event.target.value"></ion-textarea>
        </ion-item>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Images *</ion-label>
          <ion-input type="url" name="imageUrl" v-bind:value="imageUrl" @input="imageUrl = $event.target.value"></ion-input>
        </ion-item>
        <span class="error" v-if="this.imageUrlError">Image is required has Url</span>
        <ion-item class="ion-padding-horizontal">
          <ion-label position="floating">Number of Pages</ion-label>
          <ion-input type="number" name="nbPages" v-bind:value="nbPages" @input="nbPages = $event.target.value"></ion-input>
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
    props: {bookProps: {type: Object}},
    data () {
      return {
        author: '',
        title: '',
        description: '',
        imageUrl: '',
        nbPages: '',

        authorError: false,
        titleError: false,
        imageUrlError: false,
      }
    },
    mounted () {
      if (this.bookProps) {
        this.author = this.bookProps.author
        this.title = this.bookProps.title
        this.description = this.bookProps.shortDescription
        this.imageUrl = this.bookProps.thumbnailUrl
        this.nbPages = this.bookProps.pageCount
      }
    },
    computed: {

    },
    methods : {
      dismissModal(){
        this.$ionic.modalController.dismiss()
      },
      addBook() {
        if (this.author.length < 1) this.authorError = true
        if (this.title.length < 1) this.titleError = true
        if (this.imageUrl.length < 1) this.imageUrlError = true

        if (!this.author.length < 1 && !this.title.length < 1 && !this.imageUrl.length < 1) {
          if (this.bookProps) {
            let bookEdited = {
              title: this.title,
              isbn: this.bookProps.isbn,
              pageCount: this.nbPages,
              thumbnailUrl: this.imageUrl,
              shortDescription: this.description,
              author: this.author
            }
            this.$bus.$emit('bookEdited', bookEdited)
          } else {
            let newBook = {
              title: this.title,
              isbn: Date.now(),
              pageCount: this.nbPages,
              thumbnailUrl: this.imageUrl,
              shortDescription: this.description,
              author: this.author
            }
            this.$bus.$emit('addBook', newBook)
          }
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
