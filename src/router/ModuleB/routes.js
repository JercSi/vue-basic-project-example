import { guard1 } from "../NavigationGuards";

export const routes = [
  {
    path: "/home-lazy",
    name: "HomeLazy",
    component: () =>
      import(/* webpackChunkName: "homelazy" */ "@/views/ModuleB/HomeLazy.vue"),
    beforeEnter: guard1
  },
  {
    path: "/localization",
    name: "Localization",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ModuleB/Localization.vue")
  }
];
