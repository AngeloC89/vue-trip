<template>
    <main class="my-4">
        <div class="container">
            <div class="row gap-1">
                <div class="col-sm-4 debug">
                    card for day
                </div>
                <div class="col-sm-4 debug">
                    card for day
                </div>
                <div class="col-sm-4 debug">
                    card for day
                </div>
                <div class="col-sm-4 debug">
                    card for day
                </div>
                <div class="col-sm-4 debug">
                    card for day
                </div>

            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'MainComponent',
    }
</script>

<style lang="scss" scoped>

    .debug {
        border: 1px solid red;
        height: 100px;
        width: calc(100% / 3 - 4px);

    }


</style>