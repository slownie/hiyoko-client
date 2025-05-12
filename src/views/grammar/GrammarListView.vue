<script setup lang="ts">
import { useGrammarStore } from "@/stores/GrammarStore";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import grammarData from "@/data/grammarPoints.json";

const grammarPoints = grammarData;

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
</script>

<template>
  <h1>Grammar List View</h1>
  <ul>
    <li v-for="point in grammarPoints" :key="point.id">
      <RouterLink :to="'grammarlist/' + point.id">
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
