<template>
  <div>
    <v-card class="d-flex justify-space-around mb-6" max-width="423">
      <v-tabs>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab v-for="action in actions" :key="action.id">
          {{ action.text }}
        </v-tab>
      </v-tabs></v-card
    >
    <v-card class="d-flex justify-space-around mb-6" max-width="423">
      <v-card-text
        text-left
        style="font-weight: 600; color: black; font-size: 16px"
        >Poste
        <span style="color: #fb8c3f">Assistant comptable</span></v-card-text
      >
    </v-card>
    <v-card class="d-flex justify-space-around mb-6" max-width="423">
      <v-card-text
        text-left
        style="font-weight: 600; color: black; font-size: 16px"
        >Site <span style="color: #fb8c3f"> Paris</span></v-card-text
      >
    </v-card>
    <v-card
      :elevation="0"
      class="d-flex justify-space-around mb-6"
      max-width="423"
    >
      <v-icon>mdi-plus</v-icon>
      <v-card-text text-left style="font-weight: 600; font-size: 16px"
        >Ajouter un filtre</v-card-text
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FilterContainer",
  data() {
    return {
      actions: [
        { id: "0", text: "Profil" },
        { id: "1", text: "Ressource" },
        { id: "2", text: "Champ" },
        { id: "3", text: "Référence" },
      ],
    };
  },
};
</script>

<style scoped>
.v-card {
  margin: 20px;
  border: 0;
}
</style>
