<script>
import Carroussel from '@/components/Carroussel.vue'
import Email from '@/components/Email.vue'
export default {
    components: {Carroussel, Email},
    props: ['techno']
    }
</script>

<template>
    <section class="top">
        <div class="max">
            <p>Développeur Full-stack en devenir : j'allie logique, rigueur, curiosité et envie d'apprendre pour concevoir des applications web complètes et évoluer sans cesse.</p>
        </div>
        <h1>Développeur Full-stack</h1>
        <div class="techno_grid">
            <div v-for="tech in techno" :key="tech.title" class="card">
                <h3>{{ tech.title }}</h3>
                <img :src="tech.image" :alt="tech.title"/>
            </div>
        </div>
    </section>
    <Email/>
</template>

<style scoped>
    .max {
        background-color: rgba(61, 61, 61, 0.773);
        max-width: 700px;
        margin: auto;
        border-radius: 16px;
    }

    .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 0px;
        padding: 40px;
        color: white;
    }

    .techno_grid {
        width: 50rem;
        margin: auto;
        border-radius: 16px;
        background-color: rgba(61, 61, 61, 0.773);
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
        width: 4rem;
        height: 4rem;
        object-fit: contain;
    }

    .card:hover {
        transform: translateY(-10px);
    }
</style>