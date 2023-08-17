<template>
    <div class="container">
        <div class="titulo half-underline">Proyectos</div>
        <v-card class="custom-card mt-5">
            <v-card-text>Para ver proyectos realizados por mí, te invito a visitar mi perfil en GitHub</v-card-text>
            <v-card-text class="text-center ">
                <a href="https://github.com/camilaarce" target="_blank"><v-btn variant="flat" color="#ff00bf" prepend-icon="mdi-github" append-icon="mdi-arrow-top-right">PERFIL DE GITHUB</v-btn></a>
                
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