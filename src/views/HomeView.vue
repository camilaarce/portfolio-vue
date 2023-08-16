<template>
  <NavBar />
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';

// Components

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar
  },
});
</script>
