<script setup>
import Email from "@/components/Email.vue"
</script>

<template>
  <div class="container">
    <section class="section">
      <div class="image">
        <img
          src="../assets/images_personnel/Profil.jpg"
          alt="Ma photo de profil"
        />
      </div>

      <div class="text">
        <h2>1 - Présentation</h2>
        <p>
          Je m'appelle Sen-Sam et je construis mon parcours autour de la
          rigueur, de la logique et du travail humain.
        </p>
      </div>
    </section>

    <section class="section reverse-mobile">
      <div class="text">
        <h2>2 - Parcours & Expérience</h2>

        <p>
          Après un baccalauréat scientifique, j'ai passé cinq années en tant que
          pompier militaire entre 2019 et 2024.
        </p>

        <p>
          Cette expérience m'a permis de développer un véritable sens des
          responsabilités, une grande discipline ainsi qu'une forte capacité à
          travailler en équipe, même dans des situations exigeantes.
        </p>

        <p>
          Elle m'a également appris l'importance de l'entraide et du sang-froid.
        </p>
      </div>

      <div class="image">
        <img src="../assets/images_personnel/feux.jpg" alt="Feux de forêt" />
      </div>
    </section>

    <section class="section">
      <div class="image">
        <img
          src="../assets/images_personnel/echec_lichess.png"
          alt="Mon classement lichess"
        />
      </div>

      <div class="text">
        <h2>3 - Curiosité & Réflexion</h2>

        <p>
          Curieux de nature, j'aime apprendre en permanence et comprendre le
          fonctionnement des choses.
        </p>

        <p>
          Passionné par les échecs, j'apprécie particulièrement la réflexion, la
          stratégie et la logique.
        </p>
        <p>
          Je m'intéresse aussi aux jeux de stratégies. 
        </p>
      </div>
    </section>

    <section class="section reverse-mobile">
      <div class="text">
        <h2>4 - Personnalité & Valeurs</h2>

        <p>Au quotidien, je suis reconnu pour mon état d'esprit positif.</p>

        <p>
          Ayant grandi entouré de mes trois petits frères, j'ai aussi développé
          un sens du partage, de la patience et de l'accompagnement.
        </p>
      </div>

      <div class="image">
        <img
          src="../assets/images_personnel/madagascar.jpg"
          alt="Aide humanitaire"
        />
      </div>
    </section>

    <section class="objectif">
      <h2>5 - Objectif</h2>

      <p>
        Aujourd'hui, je souhaite mettre ces qualités humaines et cette
        discipline au service de nouveaux projets, avec l'envie de continuer à
        évoluer, apprendre et aider les autres.
      </p>
    </section>
    <Email/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;
}

.text {
  flex: 1;
  max-width:60%;
}

h2 {
  margin-bottom: 1rem;
  color: #079ee0;
}

.image {
  max-width:20%;
  flex: 1;
  display: flex;
  justify-content: center;
}

.image img {
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}
</style>
