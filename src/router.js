import { createRouter, createWebHistory } from "vue-router";
import NewMerkozesek from "./pages/NewMatches.vue";
import NewBets from "./pages/NewBets.vue";
import NotFound from "./pages/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/matches",
    },
    {
      path: "/matches",
      component: NewMerkozesek,
    },
    {
      path: "/mybets",
      component: NewBets,
    },

    {
      path: "/:NotFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
