<template>
    <div class="FabButtons">
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button size="large" color="warning" @click="openModal">
                <ion-icon name="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
        <ion-fab vertical="bottom" horizontal="start" slot="fixed">
            <ion-fab-button color="dark">
                <ion-icon name="settings"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="end">
                <ion-fab-button color="medium"  @click="refresh">
                    <ion-icon name="refresh"></ion-icon>
                </ion-fab-button>
                <ion-fab-button color="dark" @click="shuffle">
                    <ion-icon name="shuffle"></ion-icon>
                </ion-fab-button>
            </ion-fab-list>
        </ion-fab>
    </div>

</template>

<script>
    import modal from '@/components/modal.vue'
    export default {
        name: 'FabButtons',
        data(){
            return{
                books: "",
            }
        },
        mounted() {

        },
        computed: {

        },
        methods :{
            openModal() {
                return this.$ionic.modalController
                    .create({
                        component: modal,
                    })
                    .then(m => m.present())
            },
            refresh() {
                this.$bus.$emit('refresh')
            },
            shuffle() {
                this.$bus.$emit('shuffle')
            },
        },
    }
</script>

<style scoped lang="scss">

</style>
