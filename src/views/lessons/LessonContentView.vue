<script lang="ts" setup>
import { computed } from "vue";
import lessonData from "@/data/lessonData.json";
const props = defineProps({ id: String });

const currentArticle = computed(() => {
  return lessonData.find((lesson) => lesson.id === props.id);
});
</script>

<template>
  <span v-html="currentArticle?.lesson_html"></span>
</template>
