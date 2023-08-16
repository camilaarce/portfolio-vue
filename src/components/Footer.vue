<template>
    <v-footer class="d-flex flex-column mt-10" color="black">
        <div class="d-flex w-100 align-center px-4 justify-center">
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 icons" :icon="icon" variant="plain" size="small"></v-btn>
        </div>

        <div class="text-center my-5">
            {{ new Date().getFullYear() }} — <strong>Camila Arce</strong>
        </div>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>

<style scoped>
    .icons {
        color: rgb(255, 117, 221);
    }
</style>