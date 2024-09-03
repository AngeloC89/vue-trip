<template>
    <router-link id="CitySquare" :to="{ name: 'days', params: { city_id: item.id } }">
        <div class="col-sm-4 w-100 h-100 debug d-flex justify-content-center align-items-center" :style="{
            backgroundImage: `url(${item.image_cover})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }">
            <h3 class="text-center text-black">{{ item.name }}</h3>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['item']
    }
</script>

<style lang="scss" scoped>

#CitySquare, #addCity {
    text-decoration: none;
  }</style>