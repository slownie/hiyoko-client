<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

import grammarData from "@/data/grammarPoints.json";

//const grammarPoints = grammarData;
const query = ref("");

/*
const route = useRoute();
const loading = ref(false);
const grammarPoints = ref([]);
const fetchError = ref("");

watch(() => route.params.id, fetchData, { immediate: true });

async function fetchData() {
  grammarPoints.value = [];
  fetchError.value = "";
  loading.value = true;
  try {
    const res = await fetch("http://localhost:4000/api/grammar/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    grammarPoints.value = await res.json();
  } catch (error) {
    fetchError.value = "Error" + error;
  } finally {
    loading.value = false;
  }
}
  */
const filteredPoints = computed(() => {
  return grammarData.filter((point) => {
    point.tags.includes(query.value.toLowerCase());
  });
});
</script>

<template>
  <h1>Grammar List View</h1>
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
  <!--
  <RouterLink to="/grammarlist/test">Test</RouterLink>
  <div v-for="point in grammarPoints" :key="point.title">
    <RouterLink :to="'/grammarlist/' + point.title">{{
      point.title
    }}</RouterLink>
  </div>
  <hr />
  <RouterView></RouterView>
  -->
</template>

<style scoped>
input {
  min-width: 300px;
}
</style>
