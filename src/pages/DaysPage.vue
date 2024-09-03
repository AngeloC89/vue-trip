<template>
    <Breadcrumb />
    <div class="container">
        <h1 class="text-center">Nome della Città selezionata</h1>
        <div class="row ">
            <div class="card" v-for="(item, index) in day" :key="item.city_id">

                <CardDay :item="item" />


            </div>

            <router-link id="addDay" :to="{ name: 'dayform' }">
                <div class="col-sm-4 debug d-flex justify-content-center align-items-center w-100 display-4 my-5">
                    <i class="fa-solid fa-plus  text-black"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '@/components/Breadcrumb.vue'
    import CardDay from '@/components/CardDay.vue';
    import axios from 'axios';

    import { store } from '../store.js';
    export default {
        name: 'DaysPage',
        components: {
            Breadcrumb,
            CardDay,
        },
        data() {
            return {
                store,
                day: [],
                cityId: '',

            }
        },
        methods: {
            getDays() {
                axios.get('http://127.0.0.1:8000/api/day/' + this.cityId)
                    .then((res) => {
                        this.day = res.data;
                        console.log(this.day);
                    });
            },
        },

        mounted() {
            this.cityId = this.$route.params.city_id
            this.getDays();
        },


    }
</script>

<style lang="scss" scoped>
    .debug {
        border: 1px solid red;
        height: 100px;
        width: calc(100% / 3 - 4px);
    }

    .row {

        gap: 6px;
    }

    button {
        height: 30px;
        width: 100px;
        background-color: yellow;
    }

    #daySquare,
    #addDay {
        text-decoration: none;
    }
</style>