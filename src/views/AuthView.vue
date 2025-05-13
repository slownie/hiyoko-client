<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();
const signupOrLogin = ref(true); // True=Signup False=Login
const email = ref("");
const password = ref("");

async function auth() {
  //Signup
  if (signupOrLogin) {
    await userStore.signup(email.value, password.value);
  } else {
    await userStore.login(email.value, password.value);
  }
}

function swap() {
  signupOrLogin.value = !signupOrLogin.value;
}
</script>

<template>
  <main>
    <h1>{{ signupOrLogin ? "Sign Up" : "Login" }}</h1>
    <form @submit.prevent="auth" class="authform">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="example@mail.com"
        required
      />

      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Password123."
        required
      />

      <p>
        {{ userStore.error }}
      </p>

      <button class="submit-button">
        {{ signupOrLogin ? "Sign Up" : "Login" }}
      </button>

      <button class="submit-button" @click.prevent.stop="swap">
        {{ signupOrLogin ? "Login Instead" : "Sign Up Instead" }}
      </button>
    </form>
  </main>
</template>

<style scoped>
label,
input {
  display: block;
}

input {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

form {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
}

.submit-button {
  background-color: #04aa6d;
  width: 400px;
  height: 32px;
  border-radius: 6px;
  margin-bottom: 12px;
}

.change-button {
  background-color: #04aa6d;
  width: 400px;
  height: 32px;
  border-radius: 6px;
}

.error {
  color: red;
}
</style>
