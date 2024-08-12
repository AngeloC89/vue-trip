<template>
    <div id="breadcrumb">
        <div id="home">
            <h3>Home</h3>
        </div>
        <div id="day">
            <h3>Day</h3>
        </div>
        <div id="details">
            <h3>Details</h3>
        </div>


    </div>
</template>

<script>
    export default {

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

    #home, #day, #details {
        height: 100px;
        color: rgb(255, 255, 255);
        margin: 0px 30px;
        display: flex;
        justify-content: center;
        align-items: center

    }

</style>