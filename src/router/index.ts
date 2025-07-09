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

import LessonContentView from "@/views/lessons/LessonContentView.vue";
import LessonOverlayView from "@/views/lessons/LessonOverlayView.vue";

import { useUserStore } from "@/stores/UserStore";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to,from,savedPosition) {
    // Always scroll to top
    return {top: 0}
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/lessons",
      name: "lesson",
      component: LessonOverlayView,
      // Prevent user from accessing past tests if they are not signed in
      children: [
        {
          path: ":id",
          name: "lessoncontent",
          component: LessonContentView,
          props: true,
        },
      ],
    },

    {
      path: "/grammarlist",
      name: "grammarList",
      
      children: [
        {
          path: '',
          name: 'grammarListView',
          component: GrammarListView,
        },

        {
          path: ":id",
          name: "grammarPoint",
          component: GrammarPointView,
          props: true,
        }
      ]
    },

    {
      path: "/readinglist",
      name: "readingListBase",
      children: [
        {
          path: '',
          name: "readingListView",
          component: ReadingListView,
        },

        {
          path: ':id',
          name: "article",
          component: ArticleView,
          props: true
        }
      ]
    },

    {
      path: "/testlist",
      name: "testList",
      children: [
        {
          path: '',
          name: 'testListView',
          component: TestListView
        },

        {
          path: ':id',
          name: 'practicetest',
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
      ]
    },

    {
      path: "/auth",
      name: "auth",
      component: AuthView,

      // Prevent user from accessing auth if they are signed in
      beforeEnter: () => {
        const userStore = useUserStore();
        if (userStore.userID) {
          return "/";
        }
      },
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ]

    // Remove this in the final release
});

export default router;
