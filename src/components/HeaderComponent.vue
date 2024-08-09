<template>
    <header>
        <div class="text-center m-3 d-flex flex-column  justify-content-center align-items-center ">
            <h1>Posti Da Vedere</h1>
            <select class="form-select w-25" aria-label="Default select example"  v-model="done"
                name="done">
                <option value="">Tutti</option>
                <option value="true">Visti</option>
                <option value="false">Da vedere</option>
            </select>
        </div>
    </header>
</template>

<script>

    export default {
        name: 'HeaderComponent',
        data() {
            return {
            
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>