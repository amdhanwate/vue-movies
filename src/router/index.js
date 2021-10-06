import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
// import Movie from "../views/Movie.vue";
import MoviePage from "../views/MoviePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:movieID",
    name: "MoviePage",
    component: MoviePage,
  },
  {
    path: "/:pathMatch(.*)*", // NEW IN VUE 3
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
