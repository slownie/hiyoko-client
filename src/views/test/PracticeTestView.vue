<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/UserStore";
import testData from "@/data/questionData.json";

const userStore = useUserStore();

const props = defineProps({ id: String });
const propArray: string[] = props.id?.split("-")!;

async function addTestResult() {
  testResultSaved.value = true;
  await userStore.addTestResult({
    questions: questions,
    category: propArray[1],
    score: score.value,
    time: Date.now(),
  });
}

function shuffle(array: any[]) {
  array.sort(() => Math.random() - 0.5);
}

// Question Setup
const questions: any[] = [];

// Check if this is a general test or a category test
if (propArray[1] === "jlpt") {
  //console.log(testData[5 - propArray[0].charAt(1)]);
  //testData[5 - propArray[0].charAt(1)];
  for (const category in testData[5 - Number(propArray[0].charAt(1))]) {
    // Randomize the order of questions and select the first two
    for (const [key, value] of Object.entries(
      testData[5 - propArray[0].charAt(1)][category]
    )) {
      shuffle(value);
      questions.push(value[0], value[1]);
    }
  }
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
const selectedAnswer = ref("");
const submittedQuestion = ref(false);

const testResultSaved = ref(false);

// Get the current question via index
const getCurrentQuestion = computed(() => {
  let question = questions[currentQuestion.value];
  return question;
});

// Check the results of the score
const checkCurrentQuestion = () => {
  submittedQuestion.value = true; // Prevent user from changing answer
  if (selectedAnswer.value === getCurrentQuestion.value.rightAnswer) {
    score.value++;
  }

  // Save the result in a property so it can be stored later
  questions[currentQuestion.value]["wasCorrect"] =
    selectedAnswer.value === getCurrentQuestion.value.rightAnswer;
};

// Increment to the next question
const getNextQuestion = () => {
  // Reset question/answer values
  selectedAnswer.value = "";
  submittedQuestion.value = false;

  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++;
    return;
  }
  quizCompleted.value = true;
};
</script>

<template>
  <main>
    <h1>Practice Test View</h1>
    <p>Score: {{ score }} / {{ questions.length }}</p>
    <section class="quiz" v-if="!quizCompleted">
      <!--Question Sentence-->
      <h3>{{ getCurrentQuestion.questionString }}</h3>
      <p v-html="getCurrentQuestion.sentence"></p>
      <div v-for="answer in getCurrentQuestion.answers" :key="answer">
        <input
          type="radio"
          v-model="selectedAnswer"
          :id="answer"
          :name="answer"
          :value="answer"
          :disabled="submittedQuestion"
        />
        <label :for="answer">{{ answer }}</label>
      </div>

      <!--Buttons-->

      <!--Show submit button if user has not submitted yet-->
      <div v-if="!submittedQuestion">
        <button :disabled="selectedAnswer === ''" @click="checkCurrentQuestion">
          Submit
        </button>
      </div>
      <div v-else>
        <button
          :disabled="selectedAnswer === '' && !submittedQuestion"
          @click="getNextQuestion"
        >
          Next Question
        </button>
      </div>
    </section>
    <section v-else>
      <h2>You have finished the test!</h2>
      <div v-if="userStore.userID">
        <p>{{ userStore.error }}</p>
        <button @click="addTestResult" :disabled="testResultSaved">
          Save Test Results
        </button>
      </div>
    </section>
  </main>
</template>
