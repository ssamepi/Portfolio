<script>
    export default {
    props : ['projects']
    }
</script>
<template>
    <div class="grid">
        <router-link v-for="project in projects" :key="project.title" :to="project.slug" class="card_project">
            <img :src="project.image" :alt="project.title" class="project_image" />
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        </router-link>
    </div>
</template>

<style scoped>

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        gap: 1rem;
        padding: 1rem;
        align-items: center;
        justify-items: center;
    }
    
    .card_project {
        background: rgb(49, 45, 45);
        padding: 1rem;
        width: 15rem;
        border-radius: 10px;
        transition: 0.3s;
    }

    .card_project:hover {
        transform: translateY(-10px);
    }
    
    .project_image {
        width: 100%;
        height: 12rem;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 10px;
    }
</style>