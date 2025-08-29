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
    <h1>{{ currentArticle?.title }}</h1>
    <p>
      元記事:
      <a :href="currentArticle?.source" target="_blank">{{
        currentArticle?.source
      }}</a>
    </p>

    <div class="contents">
      <h3 class="title">文法</h3>
      <ul>
        <li v-for="grammarPoint in currentArticle?.grammarPointsUsed">
          <RouterLink :to="'/grammarlist/' + grammarPoint">{{
            grammarPoint
          }}</RouterLink>
        </li>
      </ul>
    </div>

    <p v-html="currentArticle?.article_html"></p>
    <hr />
    <h2>質問</h2>
    <p v-for="question in currentArticle?.questions">
      {{ question }}
    </p>
    <button @click="showAnswer = !showAnswer">Show Answers</button>
    <div v-if="showAnswer">
      <p v-for="answer in currentArticle?.answers">
        {{ answer }}
      </p>
    </div>
  </main>
</template>

<style scoped>
ul {
  margin-left: 24px;
  list-style-type: circle;
}

li {
  margin-top: 14px;
  margin-bottom: 14px;
}

p {
  line-height: 3;
}

.contents {
  border: 1px solid #8e8e8e;
  margin-bottom: 1rem;
}

.title {
  color: rgb(240, 240, 240);
  background-color: #274d7b;
  padding: 12px;
  text-align: center;
}
</style>
