import Home from "@/views/ModuleB/Home.vue";

import {
  guard1
} from '../NavigationGuards'

export const routes = [
  {
    path: "/home",
    name: "HomeB",
    component: Home,
    beforeEnter: guard1,
  },
  {
    path: "/about-b",
    name: "AboutB",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ModuleB/About.vue")
  }
];