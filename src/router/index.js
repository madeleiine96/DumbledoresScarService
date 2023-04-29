import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    // Lazy-loadar de tre komponenterna som ej är startsida
    {
      path: "/tube",
      name: "tube",
      component: () => import("../views/Tube.vue"),
    },
    {
      path: "/bus",
      name: "bus",
      component: () => import("../views/Bus.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
  ],
});

export default router;
