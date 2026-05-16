<script>
import { projects } from '@/assets/data.js'
import Email from '@/components/Email.vue'

export default {
    components: { Email },
    data() {
        return {
            project: projects.find(p => p.slug === 'etodo-planning')
        }
    }
}
</script>

<template>
  <div v-if="project">

    <h1 class="title">{{ project.title }}</h1>

    <div class="content">

      <img :src="project.image" :alt="project.title" />

      <div class="text">
        <p>{{ project.description }}</p>

        <p>Il y avait plusieurs objectifs à ce projet :</p>

        <ul>
          <li>Récupérer des livres depuis une bibliothèque en ligne</li>
          <li>Nettoyer les parties inutiles</li>
          <li>Effectuer des calculs (richesse lexicale, etc.)</li>
          <li>Proposer des livres personnalisés</li>
        </ul>
      </div>

    </div>

    <Email />
  </div>
</template>

<style scoped>
    .title {
    text-align: center;
    margin-bottom: 2rem;
    }

    .content {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: flex-start;
    }

    img {
    width: 20rem;
    height: auto;
    object-fit: contain;
    }

    .text {
    display: flex;
    flex-direction: column;
    }

    ul {
    padding-left: 1rem;
    }

    @media (max-width: 768px) {
    .content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    ul {
        list-style-position: inside;
    }
    }
</style>