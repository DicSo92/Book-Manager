<template>
<!--    <transition name="fade" mode="out-in">-->
        <ion-item :key="book.isbn" class="transitionDiv">
            <ion-thumbnail slot="start">
                <img :src="book.thumbnailUrl">
            </ion-thumbnail>
            <ion-label>
                <h2>{{book.title}}</h2>
                <h3>{{book.author}}</h3>
                <p>{{book.shortDescription}}</p>
                <p>{{book.pageCount}} pages</p>
            </ion-label>
            <ion-button fill="solid" size="default" color="light" @click="presentAlertConfirm">
                <img src="https://p7.hiclipart.com/preview/178/524/917/computer-icons-black-and-white-trash-icon.jpg" class="trashIcon" alt="">
            </ion-button>
        </ion-item>
<!--    </transition>-->
</template>
<script>
    export default {
        name:"book",
        props :["book"],

        methods:{
            presentAlertConfirm () {
                return this.$ionic.alertController
                    .create({
                        header: 'Delete this book ?!',
                        message: 'Do you agree to <strong>deleting</strong> this book ?!',
                        buttons: [
                            {
                                text: 'Disagree',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: blah => {
                                    console.log('Confirm Cancel:', blah)
                                },
                            },
                            {
                                text: 'Agree',
                                handler: () => {
                                    console.log('Confirm Okay')
                                    this.deleteEmit()
                                },
                            },
                        ],
                    })
                    .then(a => a.present())
            },

            deleteEmit () {
               this.$emit('delete', this.book.isbn)
            }
        }
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: translateX(-50px) ;
    }
    .trashIcon {
        width: 15px;
        height: auto;
    }

    .transitionDiv {
        transition: all 0.5s;
    }
</style>
