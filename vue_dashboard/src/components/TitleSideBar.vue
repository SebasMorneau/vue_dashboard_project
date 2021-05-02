<template>
  <div>
    <v-row :align="align" no-gutters>
      <v-col cols="6">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Titre </v-list-item-title>
            <v-list-item-subtitle> Client Name </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="6">
        <v-list-item>
          <v-list-item-content class="d-flex align-end flex-column">
            <v-icon>mdi-star</v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <v-row :align="align" no-gutters>
      <v-list-item>
        <v-list-item-content>
          <v-col cols="12" sm="5">
            <v-list-item-subtitle> DÉBUT </v-list-item-subtitle>
            <v-list-item-title class="date"> 11 / 11 / 2020 </v-list-item-title>
          </v-col>
          <v-col cols="12" sm="2">
            <v-icon>mdi-arrow-right</v-icon>
          </v-col>
          <v-col cols="12" sm="5">
            <v-list-item-subtitle> FIN </v-list-item-subtitle>
            <v-list-item-title class="date"> 11 / 11 / 2020 </v-list-item-title>
          </v-col>
        </v-list-item-content>
      </v-list-item>
    </v-row>
    <v-row :align="align" no-gutters>
      <v-col cols="6"
        ><div class="d-flex align-center flex-column start-button active">
          Ouvert
        </div></v-col
      >
      <v-col cols="6"
        ><div class="d-flex align-center flex-column start-button disable">
          Fermé
        </div></v-col
      >
    </v-row>

    <v-row :align="align" no-gutters>
      <v-col cols="12">
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <img
              alt="Avatar"
              src="https://icon-library.com/images/106441_man.svg.svg"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title"> Tony Stark </v-list-item-title>
            <v-list-item-subtitle> Équipe Avengers </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <div v-for="(sidebarItem, i) in sidebarItems" :key="i">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="sidebarItems">
            {{ sidebarItem }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleSideBar",
  data() {
    return {
      sidebarItems: [
        "Informations",
        "Honoraires",
        "Tâches",
        "Dépenses",
        "Factures",
        "Fichiers",
        "Export",
        "Paramètres",
      ],
    };
  },
};
</script>

<style scoped>
* {
  background-color: #f2f2f2;
}
.date {
  font-size: 9px;
}
.start-button {
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
}
.disable {
  background-color: gainsboro;
}
.active {
  background-color: white;
}
.sidebarItems {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
