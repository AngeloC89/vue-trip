import { createRouter, createWebHistory } from "vue-router";
import AppHome from "@/pages/AppHome.vue";
import Details from "@/pages/Details.vue";
import DaysPage from "@/pages/DaysPage.vue";
import CityForm from "@/pages/CityForm.vue";
import DayForm from "@/pages/DayForm.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome, 
    },
    {
      path: "/days/:id",
      name: "days",
      component: DaysPage, 
    },
    {
      path: "/details/:id",
      name: "details",
      component: Details,
    },
    {
      path: "/cityform",
      name: "cityform",
      component: CityForm,
    },
    {
      path: "/dayform",
      name: "dayform",
      component: DayForm,
    }
  ],
 
});

export { router };