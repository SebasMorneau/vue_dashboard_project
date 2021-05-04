import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#fb8c3f',
        primary_light: '#FEE8D8',
      },
    },
  },
});
