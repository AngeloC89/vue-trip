<template>
    <div>
        <div id="daySquare">
            <div class="col-sm-4 w-100 h-100">
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

.debug {
    border: 1px solid red;
    height: 100px;
    width: calc(100% / 3 - 4px);
  }
</style>