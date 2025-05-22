<script setup lang="ts">
import { ref, computed } from "vue";

// Import Setup
import testData from "@/data/jlptTests.json";
const props = defineProps({ id: String });
const propArray = props.id?.split("-");

// Setup Questions Array
let questions;
if (propArray[1] == "jlpt") {
  questions = testData[5 - parseInt(propArray[0].charAt(1))];
} else {
  questions = testData[5 - parseInt(propArray[0].charAt(1))][propArray[1]];
}

for (const [key, value] of Object.entries(questions)) {
  console.log(key);
}



// Test Setup
const quizCompleted = ref(false);
const currentQuestion = ref(0);

const currentAnswer = ref("");

const score = ref(0);

// Get the current question via index
const getCurrentQuestion = computed(() => {
  let question = questions.questions[0];
  return question
});

// Increment to the next question
const getNextQuestion = () => {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++;
    return;
  }
  quizCompleted.value = true;
}
</script>

<template>
  <main>
    <h1>Practice Test View</h1>
    {{ props.id }}
    <p>Score: {{ score }} / </p>
    <section class="quiz" v-if="!quizCompleted">
      <!--Question Sentence-->
      <p v-html="getCurrentQuestion.sentence"></p>

      <!--Options-->
      <div class="options" v-for="option in getCurrentQuestion?.answers">
        <input type="radio" v-model="currentAnswer" :value="option" :id="option">
        <label :for="option">{{ option }}</label>
      </div>
      
      <button :disabled="currentAnswer===''">Submit</button>
    </section>
    <section v-else>
      <h2>You have finished the test!</h2>
    </section>
  </main>
</template>
