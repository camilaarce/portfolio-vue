<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

* {
  font-family: 'Comfortaa', cursive;
}

.v-main {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./assets/pexels-luis-gomes-546819.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
