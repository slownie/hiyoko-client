<script setup lang="ts">
import { computed, ref } from "vue";
import grammarData from "@/data/grammarPoints.json";

const query = ref("");
const filteredPoints = computed(() => {
  return grammarData.filter((point) => {
    point.tags.includes(query.value.toLowerCase());
  });
});
</script>

<template>
  <main>
    <h1>Grammar List</h1>
    <input
      type="text"
      v-model="query"
      placeholder="Search for a grammar point."
      @keyup=""
    />

    <!--Show all grammar points unless user searches for a specific one-->
    <ul v-if="query === ''">
      <li v-for="point in grammarData" :key="point.id">
        <RouterLink :to="'grammarlist/' + point.name">
          {{ point.name }}
        </RouterLink>
      </li>
    </ul>
    <ul v-else>
      <li v-for="point in filteredPoints" :key="point.id">
        <RouterLink :to="'grammarlist/' + point.name">
          {{ point.name }}
        </RouterLink>
      </li>
    </ul>
  </main>
</template>

<style scoped>
input {
  min-width: 300px;
}
</style>
