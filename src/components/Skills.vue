<template>
  <div class="container">
    <div class="titulo half-underline">Skills</div>
    <v-card class="custom-card mt-5 pa-10">
      <v-row>
        <v-col cols="12" sm="6" v-for="skill in skills" :key="skill.id">
          <v-label>{{ skill.nombre }}</v-label>
          <v-progress-linear
            height="20"
            :model-value="skill.porcentaje"
            striped
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        id: 0,
        nombre: "HTML",
        porcentaje: 95,
      },
      {
        id: 1,
        nombre: "CSS",
        porcentaje: 95,
      },
      {
        id: 2,
        nombre: "JavaScript",
        porcentaje: 90,
      },
      {
        id: 3,
        nombre: "PHP",
        porcentaje: 70,
      },
      {
        id: 4,
        nombre: "Python",
        porcentaje: 75,
      },
      {
        id: 5,
        nombre: "MySQL",
        porcentaje: 90,
      },
      {
        id: 6,
        nombre: "Angular",
        porcentaje: 70,
      },
      {
        id: 7,
        nombre: "Vue JS",
        porcentaje: 95,
      },
      {
        id: 8,
        nombre: "Laravel",
        porcentaje: 75,
      },
      {
        id: 9,
        nombre: "FastAPI",
        porcentaje: 75,
      },
      {
        id: 10,
        nombre: "Figma",
        porcentaje: 95,
      },
      {
        id: 11,
        nombre: "Inglés",
        porcentaje: 65,
      },
    ],
  }),
};
</script>

<style scoped>
.container {
  padding: 0 25%;
}

.custom-card {
  background-color: rgba(255, 0, 191, 0.1);
  color: rgb(255, 198, 241);
}

.custom-card:hover {
  background-color: rgba(255, 0, 191, 0.3);
  transition: 1s;
}

.custom-card:not(:hover) {
  background-color: rgba(255, 0, 191, 0.1);
  transition: 1s;
}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0 15%;
  }
}
</style>