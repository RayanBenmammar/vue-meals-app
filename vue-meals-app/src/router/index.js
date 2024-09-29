import DefaultLayout from "@/views/DefaultLayout.vue";
import Home from "@/views/Home.vue";
import MealsByLetter from "@/views/MealsByLetter.vue";
import MealsByName from "@/views/MealsByName.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default-layout",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/by-name/:name?",
          name: "meals-by-name",
          component: MealsByName,
        },
        {
          path: "/by-letter/:letter?",
          component: MealsByLetter,
        },
      ],
    },
  ],
});

export default router;
