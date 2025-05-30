<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";
const userStore = useUserStore();
</script>

<template>
  <h1>Test List View</h1>
  <h2>Full Tests (Vocabulary, Grammar, Reading)</h2>
  <ul>
    <li>
      <RouterLink to="/testlist/n5-jlpt">N5</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n4-jlpt">N4</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n3-jlpt">N3</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n2-jlpt">N2</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n1-jlpt">N1</RouterLink>
    </li>
  </ul>

  <h2>Vocabulary Tests</h2>
  <ul>
    <li>
      <RouterLink to="/testlist/n5-vocabulary">N5</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n4-vocabulary">N4</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n3-vocabulary">N3</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n2-vocabulary">N2</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n1-vocabulary">N1</RouterLink>
    </li>
  </ul>

  <h2>Grammar Tests</h2>
  <ul>
    <li>
      <RouterLink to="/testlist/n5-grammar">N5</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n4-grammar">N4</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n3-grammar">N3</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n2-grammar">N2</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n1-grammar">N1</RouterLink>
    </li>
  </ul>

  <h2>Reading Tests</h2>
  <ul>
    <li>
      <RouterLink to="/testlist/n5-reading">N5</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n4-reading">N4</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n3-reading">N3</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n2-reading">N2</RouterLink>
    </li>
    <li>
      <RouterLink to="/testlist/n1-reading">N1</RouterLink>
    </li>
  </ul>

  <div v-if="userStore.userID !== null">
    <hr />
    <h1>Test History</h1>
    <ul v-for="(pastTest, index) in userStore.testHistory" :key="pastTest.time">
      <li>
        <RouterLink :to="'/pasttest/' + index"
          >{{ pastTest.category }} - ({{ pastTest.score }} /
          {{ pastTest.questions.length }}) -
          {{ new Date(pastTest.time) }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
