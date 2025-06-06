<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";
const userStore = useUserStore();
</script>

<template>
  <main>
    <h1>Tests</h1>
    <h2>JLPT (Vocabulary, Grammar, Reading)</h2>
    <div class="container">
      <RouterLink to="/testlist/n5-jlpt">N5</RouterLink>
      <RouterLink to="/testlist/n4-jlpt">N4</RouterLink>
      <RouterLink to="/testlist/n3-jlpt">N3</RouterLink>
      <RouterLink to="/testlist/n2-jlpt">N2</RouterLink>
      <RouterLink to="/testlist/n1-jlpt">N1</RouterLink>
    </div>

    <h2>Vocabulary Tests</h2>
    <div class="container">
      <RouterLink to="/testlist/n5-vocabulary">N5</RouterLink>
      <RouterLink to="/testlist/n4-vocabulary">N4</RouterLink>
      <RouterLink to="/testlist/n3-vocabulary">N3</RouterLink>
      <RouterLink to="/testlist/n2-vocabulary">N2</RouterLink>
      <RouterLink to="/testlist/n1-vocabulary">N1</RouterLink>
    </div>

    <h2>Grammar Tests</h2>
    <div class="container">
      <RouterLink to="/testlist/n5-grammar">N5</RouterLink>
      <RouterLink to="/testlist/n4-grammar">N4</RouterLink>
      <RouterLink to="/testlist/n3-grammar">N3</RouterLink>
      <RouterLink to="/testlist/n2-grammar">N2</RouterLink>
      <RouterLink to="/testlist/n1-grammar">N1</RouterLink>
    </div>

    <h2>Reading Tests</h2>
    <div class="container">
      <RouterLink to="/testlist/n5-reading">N5</RouterLink>
      <RouterLink to="/testlist/n4-reading">N4</RouterLink>
      <RouterLink to="/testlist/n3-reading">N3</RouterLink>
      <RouterLink to="/testlist/n2-reading">N2</RouterLink>
      <RouterLink to="/testlist/n1-reading">N1</RouterLink>
    </div>

    <div v-if="userStore.userID !== null">
      <hr />
      <h1>Test History</h1>
      <ul>
        <li
          v-for="(pastTest, index) in userStore.testHistory"
          :key="pastTest.time"
        >
          <RouterLink :to="'/pasttest/' + index"
            >{{ pastTest.category }} - ({{ pastTest.score }} /
            {{ pastTest.questions.length }}) -
            {{ new Date(pastTest.time * 1000) }}</RouterLink
          >
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  padding-bottom: 24px;
}
</style>
