<template>
    <Breadcrumb />
    <div class="container w-100 row p-0 debug">
        <img class="col-sm-4" src="" alt="">
    
    </div>
    
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';

   

    export default {
        name: 'Details',
        components: { Breadcrumb },
        data() {
            return {
               
            
            }
        },
        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>

.debug {
    border: 1px solid red;
    height: 100px;
    width: calc(100% / 3 - 4px);

}

img{
    height: 200px;

}




</style>