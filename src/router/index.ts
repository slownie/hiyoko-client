import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GrammarListView from "@/views/grammar/GrammarListView.vue";
import ReadingListView from "@/views/reading/ReadingListView.vue";
import TestListView from "@/views/test/TestListView.vue";
import AuthView from "@/views/auth/AuthView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ArticleView from "@/views/reading/ArticleView.vue";
import GrammarPointView from "@/views/grammar/GrammarPointView.vue";
import PracticeTestView from "@/views/test/PracticeTestView.vue";
import PastTestView from "@/views/test/PastTestView.vue";
import { useUserStore } from "@/stores/UserStore";

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
      props: true,
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
      props: true,
    },

    {
      path: "/testlist",
      name: "testList",
      component: TestListView,
    },

    {
      path: "/testlist/:id",
      name: "practicetest",
      component: PracticeTestView,
      props: true,
    },

    {
      path: "/pasttest/:id",
      name: "pasttest",
      component: PastTestView,
      props: true,

      // Prevent user from accessing past tests if they are not signed in
      beforeEnter: () => {
        const userStore = useUserStore();
        if (!userStore.userID) {
          return "/testlist";
        }
      },
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
