<template>
    <div class="row gap-1">

    <router-link :to="{ name: 'days', params: { id: city.Id } }" class=" p-0 debug" v-for="(city, index) in city"
    :key="city.Id">
        <div class="col-sm-4 w-100 debug d-flex justify-content-center align-items-center"  :style="{
                backgroundImage: `url(${city.cover})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }">


            <h3 class="text-center text-black"> {{ city.City }}</h3>


        </div>
    </router-link>
    <div class="col-sm-4 debug d-flex justify-content-center align-items-center display-1">
        <i class="fa-solid fa-plus  text-black"></i>
    </div>

</div>


</template>

<script>
    import { city } from '../City.js'
    export default {
        name: 'AppHome',
        data() {
            return {
                city,
            }
        },

    }
</script>

<style lang="scss" scoped>

    .debug {
        border: 1px solid red;
        height: 100px;
        width: calc(100% / 3 - 4px);

    }
</style>