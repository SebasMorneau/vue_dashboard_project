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
                  v-bind:style="'height: ' + date.hour + '%'"
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
            <v-layout align-center justify-center column fill-height>
              <v-flex row date-display>
                <v-icon>mdi-chevron-left-box-outline</v-icon>
                <p>11/11/2020 - 11/11/2020</p>
                <v-icon>mdi-chevron-right-box-outline</v-icon>
              </v-flex>
            </v-layout>
          </v-col>
        </v-row>
        <v-row>
          <v-container>
            <div class="list">
              <v-row>
                <v-col><h4>Budget restant</h4></v-col>
                <v-col align="right"><b>20</b>h</v-col>
              </v-row>
              <v-row>
                <v-icon>mdi-circle-medium</v-icon>
                <v-col><p>Disponibilité restante</p></v-col>
                <v-col align="right"><b>6</b>h</v-col>
              </v-row>
              <v-row>
                <v-icon style="color: #fb8c3f">mdi-circle-medium</v-icon>
                <v-col><p>Planifié sur d'autres tâches</p></v-col>
                <v-col align="right"><b>2</b>h</v-col>
              </v-row>
              <v-row style="color: #fb8c3f">
                <v-icon style="color: #fb8c3f">mdi-circle-medium</v-icon>
                <v-col><p>Planifié sur cette tâchee</p></v-col>
                <v-col align="right"><b>2</b>h</v-col>
              </v-row>
            </div>
          </v-container>
        </v-row>
      </v-container>

      <v-container style="margin-top: 160px">
        <v-row>
          <v-container>
            <v-card>
              <v-tabs center-active>
                <v-tab>Manuel</v-tab>
                <v-tab>
                  <v-icon>mdi-format-horizontal-align-right</v-icon></v-tab
                >
                <v-tab>
                  <v-icon>mdi-format-horizontal-align-center</v-icon></v-tab
                >
                <v-tab>
                  <v-icon>mdi-format-horizontal-align-left</v-icon></v-tab
                >
              </v-tabs>
            </v-card>
          </v-container>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Graph",
  data() {
    return {
      height: 0,
      dates: [
        {
          id: "0",
          number: "28",
          month: "Fev",
          hour: "70",
        },
        {
          id: "1",
          number: "1",
          month: "Mar",
          hour: "40",
        },
        {
          id: "2",
          number: "2",
          month: "Mar",
          hour: "20",
        },
        {
          id: "3",
          number: "3",
          month: "Mar",
          hour: "0",
        },
        {
          id: "4",
          number: "4",
          month: "Mar",
          hour: "100",
        },
        {
          id: "5",
          number: "5",
          month: "Mar",
          hour: "70",
        },
        {
          id: "6",
          number: "6",
          month: "Mar",
          hour: "90",
        },
      ],
    };
  },
  methods: {
    plusHeight: function (id) {
      // add 10 each time the button is clicked by a query to the element
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
/* Graphical Bar */
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
/* Date, Time and budget */
.date-display p {
  border: 1px solid #d8d6d4;
  background-color: #eeeeee;
  margin: 5px;
  padding: 4px;
  font-size: 13px;
  border-radius: 5px;
}
.date-display .v-icon {
  font-size: 35px;
}
.list .row {
  margin-bottom: -30px;
  font-size: 14px;
}
.list .v-icon {
  margin-top: -15px;
}
.action {
  float: left;
  border: 1px solid #d8d6d4;
}
</style>
