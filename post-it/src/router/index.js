import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import CreatePost from "@/views/post/CreatePost.vue";
import EditPost from "@/views/edit/EditPost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/details/:id",
    name: "details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DetailsView,
  },
  {
    path: "/post/CreatePost",
    name: "CreatePost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreatePost,
  },
  {
    path: "/edit/:id/EditPost",
    name: "EditPost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditPost,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
