<script lang="ts" setup>
import { computed } from "vue";
import lessonData from "@/data/lessonData.json";
const props = defineProps({ id: String });

const currentArticle = computed(() => {
  return lessonData.find((lesson) => lesson.id === props.id);
});
</script>

<template>
  <main>
    <div class="sidebar">
    <ul>
      <li v-for="lesson in lessonData">
        <RouterLink :to="'/lessons/' + lesson.id">{{
          lesson.title
        }}</RouterLink>
      </li>
    </ul>
  </div>
  <div class="content">
    <RouterView />
  </div>

    <span v-html="currentArticle?.lesson_html"></span>
  </main>
</template>
