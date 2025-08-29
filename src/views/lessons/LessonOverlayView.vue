<script setup lang="ts">
import lessonData from "@/data/lessonData.json";
import { ref } from "vue";

const sidebarActive = ref(true);

function toggleSidebar() {
    sidebarActive.value = !sidebarActive.value;
}

</script>

<template>
    <main>
        <aside class="sidebar" :class="{active: sidebarActive}">
            <div class="toggle-btn" @click="toggleSidebar">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-list">
                <li v-for="lesson in lessonData" :key="lesson.id">
                    <RouterLink :to="'/lessons/' + lesson.id" @click="toggleSidebar">{{lesson.title}}</RouterLink>
                </li>
            </ul>
        </aside>
        <div class="content">
            <RouterView></RouterView>
        </div>
    </main>
</template>

<style scoped>
    .sidebar {
        position: fixed;
        top: 80px;
        left: -300px;
        width: 300px;
        height: 100svh;
        background-color: #f6f6f7;
        border-right: 1px solid #ddd;
        transition: all 300ms ease-in-out;
    }

    .sidebar .toggle-btn {
        position: absolute;
        top: -5px;
        right: -50px;
        width: 50px;
        height: 50px;
        background-color: #f6f6f7;
        border: 1px solid #ddd;
        border-left: none;
        cursor: pointer;
    }

    .sidebar .toggle-btn span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 2px;
        background: #555;
        transition: all 300ms ease-in-out;
    }
    
    .sidebar .toggle-btn span:nth-child(1) {
        top: 30%;
    }

    .sidebar .toggle-btn span:nth-child(3) {
        top: 70%;
    }

    .sidebar.active {
        left: 0px;
    }

    .sidebar .nav-list {
        transition: all 300ms ease-in-out;
    }

    .sidebar.active .toggle-btn span:nth-child(1) {
        top:50%;
        transform: translate(-50%,-50%) rotate(45deg);
    }

    .sidebar.active .toggle-btn span:nth-child(3) {
        top:50%;
        transform: translate(-50%,-50%) rotate(-45deg);
    }

    .sidebar.active .toggle-btn span:nth-child(2) {
        display: none;
    }

    .content {
        margin-left: 10%;
    }

</style>