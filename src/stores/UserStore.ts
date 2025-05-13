import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userState", () => {
  // State Variables
  const userID = ref(null);
  const progress = ref([]);
  const readingListProgress = ref([]);
  const testHistory = ref([]);

  const error = ref(null);
  const loading = ref(false);

  // Load from localStorage if it exists
  if (localStorage.getItem("user") !== null) {
    const localObject = JSON.parse(localStorage.getItem("user"));
    userID.value = localObject.userID;
    progress.value = localObject.progress;
    readingListProgress.value = localObject.readingListProgress;
    testHistory.value = localObject.testHistory;
  }

  // Auth Actions
  async function signup(email: String, password: String) {
    error.value = null;
    loading.value = true;
    const res = await fetch("http://localhost:4000/api/grammar/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const json = await res.json();
    if (!res.ok) {
      error.value = json.error;
      loading.value = false;
    }
  }

  return {
    userID,
    progress,
    readingListProgress,
    testHistory,
    error,
    loading,
    signup,
  };
});
