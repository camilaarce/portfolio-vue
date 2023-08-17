<template>
  <v-app>
    <v-main>
      <div style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        " v-if="loading">
        <v-progress-circular :size="100" :width="7" color="#ff00bf" indeterminate><v-icon icon="mdi-xml"
            size="65"></v-icon>
        </v-progress-circular>
      </div>
      <div v-else>
        <router-view />
        <div class="burbujas" v-if="!isPhone()">
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
        </div>
      </div>

    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    loading: true,
  }),

  methods: {
    isPhone() {
      if (screen.width < 600) {
        return true;
      } else {
        return false;
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");


* {
  font-family: "Comfortaa", cursive;
}

.v-main {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("./assets/pexels-luis-gomes-546819.jpg");
  background-size: cover;
  background-position: start center;
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
  background-color: #ff00bf;
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




.burbuja {
  width: 80px;
  height: 80px;
  opacity: .3;
  position: absolute;
  bottom: 0;
  left: 5%;
  border: 7px solid #ff00bf;
  animation: burbujas 3s linear infinite;
  z-index: 0;
}

.burbuja:nth-child(1) {
  width: 50px;
  height: 50px;
  left: 10%;
  animation-duration: 4s;
  animation-delay: 0.5s;
}

.burbuja:nth-child(2) {
  width: 70px;
  height: 70px;
  left: 15%;
  animation-duration: 2s;
  animation-delay: 1s;
}

.burbuja:nth-child(3) {
  width: 30px;
  height: 30px;
  left: 20%;
  animation-duration: 1.5s;
  animation-delay: 0.3s;
}

.burbuja:nth-child(4) {
  width: 80px;
  height: 80px;
  left: 80%;
  animation-duration: 3s;
  animation-delay: 0s;
}

.burbuja:nth-child(5) {
  width: 50px;
  height: 50px;
  left: 90%;
  animation-duration: 4s;
  animation-delay: 0.5s;
}

.burbuja:nth-child(6) {
  width: 70px;
  height: 70px;
  left: 85%;
  animation-duration: 2s;
  animation-delay: 1s;
}

.burbuja:nth-child(7) {
  width: 30px;
  height: 30px;
  left: 80%;
  animation-duration: 1.5s;
  animation-delay: 0.3s;
}


@keyframes burbujas {
  0% {
    bottom: 0;
    opacity: 0;
  }

  50% {
    opacity: .4;
  }

  100% {
    bottom: 100%;
    opacity: 0;
  }
}
</style>
