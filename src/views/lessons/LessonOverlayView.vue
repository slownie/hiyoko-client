<script setup>
import lessonData from "@/data/lessonData.json";
</script>

<template>
    <div class="sidebar">
        <ul>
            <li v-for="lesson in lessonData" :key="lesson.id">
                <RouterLink :to="'/lessons/' + lesson.id">{{lesson.title}}</RouterLink>
            </li>
        </ul>
    </div>
    <div class="content">
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
    .sidebar {
        background-color: #f6f6f7;
        margin: 0;
        padding: 0;
        position: fixed;
        height: 100%;
        padding-left: 8px;
    }

    @media only screen and (max-width: 500px) {
        
    }

    .sidebar a {
        color: #3c3c49;
        text-decoration: none;
    }

    .sidebar a:hover {
        color: #18794e;
    }

    .sidebar a.router-link-active {
        color: #18794e;
        font-weight: bold;
    }

    .content {
        padding-left: 250px;
    }

</style>