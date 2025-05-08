import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userState", () => {
  // State Variables
  const email = ref(null);
  const userID = ref(null);
});
