<script setup lang="ts">
import { computed } from "vue";
import grammarData from "@/data/grammarPoints.json";

const grammarPoints = grammarData;

const props = defineProps({ id: String });

const grammarPoint = computed(() => {
  return grammarPoints.find((point) => point.title === props.id);
});
</script>

<template>
  <h1>Grammar Point View</h1>
  {{ id }}
</template>
