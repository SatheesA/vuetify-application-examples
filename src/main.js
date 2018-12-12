// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/es5/util/colors";
import DefaultLayout from "./layouts/DefaultLayout";
import EmptyLayout from "./layouts/EmptyLayout";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("empty-layout", EmptyLayout);
Vue.component("default-layout", DefaultLayout);

Vue.use(Vuetify, {
  theme: {
    primary: colors.blueGrey.darken2,
    secondary: colors.grey.lighten3,
    accent: colors.cyan.darken4,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  },
  iconfont: "mdi"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
