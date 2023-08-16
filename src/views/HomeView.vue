<template>
  <NavBar />
  <section id="experiencia"><Experiencia /></section>
  <section id="educacion" class="mt-10"><Experiencia /></section>
  <section id="skills" class="mt-10"><Experiencia /></section>
  <section id="proyectos" class="mt-10"><Experiencia /></section>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import Experiencia from '@/components/Experiencia.vue';

// Components

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    Experiencia
},
});
</script>
