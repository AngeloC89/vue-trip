<template>
    <div class="row ">

        <router-link :to="{ name: 'details', params: { id: days.Id } }" class=" p-0 debug" v-for="(day, index) in days"
        :key="day.Id">
            <div class="col-sm-4 w-100 debug d-flex justify-content-center align-items-center">
    
    
                <h3 class="text-center text-black"> {{ day.Day }}</h3>
    
    
            </div>
        </router-link>
        <div class="col-sm-4 debug d-flex justify-content-center align-items-center w-100 display-4 my-5">
            <i class="fa-solid fa-plus  text-black"></i>
        </div>
    
    </div>
</template>

<script>
    import { days } from '../Days.js'
    export default {
        name: 'DaysPage',
        data() {
            return {
                days,
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

.row{

    gap: 6px;
}
</style>