<template>
    <v-app-bar color="transparent" elevation="0">
        <v-app-bar-nav-icon color="#fff" @click.stop="drawer = !drawer" v-show="isPhone()"></v-app-bar-nav-icon>
        <v-app-bar-title>CAMILA ARCE</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-app-bar-title v-show="!isPhone()">experiencia</v-app-bar-title>
        <v-app-bar-title v-show="!isPhone()">educacion</v-app-bar-title>
        <v-app-bar-title v-show="!isPhone()">skills</v-app-bar-title>
        <v-app-bar-title v-show="!isPhone()">proyectos</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="custom-drawer">
    <v-list nav>
      <v-list-item>experiencia</v-list-item>
      <v-list-item>educación</v-list-item>
      <v-list-item>skills</v-list-item>
      <v-list-item>proyectos</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
    }),
    methods: {
        isPhone() {
            if (screen.width < 600) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
.v-app-bar-title, .v-list-item {
    color: #fff;
}

.custom-drawer {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>