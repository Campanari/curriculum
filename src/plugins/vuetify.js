import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.shades.white,
    secondary: colors.grey.lighten5,
    accent: colors.orange.lighten1,
    error: colors.red.accent3
  }
})
