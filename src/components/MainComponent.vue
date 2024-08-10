<template>
    <main class="my-4">
        <div class="container">
            <div class="row gap-1">
                <div class="col-sm-4 debug d-flex justify-content-center align-items-center"
                    v-for="(city, index) in city" :key="city.id" :style="{
                        backgroundImage: `url(${city.cover})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }">
                    <h3 class="text-center text-black"> {{ city.City }}</h3>

                </div>
                <div class="col-sm-4 debug d-flex justify-content-center align-items-center display-1">
                    <i class="fa-solid fa-plus  text-black"></i>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { city } from '../City.js'
    export default {
        name: 'MainComponent',
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