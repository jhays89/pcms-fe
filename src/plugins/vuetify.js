import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#2c3e50',
        accent: '#7367F0',
        'accent-dark': '#000000',
        secondary: '#b0bec5',
        error: '#b71c1c',
      },
    },
  },
}

export default new Vuetify(opts)