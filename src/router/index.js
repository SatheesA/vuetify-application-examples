import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/HomeView";
import Layouts from "../pages/LayoutsView";
import LayoutsCentered from "../pages/Layouts/CenteredView";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      component: Home
    },

    {
      path: "/layouts",
      component: Layouts,
      children: [
        {
          path: "centered",
          component: LayoutsCentered,
          meta: { layout: "empty" }
        }
      ]
    }
  ]
});
