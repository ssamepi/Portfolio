<script></script>

<template>
  <div>
    <h2>SAM Sen-Sam</h2>
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/personnel">Personnel</router-link></li>
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
  background: linear-gradient(
    135deg,
    #1e1b4b,
    #312e81,
    #4338ca
  );
  padding: 20px 40px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.25);
  position: sticky;
  top: 0;
  z-index: 1;
}

ul {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
  cursor: pointer;
}
</style>
