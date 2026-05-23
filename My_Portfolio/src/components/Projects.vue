<script>
import Carroussel from "@/components/Carroussel.vue";
import Email from "@/components/Email.vue";

export default {
  components: { Carroussel, Email },
  props: ["projects"],
};
</script>
<template>
  <section id="projects">
    <h2>Mes Projets</h2>
    <Carroussel :projects="projects" />
  </section>
  <Email />
</template>
