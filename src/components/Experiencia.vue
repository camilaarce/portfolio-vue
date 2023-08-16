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
export default {
    data: () => ({
        experiencias: [
            {
                id: 0,
                fecha: '2023 - actualidad',
                titulo: 'Frontend developer',
                empresa: 'CIID S.E.',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non laboriosam fugit fuga, quasi voluptatem ratione vero voluptate magni ut inventore atque aperiam assumenda, pariatur suscipit voluptatum iure dolores sint!'
            },
            {
                id: 1,
                fecha: '2023',
                titulo: 'Tutora de pares',
                empresa: 'Universidad Nacional de Santiago del Estero',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non laboriosam fugit fuga, quasi voluptatem ratione vero voluptate magni ut inventore atque aperiam assumenda, pariatur suscipit voluptatum iure dolores sint!'
            },
            {
                id: 2,
                fecha: '2021 - 2023',
                titulo: 'Ayudante de cátedra',
                empresa: 'Universidad Nacional de Santiago del Estero',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non laboriosam fugit fuga, quasi voluptatem ratione vero voluptate magni ut inventore atque aperiam assumenda, pariatur suscipit voluptatum iure dolores sint!'
            },
            {
                id: 3,
                fecha: '2021 - 2022',
                titulo: 'Operadora de call center',
                empresa: 'Express Telecomunicaciones S.A.',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non laboriosam fugit fuga, quasi voluptatem ratione vero voluptate magni ut inventore atque aperiam assumenda, pariatur suscipit voluptatum iure dolores sint!'
            },
        ]
    })
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

@media only screen and (max-width: 767px) {
    .container {
    padding: 0 15%;
}
}
</style>