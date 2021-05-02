<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-row no-gutters>
        <v-col cols="12" sm="2">
          <TitleSideBar />
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" outlined tile> One of three columns </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card class="pa-2" outlined tile> One of three columns </v-card>
        </v-col>
      </v-row>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/Navbar";
import TitleSideBar from "./components/TitleSideBar";

export default {
  name: "App",

  components: {
    HelloWorld,
    Navbar,
    TitleSideBar,
  },

  data: () => ({
    //
  }),
};
</script>
