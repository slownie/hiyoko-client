<script setup lang="ts">
import { ref, computed } from "vue";
import testData from "@/data/questionData.json";
const props = defineProps({ id: String });
const propArray = props.id?.split("-");

function shuffle(array: any[]) {
  array.sort(() => Math.random() - 0.5);
}

// Question Setup
const questions: any[] = [];

// Check if this is a general test or a category test
if (propArray[1] == "jlpt") {
  //testData[5 - propArray[0].charAt(1)];
} else {
  for (const [key, value] of Object.entries(
    testData[5 - propArray[0].charAt(1)][propArray[1]]
  )) {
    // Randomize the order of questions and select the first two
    shuffle(value);
    questions.push(value[0], value[1]);
  }
}

// Test Setup
const quizCompleted = ref(false);
const score = ref(0);
const currentQuestion = ref(0);

const getCurrentQuestion = computed(() => {
  let question = questions[currentQuestion.value];
  return question;
});
</script>

<template>
  <main>
    <h1>Practice Test View</h1>
    {{ props.id }}
    <p>Score: {{ score }} /</p>
    <section class="quiz" v-if="!quizCompleted">
      <!--Question Sentence-->
      <h3>{{ getCurrentQuestion.questionString }}</h3>
      <p v-html="getCurrentQuestion.sentence"></p>
    </section>
    <section v-else>
      <h2>You have finished the test!</h2>
    </section>
  </main>
</template>
