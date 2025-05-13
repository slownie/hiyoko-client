import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GrammarListView from "@/views/grammar/GrammarListView.vue";
import ReadingListView from "@/views/reading/ReadingListView.vue";
import TestListView from "@/views/test/TestListView.vue";
import AuthView from "@/views/AuthView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ArticleView from "@/views/reading/ArticleView.vue";
import GrammarPointView from "@/views/grammar/GrammarPointView.vue";

import { useGrammarStore } from "@/stores/GrammarStore";

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
      path: "/grammarlist/:id",
      name: "grammarPoint",
      component: GrammarPointView,
      props: true
    },

    {
      path: "/readinglist",
      name: "readingList",
      component: ReadingListView,
    },

    {
      path: "/readinglist/:id",
      name: "article",
      component: ArticleView,
    },

    {
      path: "/testlist",
      name: "testList",
      component: TestListView,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
