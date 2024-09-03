<template>
  <HeaderComponent />
  <!-- in questa pagina troviamo tutte le citta -->
  <div class="row">
    <div
     v-for="(city, index) in store.city"
      :key="city.Id"
      id="CitySquare"    
      class="p-0 debug"    
    >
     <CardComponent :item="city"/>
    </div>

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
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import { store } from "../store.js";
import axios from "axios";
export default {
  name: "AppHome",
  components: {
     HeaderComponent,
     CardComponent,


  },
  data() {
    return {
      store,
      city: null,
    };
   
  },
  methods: {
    getCity(){
      axios.get('http://127.0.0.1:8000/api/city').then((res) => {
        this.store.city = res.data.results
        console.log(this.store.city);
      })
    },
  },
  mounted() {
      this.getCity()
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

#addCity {
  text-decoration: none;
}
</style>
