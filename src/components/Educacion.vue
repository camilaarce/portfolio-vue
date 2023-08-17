<template>
  <div class="container">
    <div class="titulo half-underline">Educación</div>
    <v-card class="custom-card mt-5">
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            v-for="edu in educacion"
            :key="edu.id"
            class="text-center px-10"
          >
            <v-avatar color="#ff00bf" size="100" class="mb-5">
              <span
                class="font-weight-bold text-white"
                style="font-size: x-large"
                >{{ edu.fecha }}</span
              >
            </v-avatar>
            <p class="font-weight-bold mb-2" style="font-size: larger">
              {{ edu.titulo }}
            </p>
            <p class="">{{ edu.institucion }}</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    educacion: [
      {
        id: 0,
        fecha: "2023",
        titulo: "Bachiller en Economía y Gestión de las Organizaciones",
        institucion: "Colegio Madre Mercedes Guerra",
      },
      {
        id: 1,
        fecha: "En curso",
        titulo: "Licenciatura en Sistemas de Información",
        institucion: "Universidad Nacional de Santiago del Estero",
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