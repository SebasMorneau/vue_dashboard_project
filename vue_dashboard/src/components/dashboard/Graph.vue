<template>
  <v-row>
    <v-col cols="8">
      <v-container>
        <v-row>
          <v-col class="text-center" v-for="date in dates" v-bind:key="date.id">
            <v-col align="center" justify="center">
              <div class="progress-bar">
                <div
                  class="progress-data"
                  v-bind:id="'progress-' + date.id"
                  v-bind:style="'height: ' + height + '%'"
                ></div>
              </div>
            </v-col>
            <v-col>
              <v-btn icon v-on:click="plusHeight(date.id)">
                <v-icon color="primary">mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn icon v-on:click="minusHeight(date.id)">
                <v-icon color="primary">mdi-minus</v-icon>
              </v-btn>
            </v-col>
            <v-col style="margin-top: 10px" class="text-center">
              <p>{{ date.number }}</p>
              <p style="margin-top: -10px">{{ date.month }}</p>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-col>

    <v-col cols="4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-icon>mdi-chevron-left-box-outline</v-icon>
            11/11/2020 - 11/11/2020
            <v-icon>mdi-chevron-right-box-outline</v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
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
                <v-tab>
                  <v-icon>mdi-format-horizontal-align-left</v-icon>
                </v-tab>
              </v-tabs></v-card
            >
          </v-col>
        </v-row></v-container
      ></v-col
    >
  </v-row>
</template>

<script>
export default {
  name: "Graph",
  data() {
    return {
      height: 10,
      dates: [
        {
          id: "0",
          number: "28",
          month: "Fev",
        },
        {
          id: "1",
          number: "1",
          month: "Mar",
        },
        {
          id: "2",
          number: "2",
          month: "Mar",
        },
        {
          id: "3",
          number: "3",
          month: "Mar",
        },
        {
          id: "4",
          number: "4",
          month: "Mar",
        },
        {
          id: "5",
          number: "5",
          month: "Mar",
        },
        {
          id: "6",
          number: "6",
          month: "Mar",
        },
      ],
    };
  },
  methods: {
    plusHeight: function (id) {
      var newHeight =
        parseInt(document.querySelector("#progress-" + id).style.height) - 10;
      document.querySelector("#progress-" + id).style.height = newHeight + "%";
    },
    minusHeight: function (id) {
      var newHeight =
        parseInt(document.querySelector("#progress-" + id).style.height) + 10;
      // keep the height within 100, so that is does not expend the div
      newHeight < 101
        ? (document.querySelector("#progress-" + id).style.height =
            newHeight + "%")
        : "";
    },
  },
};
</script>

<style scoped>
.progress-bar {
  height: 200px;
  width: 40px;
  background-color: #fb8c3f;
}
.progress-data {
  background-color: #d8d6d4;
}
.v-btn__content i {
  padding: 20px;
  border: 1px solid #d8d6d4;
  border-radius: 3px;
}
</style>
