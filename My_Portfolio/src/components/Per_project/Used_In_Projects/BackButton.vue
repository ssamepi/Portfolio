<script></script>
<template>
  <router-link class="back" to="/projects"> ← Retour aux projets </router-link>
</template>

<style scoped>
.back {
  display: inline-block;
  background: linear-gradient(
    135deg,
    #1a3a5f, 
    #1a1a1a);
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.4s ease;
}

.back:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #102a4d, #222f47);
}

.back:active {
  transform: scale(0.98);
}
</style>
