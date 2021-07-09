import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cat from "../views/Cats.vue";
import Dog from "../views/Dogs.vue";
import Pet from "../views/Pets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cats",
    name: "cats",
    component: Cat,
  },
  {
    path: "/dogs",
    name: "dogs",
    component: Dog,
  },
  {
    path: "/pets/:species/:id",
    name: "pet",
    component: Pet,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
