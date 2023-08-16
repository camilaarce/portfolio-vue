<template>
  <NavBar />
  <Experiencia />
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
