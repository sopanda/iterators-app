import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/summary",
      component: () =>
        import(/* webpackChunkName: "summary" */ "./views/Summary.vue")
    }
  ]
});
