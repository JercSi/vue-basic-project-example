import Home from "@/views/Home.vue";

import {
  guard1
} from '../NavigationGuards'

export const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: guard1,
  },
  {
    path: "/about-b",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];