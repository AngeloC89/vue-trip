import { createRouter, createWebHistory } from "vue-router";
import AppHome from "@/pages/AppHome.vue";
import Details from "@/pages/Details.vue";
import DaysPage from "@/pages/DaysPage.vue";


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
  ],
 
});

export { router };