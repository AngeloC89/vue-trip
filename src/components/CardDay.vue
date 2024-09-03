<template>
    <div>
        <div id="daySquare">
            <div class="col-sm-4 w-100 h-100 debug d-flex justify-content-center align-items-center" :style="{
                backgroundColor: 'yellow',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }">
                <h3 class="text-center text-black">{{ item.day_name }}</h3>
            </div>
        </div>

       

    </div>
</template>

<script>

    export default {
        name: 'CardDay',
        props: ['item'],
       
    }
</script>

<style lang="scss" scoped>

</style>