<template>
  <v-footer class="d-flex flex-column mt-10" color="black">
    <div class="d-flex w-100 align-center px-4 justify-center">
      <a :href="red.link" v-for="red in redes" :key="red.id"
        ><v-btn
          :icon="red.icon"
          class="mx-2 icons"
          variant="text"
          size="large"
          onclick=""
        ></v-btn
      ></a>
    </div>

    <div class="text-center my-5">
      {{ new Date().getFullYear() }} — <strong>Camila Arce</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    redes: [
      {
        id: 0,
        icon: "mdi-github",
        link: "https://github.com/camilaarce",
      },
      {
        id: 1,
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/camila-arce-96107b1b9/",
      },
    ],
  }),
};
</script>

<style scoped>
.icons {
  color: rgb(255, 117, 221);
}
</style>