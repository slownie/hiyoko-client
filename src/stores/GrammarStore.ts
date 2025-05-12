import { defineStore } from "pinia";
import { ref } from "vue";

export const useGrammarStore = defineStore("grammar", () => {
  const title = ref("");
  const explanation = ref("");
  const conjugation = ref("");
  const sentences = ref([]);

  return { title, explanation, conjugation, sentences };
});
