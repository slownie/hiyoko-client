<script setup lang="ts">
import { ref, computed } from "vue";

// Import Setup
import testData from "@/data/jlptTests.json";
const props = defineProps({ id: String });
const propArray = props.id?.split("-");

const questions = () => {
  return testData[5 - parseInt(propArray[0].charAt(1))];
};
// Test Setup
const quizCompleted = ref(false);
const currentQuestion = ref(0);

const score = computed(() => {
  let value = 0;

  // Setting the score

  return value;
});

// Get the current question via index
const getCurrentQuestion = computed(() => {});
</script>

<template>
  <main>
    <h1>Practice Test View</h1>
    {{ props.id }}
    <section class="quiz" v-if="!quizCompleted"></section>
    <section v-else>
      <h2>You have finished the test!</h2>
    </section>
  </main>
</template>
