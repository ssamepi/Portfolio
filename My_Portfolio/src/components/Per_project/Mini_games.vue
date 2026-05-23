<script>
import Email from "@/components/Email.vue";
import Back from "@/components/Per_project/Used_In_Projects/BackButton.vue";

export default {
  components: { Email, Back },
};
</script>

<template>
  <div class="card_project">
    <h3>Mini-jeux personnel</h3>
    <p>Projet personnel de mini-jeux.</p>
    <!-- 
          { title: "Jeu du pendu", description: "Mini jeu de rentrée"}, -->
  </div>
  <Back/>
  <Email />
</template>

<style scoped>

.card_project{
  margin-bottom: 20px;
}
  </style>
