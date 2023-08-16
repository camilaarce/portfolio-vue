<template>
    <v-app-bar color="transparent" elevation="0">
        <v-app-bar-nav-icon color="#fff" @click.stop="drawer = !drawer" v-show="isPhone()"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-app-bar-title>CAMILA ARCE</v-app-bar-title>
        <v-spacer v-show="!isPhone()"></v-spacer>
        <v-spacer v-show="!isPhone()"></v-spacer>
        <v-app-bar-title v-show="!isPhone()"><a href="#experiencia" v-smooth-scroll>experiencia</a></v-app-bar-title>
        <v-app-bar-title v-show="!isPhone()"><a href="#educacion" v-smooth-scroll>educacion</a></v-app-bar-title>
        <v-app-bar-title v-show="!isPhone()"><a href="#skills" v-smooth-scroll>skills</a></v-app-bar-title>
        <v-app-bar-title v-show="!isPhone()"><a href="#proyectos" v-smooth-scroll>proyectos</a></v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="custom-drawer">
    <v-list nav>
      <v-list-item><a href="#experiencia" v-smooth-scroll>experiencia</a></v-list-item>
      <v-list-item><a href="#educacion" v-smooth-scroll>educación</a></v-list-item>
      <v-list-item><a href="#skills" v-smooth-scroll>skills</a></v-list-item>
      <v-list-item><a href="#proyectos" v-smooth-scroll>proyectos</a></v-list-item>
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