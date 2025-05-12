<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #eee;
}
</style>
