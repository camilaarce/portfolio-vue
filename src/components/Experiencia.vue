<template>
    <div class="container">
        <div class="titulo half-underline">Experiencia</div>
        <v-card class="custom-card mt-5" v-for="exp in experiencias" :key="exp.id">
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="4">{{ exp.fecha }}</v-col>
                    <v-col cols="12" sm="8">
                        <p class="font-weight-bold">{{ exp.titulo }} • {{ exp.empresa }}</p>
                        <br>
                        <p>{{ exp.descripcion }}</p>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import ExperienciaRepository from '../repositories/ExperienciaRepository'

export default {
    data: () => ({
        experiencias: []
    }),
    async mounted() {
        this.experiencias = await ExperienciaRepository.getExperiencias()
    }
}
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