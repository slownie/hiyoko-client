import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";

export const useUserStore = defineStore("userState", () => {
  // State Variables
  const userID = ref(null);
  const token = ref(null);
  const progress = ref([]);
  const readingListProgress = ref([]);
  const testHistory = ref<any>([]);
  const lastLesson = ref("");

  const error = ref(null);
  const loading = ref(false);

  // Load from localStorage if it exists
  if (localStorage.getItem("user") !== null) {
    const localObject = JSON.parse(localStorage.getItem("user") || "{}");
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
      token.value = json.token;
      progress.value = json.grammarProgress;
      readingListProgress.value = json.readingProgress;
      testHistory.value = json.testResults;

      loading.value = false;
      const saveData = {
        userID: json.userID,
        token: json.token,
        progress: json.grammarProgress,
        readingListProgress: json.readingProgress,
        testHistory: json.testResults,
      };
      localStorage.setItem("user", JSON.stringify(saveData));
      router.push("/");
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
      token.value = json.token;
      progress.value = json.grammarProgress;
      readingListProgress.value = json.readingProgress;
      testHistory.value = json.testResults;

      loading.value = false;
      const saveData = {
        userID: json.userID,
        token: json.token,
        progress: json.grammarProgress,
        readingListProgress: json.readingProgress,
        testHistory: json.testResults,
      };
      localStorage.setItem("user", JSON.stringify(saveData));
      router.push("/");
    }
  }

  async function logout() {
    userID.value = null;
    token.value = null;
    progress.value = [];
    readingListProgress.value = [];
    testHistory.value = [];
    localStorage.removeItem("user");
    router.push("/");
  }

  // Data Actions
  async function addTestResult(testResultObject: Object) {
    const sendUserID = userID.value;
    error.value = null;
    loading.value = true;
    const res = await fetch("http://localhost:4000/api/users/addTestResult", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID: sendUserID,
        testResultObject: testResultObject,
      }),
    });
    const json = await res.json();
    if (!res.ok) {
      error.value = json.error;
      loading.value = false;
    }

    if (res.ok) {
      error.value = null;
      loading.value = false;
      testHistory.value.push(testResultObject);

      const saveData = JSON.parse(localStorage.getItem("user") || "{}");

      // This condition shouldn't run but someone can delete their save data if they're annoying
      if (saveData === undefined) {
      }
      saveData.testHistory.push(testResultObject);
      localStorage.setItem("user", JSON.stringify(saveData));
    }
  }

  return {
    userID,
    progress,
    readingListProgress,
    testHistory,
    lastLesson,
    error,
    loading,
    signup,
    login,
    logout,
    addTestResult,
  };
});
