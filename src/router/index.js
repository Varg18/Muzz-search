import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "@/views/StartPage.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import HomePage from "@/views/HomePage.vue";
import ADS from "@/views/ADS.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: StartPage,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/ads",
    name: "ads",
    component: ADS,
  },
  {
    path: "*",
    name: "catchAll",
    component: StartPage,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
