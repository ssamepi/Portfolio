<script>
    export default {
    props: ['projects', 'scrollTo', 'techno']
    }
</script>

<template>
    <div id="home"></div>
        <section class="top">
            <div class="max">
                <p>Développeur Full-stack en devenir : j'allie logique, rigueur, curiosité et envie d'apprendre pour concevoir des applications web complètes et évoluer sans cesse.</p>
            </div>
            <h1>Développeur Full-stack</h1>
            <div class="techno_grid">
                <div v-for="tech in techno" :key="techno.title" class="card">
                    <h3>{{ tech.title }}</h3>
                    <img :src="tech.image" :alt="tech.title"/>
                </div>
            </div>
        </section>

        <section id="projects">
            <h2>Mes Projets</h2>
                <div class="grid">
                    <a v-for="project in projects" :key="project.title" :href="project.link" target="_blank" class="card_project">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                    </a>
                </div>
        </section>
    
</template>

<style scoped>
    button {
        padding: 10px 20px;
        background: rgb(49, 45, 45);
        color: white;
        border: none;
        cursor: pointer;
        margin-top: 20px;
        transition: 0.3s;
    }

    button:hover {
        transform: scale(1.05);
    }

    .max {
        max-width: 700px;
        margin: auto;
    }

    .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 0px;
        padding: 40px;
        background: black;
        color: white;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
        align-items: center;
        justify-items: center;
    }

    .techno_grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin-top: 30px;
    }

    .card {
        transition: 0.3s;
    }
    .card img {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }

    .card_project {
        background: rgb(49, 45, 45);
        padding: 20px;
        width: 250px;
        border-radius: 10px;
        transition: 0.3s;
    }

    .card_project:hover {
        transform: translateY(-10px);
    }

    .card:hover {
        transform: translateY(-10px);
    }
</style>