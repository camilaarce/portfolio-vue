<template>
  <div class="container">
    <v-card class="custom-card mt-5 pa-5">
      <v-card-text class="text-center titulo"
        >Te doy la bienvenida a mi portfolio</v-card-text
      >
      <v-card-text>
        <v-row align="center">
          <v-col cols="12" sm="3">
            <v-avatar size="200px">
              <v-img src="../assets/perfil.jpeg" cover></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" sm="9">
            <p class="mb-2">
              Mi nombre es Camila Arce, tengo 27 años. Nací y vivo en la ciudad
              de Santiago del Estero, Argentina.
            </p>
            <p class="mb-2">
              Soy estudiante avanzada de la carrera Licenciatura en Sistemas de
              Información en la Universidad Nacional de Santiago del Estero.
              Actualmente, me desempeño como desarrolladora frontend en CIID
              S.E.
            </p>
            <p>Estoy en búsqueda de nuevas oportunidades laborales.</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.container {
  padding: 0 25%;
}

.custom-card {
  background-color: rgba(255, 0, 191, 0.1);
  color: #fff;
}

.v-avatar {
  border: 5px solid #ff00bf;
}

.titulo {
  font-size: 2rem;
}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0 15%;
  }

  .titulo {
    font-size: 1rem;
  }
}
</style>