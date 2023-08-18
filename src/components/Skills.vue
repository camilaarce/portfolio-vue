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
import SkillsRepository from '../repositories/SkillsRepository'

export default {
  data: () => ({
    skills: [],
  }),
  async mounted() {
    this.skills = await SkillsRepository.getSkills()
  }
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