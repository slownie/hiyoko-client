<script lang="ts" setup>
import lessonData from "@/data/lessonData.json";
</script>

<template>
  <div class="sidebar">
    <ul>
      <li v-for="lesson in lessonData">
        <RouterLink :to="'/lessons/' + lesson.id">{{
          lesson.title
        }}</RouterLink>
      </li>
    </ul>
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped></style>
