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

.titulo {
  color: #fff;
  font-size: 3rem;
}

.half-underline {
  position: relative;
  display: inline-block;
}

.half-underline::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60%; 
  height: 3px;
  background-color: rgb(255, 0, 191); 
}

a {
  text-decoration: none;
  color: #ffffff;
}

a:hover {
  color: rgb(255, 198, 241);
  font-size: 1.5rem;
  transition: 1s;
}

a:not(:hover) {
  color: #fff;
  font-size: 1rem;
  transition: 1s;
}

@media only screen and (max-width: 767px) {
  .titulo {
    font-size: 2rem;
  }
}
</style>
