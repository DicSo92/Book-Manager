<template>
    <ion-content fullscreen>
        <ion-list class="booksContainer">
            <transition-group name="list" tag="div">
                <book v-for="(book, i) in this.books"
                      v-on:delete="deleteBook"
                      :book="book"
                      :key="book.title">
                </book>
            </transition-group>
        </ion-list>

        <ion-fab vertical="bottom" horizontal="start" slot="fixed">
            <ion-fab-button color="dark">
                <ion-icon name="settings"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="end">
                <ion-fab-button color="medium">
                    <ion-icon name="refresh"></ion-icon>
                </ion-fab-button>
                <ion-fab-button color="dark" @click="shuffle">
                    <ion-icon name="shuffle"></ion-icon>
                </ion-fab-button>
            </ion-fab-list>
        </ion-fab>
    </ion-content>
</template>

<script>
    import BooksJson from '../../ressources/books.json'
    import book from '@/components/book.vue'

    export default {
        name: 'books',
        components : {
            book
        },
        data(){
          return{
              books: "",
          }
        },
        mounted() {
            if (!localStorage.getItem('books')) this.storeBooks(this.getBooks(BooksJson))
            this.books = JSON.parse(localStorage.getItem('books'))
        },
        computed: {
            getBooks: function (jBooks) {
                return JSON.stringify(jBooks)
            }
        },
        methods :{
            storeBooks(books) {
                localStorage.setItem('books', books)
            },
            deleteBook(id) {
                this.books.splice(this.books.findIndex(book => book.isbn === id), 1)
                this.storeBooks(this.getBooks(this.books))
            },
            shuffle() {
                this.books.sort((a, b) => Math.random() > .5 ? -1 : 1);
            },
        },
    }
</script>

<style scoped lang="scss">
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateX(-50px);
    }
    .list-leave-active {
        position: absolute;
        z-index: 10;
    }
    .list-move {
        transition: transform 0.5s;
    }
    .booksContainer {
        height: 100%;
    }
</style>
