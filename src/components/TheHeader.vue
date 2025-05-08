<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/grammarlist">Grammar List</RouterLink>
    <RouterLink to="/readinglist">Reading List</RouterLink>
    <RouterLink to="/testlist">Test List</RouterLink>
    <RouterLink to="/auth">Sign In</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  color: white;
  background-color: #2c3e50;
  border-bottom: 5px solid #4e6c71;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: red;
}
</style>
