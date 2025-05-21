<script setup lang="ts">
import { computed, ref } from "vue";

import articleData from "@/data/articles.json";

const query = ref("");
const filteredArticles = computed(() => {
  return articleData.filter((article) =>
    article.title.toLowerCase().includes(query.value.toLowerCase())
  );
});
</script>

<template>
  <h1>Reading List View</h1>
  <input
    type="text"
    v-model="query"
    placeholder="Search for an article."
    @keyup=""
  />

  <ul>
    <li v-for="article in filteredArticles" :key="article.id">
      <RouterLink :to="'readinglist/' + article.title">
        {{ article.title }}
      </RouterLink>
    </li>
  </ul>
</template>
