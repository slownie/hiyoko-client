<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();
const props = defineProps({ id: String });
const pastTest = userStore.testHistory[parseInt(props.id)];
</script>

<template>
  <h1>{{ pastTest.category }} - {{ pastTest.level }}</h1>
  <h4>{{ new Date(pastTest.time) }}</h4>
  <hr />
  <section>
    <h3>Your Score: {{ pastTest.score }}/{{ pastTest.questions.length }}</h3>
    <div v-for="question in pastTest.questions">
      <h3>{{ question.questionString }}</h3>
      <p v-html="question.sentence"></p>
      <p>Correct Answer: {{ question.rightAnswer }}</p>
      <p>Your Answer: {{ question.selectedAnswer }}</p>
    </div>
  </section>
</template>
