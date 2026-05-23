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
  align-items: center;

  background: linear-gradient(
    135deg,
    #1e1b4b,
    #312e81,
    #4338ca
  );
  padding: 20px 24px;
  position: sticky;
  top: 0;
  z-index: 1;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
}

ul {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 18px;
  padding: 0;
  margin: 0;
}

li a {
  font-size: 1rem;
  transition: 0.3s;
}

li a:hover {
  color: #cbd5e1;
}

@media (max-width: 768px) {

  h2 {
    font-size: 1.1rem;
  }

  li a {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {

  div {
    flex-direction: column;
    gap: 8px;
    padding: 8px 10px;
  }

  h2 {
    font-size: 1rem;
  }

  ul {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  li a {
    font-size: 0.8rem;
  }
}
</style>
