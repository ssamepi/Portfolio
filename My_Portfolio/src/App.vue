<script>
import Header from '@/components/Header.vue'
import Email from '@/components/Email.vue'

export default {
  components: {
    Header,
    Email
  }
}
</script>

<template>
  <div>
    <Header />
    <router-view />
    <Email />
  </div>
</template>

<style scoped>
</style>