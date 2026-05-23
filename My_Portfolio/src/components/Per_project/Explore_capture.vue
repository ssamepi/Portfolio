<script>
import { projects } from "@/assets/data.js";
import Email from "@/components/Email.vue";
import Back from "@/components/Per_project/Used_In_Projects/BackButton.vue";

export default {
  components: { Email, Back },
  data() {
    console.log("projects:", projects);
    console.log(
      "found:",
      projects.find((p) => p.slug === "explore-and-capture"),
    );
    return {
      project: projects.find((p) => p.slug === "explore-and-capture"),
    };
  },
};
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
          <li>Trouver une idée d'application utile</li>
          <li>Avoir une logique client</li>
          <li>Possibilité de navigation dans l'application claire</li>
          <li>Avoir un maximum de retour tout au long du développement</li>
        </ul>
      </div>
    </div>
    <Back/>
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
  margin-bottom: 20px;
}

img {
  border-radius: 8px;
  width: 10rem;
  height: auto;
  object-fit: contain;
}

.text {
  display: flex;
  flex-direction: column;
}

ul {
  padding-left: 1rem;
  text-align: left;
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
