<script>
</script>

<template>
  <div>
    <h1>SAM Sen-Sam</h1>
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/projects">Projets</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
    div {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background: linear-gradient(0deg, #162936 0.000%, #1c1e28 20.000%, #302228 40.000%, #4f3536 );
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