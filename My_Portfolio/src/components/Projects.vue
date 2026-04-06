<script>
import Carroussel from '@/components/Carroussel.vue'

export default {
    components: {Carroussel},
    props: ['projects']
    }
</script>
<template>
    <section id="projects">
        <h2>Mes Projets</h2>
        <Carroussel :projects="projects"/>
    </section>
</template>