<template>
    <main class="my-4">
       
        <div class="container" >
            <router-view></router-view>
        </div>

        
    </main>
</template>

<script>
import AppHome from '@/pages/AppHome.vue';
import { city } from '../City.js';
import DaysPage from '@/pages/DaysPage.vue';
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

   


</style>