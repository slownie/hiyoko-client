import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GrammarListView from "@/views/grammar/GrammarListView.vue";
import ReadingListView from "@/views/reading/ReadingListView.vue";
import TestListView from "@/views/test/TestListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },

    {
      path: "/grammarlist",
      name: "grammarList",
      component: GrammarListView,
    },
    {
      path: "/readinglist",
      name: "readingList",
      component: ReadingListView,
    },
    {
      path: "/testlist",
      name: "testList",
      component: TestListView,
    },
  ],
});

export default router;
