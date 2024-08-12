<template>
  <!-- in questa pagina troviamo tutte le citta -->
  <div class="row">
    <router-link
      id="CitySquare"
      :to="{ name: 'days', params: { id: city.Id } }"
      class="p-0 debug"
      v-for="(city, index) in city"
      :key="city.Id"
    >
      <div
        class="col-sm-4 w-100 debug d-flex justify-content-center align-items-center"
        :style="{
          backgroundImage: `url(${city.cover})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }"
      >
        <h3 class="text-center text-black">{{ city.City }}</h3>
      </div>
    </router-link>

    <!-- in questa riga aggiungiamo un pulsante cbhe serve per creare un nuovo evento -->
    <router-link id="addCity" :to="{ name: 'cityform' }" class="p-0 debug">
      <div
        class="col-sm-4 w-100 debug d-flex justify-content-center align-items-center display-1"
      >
        <i class="fa-solid fa-plus text-black"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { city } from "../City.js";
export default {
  name: "AppHome",
  data() {
    return {
      city,
    };
  },
};
</script>

<style lang="scss" scoped>
.debug {
  border: 1px solid red;
  height: 100px;
  width: calc(100% / 3 - 4px);
}

.row {
  gap: 6px;
}

#CitySquare, #addCity {
  text-decoration: none;
}
</style>
