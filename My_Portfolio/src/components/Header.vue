<script>
    export default {
    props: ['scrollTo']
    }
</script>

<template>
  <div>
    <h1>SAM Sen-Sam</h1>
    <ul>
      <li @click="scrollTo('home')">Accueil</li>
      <li @click="scrollTo('projects')">Projets</li>
      <li @click="scrollTo('contact')">Contact</li>
    </ul>
  </div>
</template>

<style scoped>
    div {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background: #781b7895;
        position: sticky;
        top: 0;
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 20px;
        cursor: pointer;
    }
</style>