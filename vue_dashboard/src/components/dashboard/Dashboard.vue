<template>
  <div>
    <DescriptionContainer />

    <v-divider></v-divider>
    <FilterContainer />

    <v-divider></v-divider>
    <v-row>
      <v-col cols="8">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title" style="margin: 10px; color: grey">
              Nom
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-row-reverse">
          <div class="filter-box selected" justify="center" align="center">
            Planifié futur
            <v-icon>mdi-arrow-down</v-icon>
          </div>
          <div class="filter-box" justify="center" align="center">
            Prix de vente
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-check-circle-outline</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title"> Tony Stark </v-list-item-title>
            <v-list-item-subtitle> Équipe Avengers </v-list-item-subtitle>
          </v-list-item-content>
          <div class="d-flex flex-row-reverse">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  <p class="hours">2h</p></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item>
      </v-col>
    </v-row>
    <Graph />

    <v-divider></v-divider>
    <v-row>
      <v-col cols="12">
        <v-list-item
          v-for="teammate in teammates"
          v-bind:key="teammate.id"
          class="seperate"
        >
          <v-list-item-avatar>
            <img alt="Avatar" :src="teammate.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">{{
              teammate.name
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ teammate.job }}</v-list-item-subtitle>
          </v-list-item-content>
          <div class="d-flex flex-row-reverse">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  <p class="hours">{{ teammate.hour }}</p></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item>
      </v-col>
    </v-row>
    <v-list>
      <v-list-item v-for="detail in details" v-bind:key="detail.id">
        <template>
          <v-list-item-icon>
            <v-icon>{{ detail.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-subtitle style="margin-left: 10px"
              ><span
                class="text--primary"
                style="font-weight: 500; font-size: 16px; margin-right: 10px"
                >{{ detail.text }}</span
              >{{ detail.info }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import DescriptionContainer from "./DescriptionContainer";
import FilterContainer from "./FilterContainer";
import Graph from "./Graph";

export default {
  name: "Dashboard",
  components: {
    DescriptionContainer,
    FilterContainer,
    Graph,
  },

  data() {
    return {
      teammates: [
        {
          id: "0",
          avatar:
            "https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-24-512.png",
          name: "Logan",
          job: "Bûcheron",
          hour: "2h",
        },
        {
          id: "1",
          avatar:
            "https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-08-512.png",
          name: "Clint Barton",
          job: "Archer",
          hour: "1h",
        },
        {
          id: "2",
          avatar:
            "https://cdn3.iconfinder.com/data/icons/marvel-avatars-flaticons/64/black_widow-avangers-marvel-avatars-gartoon-marvel_avatars-hero-512.png",
          name: "Natasha Romanoff",
          job: "Chef par intérim",
        },
        {
          id: "3",
          avatar:
            "https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-27-512.png",
          name: "Thanos",
          job: "Ressource humaine",
        },
        {
          id: "4",
          avatar:
            "https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-09-512.png",
          name: "Steve Rogers",
          job: "Capitaine à la retraite",
        },
        {
          id: "5",
          avatar:
            "https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-16-512.png",
          name: "Peter Parker",
          job: "Stagiaire",
        },
      ],
      details: [
        {
          id: "0",
          text: "Honoraires",
          icon: "mdi-currency-usd",
          info: "17.5 millions $/h",
        },
        { id: "1", text: "Durée", icon: "mdi-timer-outline", info: "2h" },
        {
          id: "2",
          text: "Date butoir",
          icon: "mdi-calendar-range",
          info: "11/11/2020",
        },
        {
          id: "3",
          text: "Checklist",
          icon: "mdi-format-list-checks",
          info: "1/5",
        },
        { id: "4", text: "Champs", icon: "mdi-grid" },
      ],
    };
  },
};
</script>
<style scoped>
.filter-box {
  border-left: 1px solid #d8d6d4;
  height: 70px;
  padding: 10px;
  padding-top: 23px;
}
.selected {
  background-color: #f0f0f0;
  font-weight: 600;
}
.v-icon {
  padding-left: 5px;
}
.hours {
  color: #fb8c3f;
  background-color: #fdf2ea;
  border: 1px solid #fae4d5;
  padding: 2px;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
}
.seperate {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
