<script>
export default {
  props: ["projects"],
};
</script>
<template>
  <div class="div-carousel">
    <div class="carousel">
      <router-link
        v-for="project in [...projects, ...projects]"
        :key="project.title"
        :to="project.slug"
        class="card_project"
      >
        <img :src="project.image" :alt="project.title" class="project_image" />
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.div-carousel {
  width: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: scroll-to-left 40s linear infinite;
}

.carousel:hover {
  animation-play-state: paused;
}

@keyframes scroll-to-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.card_project {
  background: rgb(49, 45, 45);
  padding: 1rem;
  width: clamp(12rem, 25vw, 20rem); 
  /* le clamp pour faire de la responsive ! 
     on donne a la carte 25vw et on met mini 12rem et max 20 rem */
  border-radius: 10px;
  transition: transform 0.3s;
}

.card_project:hover {
  transform: translateY(-10px);
}

.project_image {
  width: 100%;
  height: clamp(8rem, 15vw, 12rem);
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>