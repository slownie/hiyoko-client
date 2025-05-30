<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/UserStore";
import testData from "@/data/questionData.json";

const userStore = useUserStore();

const props = defineProps({ id: String });
const propArray: string[] = props.id?.split("-")!;

interface Question {
  questionString: string;
  sentence: string;
  answers: Array<string>;
  rightAnswer: string;
  explanation: string;
  selectedAnswer: string;
  wasCorrect: boolean;
}

async function addTestResult() {
  testResultSaved.value = true;
  await userStore.addTestResult({
    questions: questions,
    category: propArray[1],
    level: propArray[0],
    score: score.value,
    time: Date.now(),
  });
}

function shuffle(array: []) {
  array.sort(() => Math.random() - 0.5);
}

// Question Setup
const questions: Array<Question> = [];
const test = testData[5 - parseInt(propArray[0].charAt(1))];

// Check if this is a general test or a category test
if (propArray[1] === "jlpt") {
  // Combine all categories
  for (const [key, value] of Object.entries(test)) {
    const category: Object = test[key as keyof typeof test]!;
    for (const [key2, value2] of Object.entries(category)) {
      shuffle(value2);
      questions.push(value2[0], value2[1]);
    }
  }
} else {
  // Use the category provided
  const category: Object = test[propArray[1] as keyof typeof test]!;
  for (const [key, value] of Object.entries(category)) {
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
const getCurrentQuestion = computed<Question>(() => {
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
  questions[currentQuestion.value].selectedAnswer = selectedAnswer.value;
  questions[currentQuestion.value].wasCorrect =
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
