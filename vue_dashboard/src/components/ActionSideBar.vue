<template>
  <div>
    <v-toolbar flat color="primary_light">
      <v-toolbar-title>Tâches</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="primary">mdi-file-move-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="primary">mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list>
      <v-list-item-group color="primary" multiple>
        <v-list-item>
          <template>
            <v-list-item-action>
              <v-checkbox color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title style="font-weight: 600"
                >Sélectionner tout</v-list-item-title
              >
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list>
      <v-list-item-group multiple>
        <v-list-item style="background-color: white">
          <template>
            <v-list-item-action>
              <v-checkbox color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-icon>
              <v-icon class="filter-select-item" color="primary"
                >mdi-repeat</v-icon
              >
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="color: #fb8c3f; margin-left: 10px"
                >Tenue des journaux</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon class="filter-select-item">
                <v-icon class="filter-select-item" color="primary"
                  >mdi-chevron-up</v-icon
                >
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list>
      <v-list-item-group color="primary" multiple>
        <v-list-item v-for="(task, i) in tasks" :key="i">
          <template>
            <v-list-item-action>
              <v-checkbox color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <div>
                <div class="date" v-text="task.date"></div>
              </div>
              <v-list-item-title v-text="task.title"></v-list-item-title>
              <v-list-item-subtitle v-text="task.assign"></v-list-item-subtitle>
              <v-list-item-subtitle
                v-text="task.document"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "ActionSideBar",
  data() {
    return {
      tasks: [
        {
          date: "15 NOV",
          title: "Tenue des journaux",
          assign: "Tony Stark",
          document: "Document en attente",
        },
        {
          date: "15 NOV",
          title: "Tenue des journaux",
          assign: "Tony Stark",
          document: "Document en attente",
        },
        {
          date: "15 NOV",
          title: "Récupération balance",
          assign: "Non assigné",
          document: "Document en attente",
        },
        {
          date: "15 NOV",
          title: "Récupération écritures",
          assign: "Non assigné",
          document: "Document en attente",
        },
        {
          date: "15 NOV",
          title: "Révision",
          assign: "Non assigné",
          document: "Document en attente",
        },
        {
          date: "15 NOV",
          title: "Situiations intermédiaires",
          assign: "Non assigné",
          document: "Document en attente",
        },
        {
          date: "15 NOV",
          title: "Projet de comptes annuels",
          assign: "Non assigné",
          document: "Document en attente",
        },
        {
          date: "15 NOV",
          title: "Vérification des livrables",
          assign: "Non assigné",
          document: "Document en attente",
        },
        {
          date: "15 NOV",
          title: "Vérification des livrables",
          assign: "Non assigné",
          document: "Document en attente",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-list {
  padding: 0;
  background-color: #fef1e7;
  border-bottom: 1px solid #e4dcd6;
}
.date {
  border: 1px solid #fdd1b2;
  border-radius: 2px;
  width: 55px;
  font-size: 12px;
  font-weight: 600;
  color: #fb8c3f;
  padding: 4px;
  background-color: #fee8d8;
  margin-bottom: 10px;
}
</style>
