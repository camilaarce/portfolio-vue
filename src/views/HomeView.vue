<template>
  <NavBar />
  <section id="bienvenida"><Bienvenida /></section>
  <section id="experiencia" class="mt-10"><Experiencia /></section>
  <section id="educacion" class="mt-10"><Educacion /></section>
  <section id="skills" class="mt-10"><Skills /></section>
  <section id="proyectos" class="mt-10"><Proyectos /></section>
  <Up />
  <Footer />
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Experiencia from "@/components/Experiencia.vue";
import Educacion from "@/components/Educacion.vue";
import Skills from "@/components/Skills.vue";
import Bienvenida from "@/components/Bienvenida.vue";
import Proyectos from "@/components/Proyectos.vue";
import Up from "@/components/Up.vue";

// Components

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    Footer,
    Experiencia,
    Educacion,
    Skills,
    Bienvenida,
    Proyectos,
    Up
},
});
</script>

<style scoped>
@keyframes show {
  from {
    opacity: 0;
    scale: 25%;
  }
  to {
    opacity: 1;
    scale: 100%;
  }
}

section {
  view-timeline-name: --section;
  view-timeline-axis: block;

  animation-timeline: --section;
  animation-name: show;

  animation-range: entry 25% cover 50%;
	animation-fill-mode: both;
}

#proyectos {
  margin-bottom: 25vh;
}
</style>
