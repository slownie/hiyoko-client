<script setup lang="ts">
import { computed } from "vue";
import articleData from "@/data/articles.json";

const props = defineProps({ id: String });

const currentArticle = computed(() => {
  return articleData.find((article) => article.title === props.id);
});
</script>

<template>
  <main>
    <h1>{{ currentArticle.title }}</h1>
  </main>
</template>
