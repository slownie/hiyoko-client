<script setup lang="ts">
import { computed, ref } from "vue";
import articleData from "@/data/articles.json";

const showAnswer = ref(false);
const props = defineProps({ id: String });

const currentArticle = computed(() => {
  return articleData.find((article) => article.title === props.id);
});
</script>

<template>
  <main>
    <h1>{{ currentArticle.title }}</h1>
    元記事:
    <a :href="currentArticle?.source" target="_blank">{{
      currentArticle?.source
    }}</a>
    <h3>文法</h3>
    <ul v-for="grammarPoint in currentArticle?.grammarPointsUsed">
      <li>{{ grammarPoint }}</li>
    </ul>
    <hr />
    <p v-html="currentArticle.article_html"></p>
    <hr />
    <h2>質問</h2>
    <div v-for="question in currentArticle.questions">
      {{ question }}
    </div>
    <button @click="showAnswer = !showAnswer">Show Answers</button>
    <div v-if="showAnswer">
      <div v-for="answer in currentArticle?.answers">
        {{ answer }}
      </div>
    </div>
  </main>
</template>
