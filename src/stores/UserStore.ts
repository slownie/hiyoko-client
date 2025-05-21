import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";

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
    const res = await fetch("http://localhost:4000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await res.json();
    if (!res.ok) {
      error.value = json.error;
      loading.value = false;
    }

    if (res.ok) {
      userID.value = json.userID;

      loading.value = false;
      const saveData = {
        email: json.email,
        token: json.token,
        userID: json.userID,
        learnedSentences: json.learnedSentences,
        srsDone: json.srsDone,
      };
      localStorage.setItem("user", JSON.stringify(saveData));
      //router.go("/");
    }
  }

  async function login(email: String, password: String) {
    error.value = null;
    loading.value = true;
    const res = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await res.json();

    if (!res.ok) {
      error.value = json.error;
      loading.value = false;
    }

    if (res.ok) {
      userID.value = json.userID;

      loading.value = false;
      const saveData = {
        email: json.email,
        token: json.token,
        userID: json.userID,
        learnedSentences: json.learnedSentences,
        srsDone: json.srsDone,
      };
      localStorage.setItem("user", JSON.stringify(saveData));
    }
  }

  async function logout() {
    userID.value = null;
    progress.value = [];
    readingListProgress.value = [];
    testHistory.value = [];
    localStorage.removeItem("user");
    router.go("/");
  }

  return {
    userID,
    progress,
    readingListProgress,
    testHistory,
    error,
    loading,
    signup,
    login,
    logout,
  };
});
