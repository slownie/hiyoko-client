<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();
</script>

<template>
  <main>
    <h1>Home View</h1>

    <!--User is signed in-->
    <section v-if="userStore.userID">
      <h2>Lessons</h2>
    </section>

    <!--User is not signed in-->
    <section v-else>
      <h2>About</h2>
    </section>
  </main>
</template>

<style scoped></style>
