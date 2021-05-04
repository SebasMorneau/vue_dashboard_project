<template>
  <v-row>
    <v-col cols="9" style="background-color: red">
      <v-col>
        <div class="purple">
          <div class="blue"></div>
        </div>
      </v-col>
      <v-col>
        <v-btn icon>
          <v-icon color="primary">mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn icon>
          <v-icon color="primary">mdi-minus</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <p>28</p>
        <p>Fev</p>
      </v-col>
    </v-col>
    <v-col cols="3" style="background-color: blue">
      <v-row>
        <v-col cols="12">
          <v-icon>mdi-chevron-left-box-outline</v-icon>
          11/11/2020 - 11/11/2020
          <v-icon>mdi-chevron-right-box-outline</v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-list>
          <v-list-item>
            <template>
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle style="margin-left: 10px"
                  >Budget restant</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-content class="d-flex flex-row-reverse">
                <v-list-item-subtitle class="d-flex flex-row-reverse"
                  >20h</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item>
            <template>
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <v-icon>mdi-circle-medium</v-icon>
                  Disponibilité restante</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-content class="d-flex flex-row-reverse">
                <v-list-item-subtitle
                  class="d-flex flex-row-reverse"
                  style="margin-left: 10px"
                  >6h</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item>
            <template>
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <v-icon>mdi-circle-medium</v-icon>Planifié sur d'autres
                  tâches</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-content class="d-flex flex-row-reverse">
                <v-list-item-subtitle class="d-flex flex-row-reverse"
                  >2h</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item>
            <template>
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <v-icon>mdi-circle-medium</v-icon>Planifié sur cette
                  tâche</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-content class="d-flex flex-row-reverse">
                <v-list-item-subtitle
                  class="d-flex flex-row-reverse"
                  style="margin-left: 10px"
                  >2h</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list>
        <v-card class="d-flex justify-space-around mb-6" max-width="423">
          <v-tabs>
            <v-tabs-slider color="white"></v-tabs-slider>
            <v-tab> Manuel </v-tab>
            <v-tab>
              <v-icon>mdi-format-horizontal-align-right</v-icon>
            </v-tab>
            <v-tab>
              <v-icon>mdi-format-horizontal-align-center</v-icon>
            </v-tab>
            <v-tab> <v-icon>mdi-format-horizontal-align-left</v-icon> </v-tab>
          </v-tabs></v-card
        >
      </v-row></v-col
    >
  </v-row>
</template>

<script>
export default {
  name: "Graph",
  data() {
    return {};
  },
};
</script>

<style scoped>
.purple {
  height: 300px;
  width: 40px;
  background-color: brown;
}
.blue {
  height: 20%;
  background-color: blue;
}
</style>
