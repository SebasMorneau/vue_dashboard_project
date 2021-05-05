<template>
  <div>
    <v-toolbar flat>
      <v-btn icon>
        <v-icon color="primary">mdi-repeat</v-icon>
      </v-btn>
      <v-toolbar-title>Tenue des journaux</v-toolbar-title>
      <v-btn icon>
        <v-icon color="primary">mdi-pencil-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-tabs>
      <v-tabs-slider color="white"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item.id">
        <v-icon class="tab-select-icon">{{ item.icon }}</v-icon>
        {{ item.text }}
      </v-tab> </v-tabs
    ><v-divider></v-divider>
    <v-list>
      <v-list-item>
        <template>
          <v-list-item-icon>
            <v-icon>mdi-file-document-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="margin-left: 10px"
              >Description</v-list-item-title
            >
          </v-list-item-content>
        </template>
      </v-list-item>
      <v-list-item>
        <template>
          <v-list-item-icon>
            <v-icon>mdi-checkbox-blank-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="margin-left: 10px"
              >Statut</v-list-item-title
            >
          </v-list-item-content>
        </template>
      </v-list-item>
      <v-list-item>
        <template>
          <v-list-item-icon>
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-subtitle style="margin-left: 10px"
              ><span
                class="text--primary"
                style="font-weight: 400; font-size: 16px; margin-right: 10px"
                >Équipe</span
              >Tony Stark</v-list-item-subtitle
            >
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "DescriptionContainer",
  data() {
    return {
      items: [
        { id: "0", text: "Description", icon: "mdi-file-document-outline" },
        { id: "1", text: "Statut", icon: "mdi-checkbox-blank-circle-outline" },
        { id: "2", text: "Équipe", icon: "mdi-account-group-outline" },
        { id: "3", text: "Honoraires", icon: "mdi-currency-usd" },
        { id: "4", text: "Durée", icon: "mdi-timer-outline" },
        { id: "5", text: "Dates", icon: "mdi-calendar-range" },
        { id: "6", text: "Checklist", icon: "mdi-format-list-checks" },
        { id: "7", text: "Champs", icon: "mdi-grid" },
      ],
    };
  },
};
</script>

<style scoped>
.v-tab {
  background-color: #f2f2f2;
  border-right: 1px solid #d8d6d4;
}
.v-tab--active {
  background-color: white;
}
.v-tabs {
  border-top: 1px solid #d8d6d4;
  border-left: 1px solid #d8d6d4;
}
.tab-select-icon {
  padding: 5px;
}
</style>
