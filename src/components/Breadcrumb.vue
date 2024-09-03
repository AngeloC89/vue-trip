<template>
    <div id="breadcrumb">
        <!-- pulsante per tornare alla home -->
        <router-link id="home" :to="{ name: 'home' }">
            <div class="breadcrumb-item">
                <i class="fa-solid fa-house"></i>
            </div>
        </router-link>
        <!-- pulsante per tornare alla pagina dei giorni -->
        <router-link id="day" :to="{ name: 'days' }">
            <div class="breadcrumb-item">
                <i class="fa-solid fa-calendar-days"></i>
            </div>
        </router-link>

        <div id="details" class="breadcrumb-item" v-if="this.$route.name === 'details'">
            <i class="fa-solid fa-gear"></i>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
    export default {
        name: 'Breadcrumb',
        data() {
            return {
                store,
                current:''
                

            }
        },
        methods: {
            

        },
        computed: {
            IdCurrent() {
            const id = this.$route.params.id
                this.current = id
            }
        },
        mounted() {
          
         
           
        },

    }
</script>

<style lang="scss" scoped>
    #breadcrumb {
        height: 100px;
        width: 100%;
        display: flex;
        background-color: black;
        margin-bottom: 50px;
    }

    #home,
    #day,
    #details {
        height: 100px;
        width: 100%;
        color: rgb(255, 255, 255);
        font-size: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 3px solid white;
    }




</style>