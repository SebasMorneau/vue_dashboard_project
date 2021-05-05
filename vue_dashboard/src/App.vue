<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-row no-gutters>
        <v-col cols="12" sm="2">
          <TitleSideBar />
        </v-col>
        <v-col cols="12" sm="2">
          <ActionSideBar />
        </v-col>
        <v-col cols="12" sm="8">
          <Dashboard />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/Navbar";
import TitleSideBar from "./components/TitleSideBar";
import ActionSideBar from "./components/ActionSideBar";

export default {
  name: "App",

  components: {
    Dashboard,
    Navbar,
    TitleSideBar,
    ActionSideBar,
  },
};
</script>
