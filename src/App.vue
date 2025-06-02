<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style>
/* @link https://utopia.fyi/type/calculator?c=320,18,1.2,2560,24,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

:root {
  --step--2: clamp(0.7813rem, 0.7557rem + 0.1277vw, 0.96rem);
  --step--1: clamp(0.9375rem, 0.9rem + 0.1875vw, 1.2rem);
  --step-0: clamp(1.125rem, 1.0714rem + 0.2679vw, 1.5rem);
  --step-1: clamp(1.35rem, 1.275rem + 0.375vw, 1.875rem);
  --step-2: clamp(1.62rem, 1.5166rem + 0.517vw, 2.3438rem);
  --step-3: clamp(1.944rem, 1.8032rem + 0.7041vw, 2.9297rem);
  --step-4: clamp(2.3328rem, 2.1429rem + 0.9495vw, 3.6621rem);
  --step-5: clamp(2.7994rem, 2.5453rem + 1.2702vw, 4.5776rem);
}

* {
  padding: 0;
  margin: 0;
  font-family: Helvetica, sans-serif;
}

body {
  background: #eee;
}

h1 {
  font-size: var(--step-3);
}

h2 {
  font-size: var(--step-1);
}

p {
  font-size: var(--step-0);
  line-height: 1.6;
}

/* Mobile */
@media only screen and (max-width: 500px) {
  main {
    padding-left: 4px;
    padding-right: 4px;
  }

  body {
    font-size: 4vw;
  }
}

/* Mobile */
@media only screen and (max-width: 1000px) {
  main {
    padding-left: 4px;
    padding-right: 4px;
  }

  body {
    font-size: 1.15em;
  }
}
</style>
