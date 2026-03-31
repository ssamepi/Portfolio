<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'
import logo_Vue from "@/assets/logo_techno/Vue.png"
import logo_React from "@/assets/logo_techno/React.png"
import logo_JavaScript from "@/assets/logo_techno/JavaScript.png"
import logo_HTML from "@/assets/logo_techno/HTML.png"
import logo_CSS from "@/assets/logo_techno/CSS.png"
import logo_SQL from "@/assets/logo_techno/SQL.png"
import logo_PHP from "@/assets/logo_techno/PHP.png"
import logo_Docker from "@/assets/logo_techno/Docker.png"

export default {
    components: {
      Header,
      Main,
      Footer
    },

    data() {
      return {
        projects: [
          { title: "Expérience Utilisateur", description: "Application de photographie", link:"https://www.figma.com/design/SPSCGBJxJvP16Pk9U5t9DU/YOWL?node-id=1-3727&p=f&t=cQAwPfRiqUb8Ux2d-0" },
          { title: "Etodo Planning", description: "Planning de gestion de tâches"},
          { title: "Portfolio", description: "Site personnel"}
          ],

      techno: [
        {title: "Vue", image: logo_Vue},
        {title: "React", image: logo_React},
        {title: "JavaScript", image: logo_JavaScript},
        {title: "HTML", image: logo_HTML},
        {title: "CSS", image: logo_CSS},
        {title: "SQL", image: logo_SQL},
        {title: "PHP", image: logo_PHP},
        {title: "Docker", image: logo_Docker}
        ]
      }
    },

    methods: {
      scrollTo(section) {
        document.getElementById(section).scrollIntoView({
          behavior: "smooth"
        })
      }
    }
  }
</script>

<template>
  <div>
    <Header :scrollTo="scrollTo" />
    <Main :projects="projects" :scrollTo="scrollTo" :techno="techno" />
    <Footer />
  </div>
</template>

<style scoped>
</style>