<script setup lang="ts">
import { computed } from "vue";
import grammarData from "@/data/grammarPoints.json";

const grammarPoints = grammarData;

const props = defineProps({ id: String, name: String });

const grammarPoint = computed(() => {
  return grammarPoints.find((point) => point.name === props.id);
});
</script>

<template>
  {{ name }}
  <h1>{{ grammarPoint?.name }}</h1>
  <h2>説明</h2>
  <p v-html="grammarPoint?.explanation"></p>
  <h2>接続</h2>
  <p v-html="grammarPoint?.conjugation"></p>
  <h2>例文</h2>
  <p v-for="sentence in grammarPoint?.sentences" :key="sentence">
    {{ sentence.jp }}
    <br />
    {{ sentence.eg }}
  </p>
</template>
