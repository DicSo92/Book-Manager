<template>
    <ion-content fullscreen>
        <ion-list class="booksContainer">
            <transition-group name="list" tag="div">
                <BookItem v-for="(book, i) in filteredBooks"
                          v-on:delete="deleteBook"
                          :book="book"
                          :key="book.title">
                </BookItem>
            </transition-group>
        </ion-list>
    </ion-content>
</template>

<script>
    import BooksJson from '../../ressources/books.json'
    import BookItem from '@/components/BookItem.vue'

    export default {
        name: 'books',
        props: ["search"],
        components: {
            BookItem
        },
        data() {
            return {
                books: [],
            }
        },
        mounted() {
            if (!localStorage.getItem('books')) this.storeBooks(JSON.stringify(BooksJson))
            this.books = JSON.parse(localStorage.getItem('books'))

            this.$bus.$on('shuffle', () => {
                this.shuffle()
            })
            this.$bus.$on('refresh', () => {
                this.refresh()
            })
            this.$bus.$on('addBook', (newBook) => {
                this.addBook(newBook)
            })
            this.$bus.$on('bookEdited', (book) => {
                this.editBook(book)
            })
        },
        watch: {},
        computed: {
            filteredBooks() {
                return this.books.filter(book => {
                    return book.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        methods: {
            storeBooks(books) {
                localStorage.setItem('books', books)
                this.$store.commit('changeBooks', books)
            },
            deleteBook(id) {
                this.books.splice(this.books.findIndex(book => book.isbn === id), 1)
                this.storeBooks(JSON.stringify(this.books))
            },
            refresh() {
                this.storeBooks(JSON.stringify(BooksJson))
                this.books = JSON.parse(localStorage.getItem('books'))
            },
            shuffle() {
                this.books.sort((a, b) => Math.random() > .5 ? -1 : 1);
                this.storeBooks(JSON.stringify(this.books))
            },
            addBook(newBook) {
                this.books.unshift(newBook)
                this.storeBooks(JSON.stringify(this.books))
            },
            editBook(book) {
                this.books.splice(this.books.findIndex(bookI => bookI.isbn === book.isbn), 1, book)
                this.storeBooks(JSON.stringify(this.books))
            }
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
        /*z-index: 10;*/
    }

    .list-move {
        transition: transform 0.5s;
    }

    .booksContainer {
        height: 100%;
    }
</style>
