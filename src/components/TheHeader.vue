<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";
const userStore = useUserStore();

async function logout() {
  await userStore.logout();
}
</script>

<template>
  <nav>
    <RouterLink to="/">Hiyoko</RouterLink>
    <RouterLink to="/lessons">Lessons</RouterLink>
    <RouterLink to="/grammarlist">Grammar</RouterLink>
    <RouterLink to="/readinglist">Reading</RouterLink>
    <RouterLink to="/testlist">Tests</RouterLink>
    <button v-if="userStore.userID" @click="logout">Log Out</button>
    <RouterLink to="/auth" v-else="userStore.userID">Sign In</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  color: white;
  background-color: #2c3e50;
  border-bottom: 5px solid #4e6c71;
  height: 70px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a.router-link-active {
  font-weight: bold;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  overflow: auto;
  padding: 0 40px;
}
</style>
