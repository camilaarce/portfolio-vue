<template>
    <div class="container">
        <div class="titulo half-underline">Proyectos</div>
        <v-card class="custom-card mt-5">
            <v-card-text class="text-center ">
                <v-row>
                    <v-col cols="12" sm="6">
                        <a href="https://parasaborear-invitaciondigital.netlify.app/" target="_blank">
                            <v-btn variant="flat" size="large"
                                color="#ff00bf" append-icon="mdi-arrow-top-right" block>invitación digital</v-btn>
                                <v-img class="mt-2" src="../assets/837shots_so.png" cover></v-img></a>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <a href="https://tablero-tickets.netlify.app/" target="_blank"><v-btn variant="flat" size="large"
                                color="#ff00bf" append-icon="mdi-arrow-top-right" block>gestión de tickets</v-btn>
                                <v-img class="mt-2" src="../assets/941shots_so.png" cover></v-img></a>
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
}</style>