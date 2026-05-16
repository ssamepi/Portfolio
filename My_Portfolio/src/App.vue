<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<style scoped>
</style>