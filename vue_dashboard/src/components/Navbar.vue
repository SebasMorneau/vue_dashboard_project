<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <v-img
        alt="Beeye Logo"
        class="shrink mr-2"
        contain
        src="../assets/LogoFull.png"
        transition="scale-transition"
        width="90"
      />
    </div>
    <v-toolbar-title
      class="toolbar-items"
      v-for="toolbarItem in toolbarItems"
      :key="toolbarItem"
      >{{ toolbarItem }}</v-toolbar-title
    >

    <v-spacer></v-spacer>
    <v-toolbar-title
      v-for="toolbarItemIcon in toolbarItemsIcons"
      :key="toolbarItemIcon"
    >
      <v-btn icon>
        <v-icon class="toolbar-items">{{ toolbarItemIcon }}</v-icon>
      </v-btn>
    </v-toolbar-title>

    <v-btn class="v-btn plus-icon" small color="primary">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-avatar class="toolbar-avatar" size="36px">
      <img
        alt="Avatar"
        src="https://icon-library.com/images/106441_man.svg.svg"
      />
    </v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      toolbarItems: [
        "Clients",
        "Missions",
        "Tâches",
        "Équipe",
        "Temps",
        "Analyse",
      ],
      toolbarItemsIcons: [
        "mdi-magnify",
        "mdi-bell-ring-outline",
        "mdi-help-circle-outline",
        "mdi-cog-outline",
      ],
    };
  },
};
</script>

<style scoped>
.toolbar-items {
  padding: 10px;
}

.toolbar-avatar {
  margin-left: 17px;
}

.plus-icon {
  margin-left: 10px;
}
</style>
